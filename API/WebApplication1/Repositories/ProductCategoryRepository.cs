using Newtonsoft.Json;
using WebApplication1.Interfaces.IRepositories;
using WebApplication1.Models;

namespace WebApplication1.Repositories
{
    public class ProductCategoryRepository : IProductCategoryRepository
    {
        public async Task<List<CategoriaProducto>> GetCategoriaProductos()
        {
            string jsonPath = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "products.json");
            string jsonData = File.ReadAllText(jsonPath);
            return JsonConvert.DeserializeObject<List<CategoriaProducto>>(jsonData);
        }
    }
}