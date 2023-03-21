using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UserOnly.Migrations
{
    public partial class mgV2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ProductBase",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    state = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    notes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    groupId = table.Column<int>(type: "int", nullable: true),
                    Discriminator = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductBase", x => x.id);
                    table.ForeignKey(
                        name: "FK_ProductBase_ProductBase_groupId",
                        column: x => x.groupId,
                        principalTable: "ProductBase",
                        principalColumn: "id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProductBase_groupId",
                table: "ProductBase",
                column: "groupId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductBase");
        }
    }
}
