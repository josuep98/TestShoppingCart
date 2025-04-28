using WebApplication1.DTOs.Response;

namespace WebApplication1.Interfaces.IServices
{
    public interface IProductCategoryService
    {
        Task<BaseResponse<List<ProductCategoryResponse>>> GetAllProducts();
    }
}