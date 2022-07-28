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
using System.Data.Entity;

namespace WebApplication1.Controllers
{
    public class AdminController : Controller
    {

        private DbSite db =new DbSite();
        private ApplicationUserManager UserManager
        {
            get
            {
                return HttpContext.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
        }
        private IAuthenticationManager AuthenticationManager
        {
            get
            {
                return HttpContext.GetOwinContext().Authentication;
            }
        }

        public ActionResult Login(string returnUrl)
        {
            ViewBag.returnUrl = returnUrl;
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Login(LoginModel model, string returnUrl)
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
                        IsPersistent = true
                    }, claim);
                    if (String.IsNullOrEmpty(returnUrl))
                        return RedirectToAction("Index", "Admin");
                    return Redirect(returnUrl);
                }
            }
            ViewBag.returnUrl = returnUrl;
            return View(model);
        }
        // GET: Admin
        [Authorize(Roles = "admin")]
        public ActionResult Index()
        {
            return View();
        }
        [Authorize(Roles = "admin")]
        public async Task<ActionResult> News()
        {
            return View(await db.News.ToListAsync());
        }      
        [Authorize(Roles = "admin")]
        public async Task<ActionResult> Users()
        {
            return View(await UserManager.Users.ToListAsync());
        }       
        [Authorize(Roles = "admin")]
        public async Task<ActionResult> Confs()
        {
            return View(await db.Conf.ToListAsync());
        }  
        [Authorize(Roles = "admin")]
        public ActionResult ConfsRegN()
        {
            string status = "Не подтверждено";
            
            return View(db.ConfRegs.Where(d=>d.Status==status));
        }  
        [Authorize(Roles = "admin")]
        public async Task<ActionResult> ConfsReg()
        {
            return View(await db.ConfRegs.ToListAsync());
        }
        [HttpGet]
        [Authorize(Roles = "admin")]
        public ActionResult EditNews(int? id)
        {
            if (id == null)
            {
                return HttpNotFound();
            }
            Newss news = db.News.Find(id);
            if (news != null)
            {
                return View(news);
            }
            return HttpNotFound();
        }
        [HttpPost]
        [Authorize(Roles = "admin")]
        public ActionResult EditNews(Newss news)
        {
            db.Entry(news).State = EntityState.Modified;
            db.SaveChanges();
            return RedirectToAction("News");
        }
        [HttpGet]
        [Authorize(Roles = "admin")]
        public ActionResult EditConf(int? id)
        {
            if (id == null)
            {
                return HttpNotFound();
            }
            Confs conf = db.Conf.Find(id);
            if (conf != null)
            {
                return View(conf);
            }
            return HttpNotFound();
        }
        [HttpPost]
        [Authorize(Roles = "admin")]
        public ActionResult EditConf(Confs conf)
        {
            db.Entry(conf).State = EntityState.Modified;
            db.SaveChanges();
            return RedirectToAction("Confs");
        }
        [HttpGet]
        [Authorize(Roles = "admin")]
        public ActionResult CreateNews()
        {
            return View();
        }
        [HttpPost]
        [Authorize(Roles = "admin")]
        public ActionResult CreateNews(Newss news)
        {
            db.News.Add(news);
            db.SaveChanges();

            return RedirectToAction("Index","Admin");
        }
        [HttpGet]
        [Authorize(Roles = "admin")]
        public ActionResult CreateConf()
        {
            return View();
        }
        [HttpPost]
        [Authorize(Roles = "admin")]
        public ActionResult CreateConf(Confs conf)
        {
            db.Conf.Add(conf);
            db.SaveChanges();

            return RedirectToAction("Index","Admin");
        }
        [HttpGet]
        [Authorize(Roles = "admin")]
        public ActionResult EditConfReg(int? id)
        {
            if (id == null)
            {
                return HttpNotFound();
            }
            ConfReg conf = db.ConfRegs.Find(id);
            if (conf != null)
            {
                return View(conf);
            }
            return HttpNotFound();
        }
        [HttpPost]
        [Authorize(Roles = "admin")]
        public ActionResult EditConfReg(ConfReg conf)
        {
            db.Entry(conf).State = EntityState.Modified;
            db.SaveChanges();
            return RedirectToAction("Index");
        }
        [HttpGet]
        [Authorize(Roles = "admin")]
        public async Task<ActionResult> EditUsers(string id)
        {
            if (id == null)
            {
                return HttpNotFound();
            }
            ApplicationUser user = await UserManager.FindByIdAsync(id);
            UserView model = new UserView();
            if (user != null)
            {
                model.FirstName = user.FirstName;
                model.Surname = user.Surname;
                model.Supervisor = user.Supervisor;
                model.FatherName = user.FatherName;
                model.Year = user.Year;
                model.HomeAddr = user.HomeAddr;
                model.City = user.City;
                model.Country = user.Country;
                model.OrgName = user.OrgName;
                model.OrgAddr = user.OrgAddr;
                model.Email = user.Email;
                model.Phone = user.PhoneNumber;
                model.UchZvanie = user.UchZvanie;
                model.UchStep = user.UchStep;
                model.Post = user.Post;
                model.ImgProfile = user.ImgProfile;

                if (UserManager.IsInRole(user.Id, "admin") == true)
                {
                    model.role = "admin";
                    return View(model);
                }
                if (UserManager.IsInRole(user.Id, "user") == true)
                {
                    model.role = "user";
                    return View(model);
                }
                return View(model);
            }
            return HttpNotFound();
        }
        [HttpPost]
        [Authorize(Roles = "admin")]
        public async Task<ActionResult> EditUsers(UserView User)
        {
            ApplicationUser user = await UserManager.FindByEmailAsync(User.Email);
            user.FirstName = User.FirstName;
            user.Surname = User.Surname;
            user.Supervisor = User.Supervisor;
            user.FatherName = User.FatherName;
            user.Year = User.Year;
            user.HomeAddr = User.HomeAddr;
            user.City = User.City;
            user.Country = User.Country;
            user.OrgName = User.OrgName;
            user.OrgAddr = User.OrgAddr;
            user.Email = User.Email;
            user.PhoneNumber = User.Phone;
            user.UchZvanie = User.UchZvanie;
            user.UchStep = User.UchStep;
            user.Post = User.Post;
            user.ImgProfile = user.ImgProfile;
            IdentityResult result = await UserManager.UpdateAsync(user);

              IdentityResult result1 =  await UserManager.AddToRoleAsync(user.Id, User.role);


            if (result.Succeeded)
            {
                return RedirectToAction("Index", "Admin");
            }
            else
            {
                ModelState.AddModelError("", "Что-то пошло не так");
            }
            return View(User);
        }
        [HttpGet]
        [Authorize(Roles = "admin")]
        public ActionResult CreateUser()
        {
            return View();
        }
        [HttpPost]
        [Authorize(Roles = "admin")]
        public async Task<ActionResult> CreateUser(ApplicationUser user,string password, string role)
        {
            if (ModelState.IsValid)
            {
                IdentityResult result = await UserManager.CreateAsync(user, password);

                if (result.Succeeded)
                {
                    await UserManager.AddToRoleAsync(user.Id, role);
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
            return View(user);
        }
       
    }
}