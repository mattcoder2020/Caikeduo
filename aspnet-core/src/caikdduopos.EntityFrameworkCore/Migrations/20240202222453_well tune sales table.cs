using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace caikdduopos.Migrations
{
    /// <inheritdoc />
    public partial class welltunesalestable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ProductId",
                table: "MerchandiseSales",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_MerchandiseSales_ProductId",
                table: "MerchandiseSales",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_MerchandiseSales_SalesId",
                table: "MerchandiseSales",
                column: "SalesId");

            migrationBuilder.AddForeignKey(
                name: "FK_MerchandiseSales_Products_ProductId",
                table: "MerchandiseSales",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MerchandiseSales_Sales_SalesId",
                table: "MerchandiseSales",
                column: "SalesId",
                principalTable: "Sales",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MerchandiseSales_Products_ProductId",
                table: "MerchandiseSales");

            migrationBuilder.DropForeignKey(
                name: "FK_MerchandiseSales_Sales_SalesId",
                table: "MerchandiseSales");

            migrationBuilder.DropIndex(
                name: "IX_MerchandiseSales_ProductId",
                table: "MerchandiseSales");

            migrationBuilder.DropIndex(
                name: "IX_MerchandiseSales_SalesId",
                table: "MerchandiseSales");

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "MerchandiseSales");
        }
    }
}
