namespace WebApplication1.DTOs.Response
{
    public class ProductCategoryResponse
    {
        public int ProductCategoryId { get; set; }
        public int ProductCategoryCode { get; set; }
        public string ProductCategoryName { get; set; }
        public string ProductCategoryRouteName { get; set; }
        public string ParentCategory { get; set; }
        public string Status { get; set; }
        public List<ProductCatalog> ProductCatalogs { get; set; }
    }

    public class ProductCatalog
    {
        public int ProductCatalogId { get; set; }
        public int ProductCatalogCode { get; set; }
        public int ProductCategoryId { get; set; }
        public int UnitCode { get; set; }
        public string InternalCode { get; set; }
        public string Barcode { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public string Brand { get; set; }
        public string Location { get; set; }
        public int? PriceType { get; set; }
    }
}