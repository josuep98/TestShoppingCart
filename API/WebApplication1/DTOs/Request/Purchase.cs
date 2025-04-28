namespace WebApplication1.DTOs.Request
{
    public class Purchase
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? CatalogId { get; set; }
        public string CatalogDetail { get; set; }
    }
}