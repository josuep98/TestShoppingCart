using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;
using WebApplication1.DTOs.Response;
using WebApplication1.Interfaces.IServices;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [SwaggerTag("Data of products")]
    public class ProductCategoryController : ControllerBase
    {
        private readonly IProductCategoryService _productCategoryService;
        private readonly ILogger<ProductCategoryController> _logger;

        public ProductCategoryController(IProductCategoryService productCategoryService, ILogger<ProductCategoryController> logger)
        {
            _productCategoryService = productCategoryService;
            _logger = logger;
        }

        [HttpGet]
        [Route("getAll")]
        [SwaggerOperation("Get data of products")]
        [SwaggerResponse((int)HttpStatusCode.OK, Description = "Return list of products")]
        public async Task<ActionResult<BaseResponse<List<ProductCategoryResponse>>>> GetAll()
        {
            _logger.LogInformation($"Se llama al servicio de listado de productos");
            var result = await _productCategoryService.GetAllProducts();
            return StatusCode(result.StatusCode, result);
        }

    }
}