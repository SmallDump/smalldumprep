using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Web;
using System.Web.Mvc;
using System.Threading.Tasks;
using AspNetIdentityApp.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using System.Security.Claims;
using WebApplication1.Models;
using System.ComponentModel.DataAnnotations;
using System.Web.Security;
using System.Security.Principal;
using Microsoft.AspNet.Identity.EntityFramework;
namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        DbSite db = new DbSite();
        public ActionResult Index()
        {
            using (DbSite db = new DbSite())
            {
                var model = new IndexCreate();
                model.News = db.News.ToList();
                model.Conf = db.Conf.ToList();
                if (User.Identity.IsAuthenticated == true)
                {
                    ApplicationUser user = UserManager.FindByName(User.Identity.Name);
                    model.FirstName = user.FirstName;
                    model.SecondName = user.Surname;
                }
                return View(model);
            }
        }
        public ActionResult News()
        {
            return View(db.News);
        }
        public ActionResult Conferences()
        {
            return View(db.Conf);
        }
        public ActionResult News_Page(int id = 1)
        {
            
            return View(db.News.Where(d => d.Id == id).ToList());
        }
        public ActionResult Confs_Page(int id = 1)
        {
            using (DbSite db = new DbSite())
            {
                var model = new ConfView();
                model.Conf = db.Conf.Where(d=>d.Id==id).ToList();
                model.Sections = db.Sections.Where(d=>d.ConfId==id).ToList();
                SelectList section = new SelectList(db.Sections.Where(d => d.ConfId == id).ToList(),"Id", "SectionName");
                ViewBag.Sect = section;
                return View(model);
            }
        }
        public ActionResult About()
        {
            string UserID = User.Identity.Name;
            ApplicationUser user = UserManager.FindByName(UserID);
            using (DbSite db = new DbSite())
            {
                var model = new ConfView();
                
                model.Conf = db.Conf.ToList();

                return View(model);
            }
        }
        [Authorize(Roles = "admin")]
        public ActionResult Contact()
        {
            

            return View();
        }

        private ApplicationUserManager UserManager
        {
            get
            {
                return HttpContext.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
        }

        public ActionResult Register()
        {
            return View();
        }
        public ActionResult Confs()
        {
            
            return View();
        }
        [HttpPost]
        public async Task<ActionResult> Confs_Page(ConfView model, HttpPostedFileBase upload,  int id)
        {
            if ( upload != null)
            {
                    ConfReg confReg = new ConfReg();
                Autors autors = new Autors();
                    // получаем имя файла
                    string fileName = Path.GetFileName(upload.FileName);
                    // сохраняем файл в папку Files в проекте
                    string UserID = User.Identity.Name;
                    ApplicationUser user = UserManager.FindByName(UserID);
                    confReg.UserId = user.Id.ToString();
                    confReg.ConfId = id;
                    confReg.Section = model.Section;
                    confReg.DokladName = model.DokladName;
                    confReg.Status = "Не подтверждено";
                    confReg.FormaUchast = model.FormaUchast;    
                    confReg.DokladPath = fileName;
                db.ConfRegs.Add(confReg);
                int ConfRegID = db.ConfRegs.Max(i=>i.Id) + 1;
                autors.SecondName = model.SecondName;
                autors.FirstName = model.FirstName;
                autors.FatherName = model.FatherName;
                autors.Email = model.Email;
                autors.Organiz = model.Organiz;
                autors.Post = model.Post;
                autors.UchStepen = model.UchStepen;
                autors.UchZvanie = model.UchZvanie;
                autors.ConfsRegId = ConfRegID;
                db.Autors.Add(autors);  
                    await db.SaveChangesAsync();
                    upload.SaveAs(Server.MapPath("/Files/" + fileName));
                    ViewBag.Message = "Заявка успешно отправлена!";
                    return RedirectToAction("Conferences", "Home");
                //Тут доделать надо вставку авторов в базу данных!(не тут еблан)//
            }
            return RedirectToAction("Index", "Home");
        }
        [HttpPost]
        public async Task<ActionResult> Register(RegisterModel model)
        {
            if (ModelState.IsValid)
            {
                ApplicationUser user = new ApplicationUser {FirstName=model.FirstName, UserName = model.Email, Email = model.Email, Year = model.Year, Surname = model.Surname, FatherName = model.FatherName, Country = model.Country, City = model.City };
                IdentityResult result = await UserManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    await UserManager.AddToRoleAsync(user.Id, "user");
                    return RedirectToAction("Index", "Home");
                }
                else
                {
                    foreach (string error in result.Errors)
                    {
                        ModelState.AddModelError("", error);
                    }
                }
            }
            return View(model);
        }
        private IAuthenticationManager AuthenticationManager
        {
            get
            {
                return HttpContext.GetOwinContext().Authentication;
            }
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Login(IndexCreate model, string returnUrl)
        {
            if (ModelState.IsValid)
            {
                ApplicationUser user = await UserManager.FindAsync(model.Email, model.Password);
                if (user == null)
                {
                    ModelState.AddModelError("", "Неверный логин или пароль.");
                }
                else
                {
                    ClaimsIdentity claim = await UserManager.CreateIdentityAsync(user,
                                            DefaultAuthenticationTypes.ApplicationCookie);
                    AuthenticationManager.SignOut();
                    AuthenticationManager.SignIn(new AuthenticationProperties
                    {
                        IsPersistent = false
                    }, claim);
                    if (String.IsNullOrEmpty(returnUrl))
                    {
                        FormsAuthentication.SetAuthCookie(model.Email, true);
                        return RedirectToAction("Index", "Home");
                    }
                    return Redirect(returnUrl);
                }
            }
            ViewBag.returnUrl = returnUrl;
            return RedirectToAction("Register");
        }
        public ActionResult Logout()
        {
            AuthenticationManager.SignOut(DefaultAuthenticationTypes.ApplicationCookie);
            HttpContext.User = new GenericPrincipal(new GenericIdentity(string.Empty), null);
            return RedirectToAction("Index");
        }
        public ActionResult DelImg()
        {
            System.IO.File.Delete("C:/Users/kacka/source/repos/WebApplication1/WebApplication1/Assets/KxltShfNmJg.jpg");
            return RedirectToAction("Index");
        }

    }
}