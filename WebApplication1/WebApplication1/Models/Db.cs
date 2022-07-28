using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.Models
{
    [Table("News")]
    public class Newss
    {
        public string title { get; set; }
        public DateTime Date { get; set; }
        [Key]
        public int Id { get; set; }
        public string FullText { get; set; }
        public string Img { get; set; }
        public string Subtitle { get; set; }
    }
    [Table("Confs")]
    public class Confs
    {
        public string title { get; set; }
        public DateTime Date { get; set; }
        public string Img { get; set; }
        public DateTime EventDateStart { get; set; }
        public DateTime EventDateEnd { get; set; }
        public DateTime EndRegistr { get; set; }
        public DateTime EndAcceptDoklad { get; set; }
        public string WebSite { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string EventPlace { get; set; }
        public string Vznos { get; set; }
        [Key]
        public int Id { get; set; }
    }
    [Table("Section")]
    public class Section
    {
        public int Id { get; set; }
        public string SectionName { get; set; }
        public int ConfId { get; set; }

    }
    [Table("ConfReg")]
    public class ConfReg
    {
     
        public string UserId { get; set; }
        public int ConfId { get; set; }
        [Required(ErrorMessage = "Укажите название доклада!")]
        public string DokladName { get; set; }
        public string Status { get; set; }
        [Required(ErrorMessage = "Укажите форму участия!")]
        public string FormaUchast { get; set; }
        public string DokladPath { get; set; }
        public string Section { get; set; }
        [Key]
        public int Id { get; set; }
     
    }
    [Table("Autors")]
    public class Autors
    {

        public string SecondName { get; set; }
        public string FirstName { get; set; }
        public string FatherName { get; set; }
        public string Email { get; set; }
        public string Organiz { get; set; }
        public string Post { get; set; }
        public string UchStepen { get; set; }
        public string UchZvanie { get; set; }
        [Key]
        public int Id { get; set; }
        public int ConfsRegId { get; set; }

    }

    public class DbSite : DbContext
    {
        public DbSet<Newss> News { get; set; }
        public DbSet<Confs> Conf { get; set; }
        public DbSet<ConfReg> ConfRegs { get; set; }
        public DbSet<Section> Sections { get; set; }
        public DbSet<Autors> Autors { get; set; }

    }
   
}