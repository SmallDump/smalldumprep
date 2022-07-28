using AspNetIdentityApp.Models;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace WebApplication1.App_Start
{
    public class CustomUserValidator : UserValidator<ApplicationUser>
    {
        public CustomUserValidator(ApplicationUserManager mgr)
            : base(mgr)
        {
            AllowOnlyAlphanumericUserNames = false;
            RequireUniqueEmail = true;
            

        }
        public override async Task<IdentityResult> ValidateAsync(ApplicationUser user)
        {
            IdentityResult result = await base.ValidateAsync(user);
            if (user.Email.ToLower().EndsWith("@spam.com"))
            {
                var errors = result.Errors.ToList();
                errors.Add("Данный домен находится в спам-базе. Выберите другой почтовый сервис");
                result = new IdentityResult(errors);
            }
            
            return result;
        }
    }
}