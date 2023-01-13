using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Repositories.Migrations
{
    public partial class CreateProject : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductDetails_ProductDetailHeadPhones_HeadPhoneId",
                table: "ProductDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductDetails_ProductDetailManWomens_ManWomenId",
                table: "ProductDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductDetails_ProductDetailPcs_PcId",
                table: "ProductDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductDetails_ProductDetailPhones_PhoneId",
                table: "ProductDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductDetails_ProductDetailTvs_TvId",
                table: "ProductDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductDetails_ProductDetailWatches_WacthId",
                table: "ProductDetails");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4daab474-4f8d-4f93-b7c5-763096b259d4");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a54c500c-61fc-4322-acc8-49b0cc6db8a6");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "000f7cc3-19d2-46e1-a896-de8421ab46e7", "3addd4eb-a080-4a66-983f-c1b110f58597", "Administrator", "ADMINISTRATOR" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "6b90b93e-a34e-461d-bcb7-a7dc3257e2e6", "3db35acb-5227-4f9f-8e71-08821824b84d", "MANAGER", "MANAGER" });

            migrationBuilder.AddForeignKey(
                name: "FK_ProductDetails_ProductDetailHeadPhones_HeadPhoneId",
                table: "ProductDetails",
                column: "HeadPhoneId",
                principalTable: "ProductDetailHeadPhones",
                principalColumn: "HeadPhoneId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductDetails_ProductDetailManWomens_ManWomenId",
                table: "ProductDetails",
                column: "ManWomenId",
                principalTable: "ProductDetailManWomens",
                principalColumn: "ManWomenId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductDetails_ProductDetailPcs_PcId",
                table: "ProductDetails",
                column: "PcId",
                principalTable: "ProductDetailPcs",
                principalColumn: "PcId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductDetails_ProductDetailPhones_PhoneId",
                table: "ProductDetails",
                column: "PhoneId",
                principalTable: "ProductDetailPhones",
                principalColumn: "PhoneId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductDetails_ProductDetailTvs_TvId",
                table: "ProductDetails",
                column: "TvId",
                principalTable: "ProductDetailTvs",
                principalColumn: "TvId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductDetails_ProductDetailWatches_WacthId",
                table: "ProductDetails",
                column: "WacthId",
                principalTable: "ProductDetailWatches",
                principalColumn: "WatchId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductDetails_ProductDetailHeadPhones_HeadPhoneId",
                table: "ProductDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductDetails_ProductDetailManWomens_ManWomenId",
                table: "ProductDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductDetails_ProductDetailPcs_PcId",
                table: "ProductDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductDetails_ProductDetailPhones_PhoneId",
                table: "ProductDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductDetails_ProductDetailTvs_TvId",
                table: "ProductDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductDetails_ProductDetailWatches_WacthId",
                table: "ProductDetails");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "000f7cc3-19d2-46e1-a896-de8421ab46e7");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6b90b93e-a34e-461d-bcb7-a7dc3257e2e6");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "4daab474-4f8d-4f93-b7c5-763096b259d4", "6f574cf7-4b05-4838-9a09-cd63f0685a72", "MANAGER", "MANAGER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "a54c500c-61fc-4322-acc8-49b0cc6db8a6", "0900c1b5-807f-4134-bb32-bde7f6ef3acc", "Administrator", "ADMINISTRATOR" });

            migrationBuilder.AddForeignKey(
                name: "FK_ProductDetails_ProductDetailHeadPhones_HeadPhoneId",
                table: "ProductDetails",
                column: "HeadPhoneId",
                principalTable: "ProductDetailHeadPhones",
                principalColumn: "HeadPhoneId",
                onDelete: ReferentialAction.SetNull);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductDetails_ProductDetailManWomens_ManWomenId",
                table: "ProductDetails",
                column: "ManWomenId",
                principalTable: "ProductDetailManWomens",
                principalColumn: "ManWomenId");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductDetails_ProductDetailPcs_PcId",
                table: "ProductDetails",
                column: "PcId",
                principalTable: "ProductDetailPcs",
                principalColumn: "PcId",
                onDelete: ReferentialAction.SetNull);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductDetails_ProductDetailPhones_PhoneId",
                table: "ProductDetails",
                column: "PhoneId",
                principalTable: "ProductDetailPhones",
                principalColumn: "PhoneId",
                onDelete: ReferentialAction.SetNull);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductDetails_ProductDetailTvs_TvId",
                table: "ProductDetails",
                column: "TvId",
                principalTable: "ProductDetailTvs",
                principalColumn: "TvId",
                onDelete: ReferentialAction.SetNull);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductDetails_ProductDetailWatches_WacthId",
                table: "ProductDetails",
                column: "WacthId",
                principalTable: "ProductDetailWatches",
                principalColumn: "WatchId",
                onDelete: ReferentialAction.SetNull);
        }
    }
}
