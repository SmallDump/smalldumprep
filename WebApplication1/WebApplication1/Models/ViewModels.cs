using AspNetIdentityApp.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class IndexCreate
    {
        public IEnumerable<Newss> News { get; set; }
        public IEnumerable<Confs> Conf { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string SecondName { get; set; }

    }
    public class UserView
    {
        public string FirstName { get; set; }
        public DateTime Year { get; set; }
        public string Surname { get; set; }
        public string FatherName { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string HomeAddr { get; set; }
        public string OrgName { get; set; }
        public string Supervisor { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string OrgAddr { get; set; }
        public string Post { get; set; }
        public string UchStep { get; set; }
        public string UchZvanie { get; set; }
        public string ImgProfile { get; set; }
        [DataType(DataType.Password)]
        public string password { get; set; }
        public string role { get; set; }
    }
    public class ConfsRegView
    {
        public IEnumerable<ConfReg> ConfRegs { get; set; }
        public IEnumerable<Confs> Conf { get; set; }
    }
    public class ConfView
    {
        public IEnumerable<Confs> Conf { get; set; }
        [Required(ErrorMessage = "Укажите название доклада!")]
        public string DokladName { get; set; }
        public string Status { get; set; }
        [Required(ErrorMessage = "Укажите форму участия!")]
        public string FormaUchast { get; set; }
        public string DokladPath { get; set; }
        public string Section { get; set; }
        public string SecondName { get; set; }
        public string FirstName { get; set; }
        public string FatherName { get; set; }
        public string Email { get; set; }
        public string Organiz { get; set; }
        public string Post { get; set; }
        public string UchStepen { get; set; }
        public string UchZvanie { get; set; }
        public IEnumerable<Section> Sections { get; set; }
    }
    public class AccountView
    {
        public string FirstName { get; set; }
        public DateTime Year { get; set; }
        public string Surname { get; set; }
        public string FatherName { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string HomeAddr { get; set; }
        public string OrgName { get; set; }
        public string Supervisor { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string OrgAddr { get; set; }
        public string Post { get; set; }
        public string UchStep { get; set; }
        public string UchZvanie { get; set; }
        public string ImgProfile { get; set; }
        public string ConfName { get; set; }
        public IEnumerable<ConfReg> ConfRegs { get; set; }
        public IEnumerable<Confs> Conf { get; set; }
        public List<ConfReg> Zayavki { get; set; }
        
    }
}