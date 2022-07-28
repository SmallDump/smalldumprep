namespace WebApplication1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MigrateDB : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "OrgAddr", c => c.String());
            AddColumn("dbo.AspNetUsers", "Post", c => c.String());
            AddColumn("dbo.AspNetUsers", "UchStep", c => c.String());
            AddColumn("dbo.AspNetUsers", "UchZvanie", c => c.String());
            AddColumn("dbo.AspNetUsers", "ImgProfile", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetUsers", "ImgProfile");
            DropColumn("dbo.AspNetUsers", "UchZvanie");
            DropColumn("dbo.AspNetUsers", "UchStep");
            DropColumn("dbo.AspNetUsers", "Post");
            DropColumn("dbo.AspNetUsers", "OrgAddr");
        }
    }
}
