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
    public class AccountController : Controller
    {
        private ApplicationUserManager UserManager
        {
            get
            {
                return HttpContext.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
        }
        // GET: Account
        [Authorize(Roles = "user, admin")]
        public ActionResult Account()
        {
            using (DbSite db = new DbSite())
            {
                var model = new AccountView();
                DateTime date = DateTime.Now;
                model.Conf = db.Conf.ToList();
                string UserID = User.Identity.Name;
                ApplicationUser user = UserManager.FindByName(UserID);
                model.ConfRegs = db.ConfRegs.Where(d => d.UserId == user.Id).ToList();
                model.Zayavki = new List<ConfReg>();
                foreach (var b in db.ConfRegs.Where(d => d.UserId == user.Id).ToList())
                {
                    foreach (var k in model.Conf.Where(d => d.Id == b.ConfId))
                    {
                        if (k.EventDateEnd >= date)
                        {
                            model.Zayavki.Add(b);
                        }
                    }
                }
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
                return View(model);
            }
        }
        [HttpPost]
        public async Task<ActionResult> Account_Edit(AccountView model, HttpPostedFileBase upload)
        {
            string fileName;
            ApplicationUser user = await UserManager.FindByEmailAsync(User.Identity.Name);

            if (user != null)
            {
                user.FirstName = model.FirstName;
                user.Surname = model.Surname;
                user.Supervisor = model.Supervisor;
                user.FatherName = model.FatherName;
                user.Year = model.Year;
                user.HomeAddr = model.HomeAddr;
                user.City = model.City;
                user.Country = model.Country;
                user.OrgName = model.OrgName;
                user.OrgAddr = model.OrgAddr;
                user.Email = model.Email;
                user.PhoneNumber = model.Phone;
                user.UchZvanie = model.UchZvanie;
                user.UchStep = model.UchStep;
                user.Post = model.Post;
                if (upload != null)
                {
                    fileName = Path.GetFileName(upload.FileName);
                    user.ImgProfile = fileName;
                    upload.SaveAs(Server.MapPath("/Image/" + fileName));

                }



                IdentityResult result = await UserManager.UpdateAsync(user);

                if (result.Succeeded)
                {
                    return RedirectToAction("Account", "Account");
                }
                else
                {
                    ModelState.AddModelError("", "Что-то пошло не так");
                }
            }
            else
            {
                ModelState.AddModelError("", "Пользователь не найден");
            }



            return RedirectToAction("Index", "Home");
        }

        [HttpPost]
        public async Task<ActionResult> Change_Password(string password, string passwordConfirm)
        {
            if (password != null && passwordConfirm != null)
            {
                ApplicationUser user = await UserManager.FindByEmailAsync(User.Identity.Name);
                if (user != null)
                {
                    IdentityResult result =
                        await UserManager.ChangePasswordAsync(user.Id,password,passwordConfirm);
                    if (result.Succeeded)
                    {
                        return RedirectToAction("Account", "Account");
                    }
                    else
                    {
                        foreach (var error in result.Errors)
                        {
                            ModelState.AddModelError("", "Что-то пошло не так");
                        }
                    }
                }
                else
                {
                    ModelState.AddModelError(string.Empty, "Пользователь не найден");
                }
                ModelState.AddModelError("", "Что-то пошло не так");
            }
            ModelState.AddModelError("", "Что-то пошло не так");
            return RedirectToAction("Account", "Account");
        }

    }
}
    
    
