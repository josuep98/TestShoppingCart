using Newtonsoft.Json;
using System.Net;
using WebApplication1.DTOs.Request;
using WebApplication1.DTOs.Response;
using WebApplication1.Interfaces.IServices;

namespace WebApplication1.Services
{
    public class PurchaseService : IPurchaseService
    {
        private readonly ILogger<PurchaseService> _logger;
        public PurchaseService(ILogger<PurchaseService> logger)
        {
            _logger = logger;
        }

        public async Task<BaseResponse<string>> SavePurchase(List<Purchase> request)
        {
            try
            {
                var purchase = JsonConvert.SerializeObject(request);
                _logger.LogInformation($"Compra: {purchase}");
                return new BaseResponse<string> { StatusCode = (int)HttpStatusCode.OK, Result = "Se guardó la compra correctamente" };
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error: {ex.Message}");
                return new BaseResponse<string> { StatusCode = (int)HttpStatusCode.BadRequest, Result = "Error al guardar la compra" };
            }
        }
    }
}