using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace caikdduopos.Migrations
{
    /// <inheritdoc />
    public partial class addfieldsinpaymentmethodtable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "PaymentMethods",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<bool>(
                name: "IsDefault",
                table: "PaymentMethods",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "PaymentMethods");

            migrationBuilder.DropColumn(
                name: "IsDefault",
                table: "PaymentMethods");
        }
    }
}
