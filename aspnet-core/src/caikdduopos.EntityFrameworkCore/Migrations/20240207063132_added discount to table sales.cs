using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace caikdduopos.Migrations
{
    /// <inheritdoc />
    public partial class addeddiscounttotablesales : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MerchandiseSales_Cashiers_CashierId",
                table: "MerchandiseSales");

            migrationBuilder.DropForeignKey(
                name: "FK_MerchandiseSales_Products_ProductId",
                table: "MerchandiseSales");

            migrationBuilder.DropIndex(
                name: "IX_MerchandiseSales_CashierId",
                table: "MerchandiseSales");

            migrationBuilder.DropIndex(
                name: "IX_MerchandiseSales_ProductId",
                table: "MerchandiseSales");

            migrationBuilder.DropColumn(
                name: "CashierId",
                table: "MerchandiseSales");

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "MerchandiseSales");

            migrationBuilder.AlterColumn<decimal>(
                name: "Amount",
                table: "Sales",
                type: "decimal(65,30)",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "double");

            migrationBuilder.AddColumn<decimal>(
                name: "Discount",
                table: "Sales",
                type: "decimal(65,30)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<int>(
                name: "ProductId",
                table: "Sales",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Quantity",
                table: "Sales",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Sales_ProductId",
                table: "Sales",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_Sales_Products_ProductId",
                table: "Sales",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sales_Products_ProductId",
                table: "Sales");

            migrationBuilder.DropIndex(
                name: "IX_Sales_ProductId",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "Discount",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "Sales");

            migrationBuilder.DropColumn(
                name: "Quantity",
                table: "Sales");

            migrationBuilder.AlterColumn<double>(
                name: "Amount",
                table: "Sales",
                type: "double",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(65,30)");

            migrationBuilder.AddColumn<int>(
                name: "CashierId",
                table: "MerchandiseSales",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ProductId",
                table: "MerchandiseSales",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_MerchandiseSales_CashierId",
                table: "MerchandiseSales",
                column: "CashierId");

            migrationBuilder.CreateIndex(
                name: "IX_MerchandiseSales_ProductId",
                table: "MerchandiseSales",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_MerchandiseSales_Cashiers_CashierId",
                table: "MerchandiseSales",
                column: "CashierId",
                principalTable: "Cashiers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MerchandiseSales_Products_ProductId",
                table: "MerchandiseSales",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
