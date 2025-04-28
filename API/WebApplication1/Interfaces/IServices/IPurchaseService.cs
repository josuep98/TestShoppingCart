using WebApplication1.DTOs.Request;
using WebApplication1.DTOs.Response;

namespace WebApplication1.Interfaces.IServices
{
    public interface IPurchaseService
    {
        Task<BaseResponse<string>> SavePurchase(List<Purchase> request);
    }
}