using WebApplication1.Models;

namespace WebApplication1.Interfaces.IRepositories
{
    public interface IProductCategoryRepository
    {
        Task<List<CategoriaProducto>> GetCategoriaProductos();
    }
}