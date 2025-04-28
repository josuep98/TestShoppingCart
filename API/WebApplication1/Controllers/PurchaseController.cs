using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;
using WebApplication1.DTOs.Request;
using WebApplication1.DTOs.Response;
using WebApplication1.Interfaces.IServices;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [SwaggerTag("Data of purchases")]
    public class PurchaseController : ControllerBase
    {
        private readonly IPurchaseService _purchaseService;
        private readonly ILogger<PurchaseController> _logger;
        public PurchaseController(IPurchaseService purchaseService, ILogger<PurchaseController> logger)
        {
            _purchaseService = purchaseService;
            _logger = logger;
        }

        [HttpPost]
        [Route("save")]
        [SwaggerOperation("Save purchase")]
        [SwaggerResponse((int)HttpStatusCode.OK, Description = "Save detail data of purchase")]
        public async Task<ActionResult<BaseResponse<string>>> Save(List<Purchase> request)
        {
            _logger.LogInformation($"Se llama al servicio de guardar compra");
            var result = await _purchaseService.SavePurchase(request);
            return StatusCode(result.StatusCode, result);
        }
    }
}
