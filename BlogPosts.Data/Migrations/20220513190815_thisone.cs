using Microsoft.EntityFrameworkCore.Migrations;

namespace BlogPosts.Data.Migrations
{
    public partial class thisone : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Blogs_BlogPostId",
                table: "Comments");

            migrationBuilder.AlterColumn<int>(
                name: "BlogPostId",
                table: "Comments",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Blogs_BlogPostId",
                table: "Comments",
                column: "BlogPostId",
                principalTable: "Blogs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Blogs_BlogPostId",
                table: "Comments");

            migrationBuilder.AlterColumn<int>(
                name: "BlogPostId",
                table: "Comments",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Blogs_BlogPostId",
                table: "Comments",
                column: "BlogPostId",
                principalTable: "Blogs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
