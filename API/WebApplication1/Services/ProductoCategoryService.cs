using System.Net;
using WebApplication1.DTOs.Response;
using WebApplication1.Interfaces.IRepositories;
using WebApplication1.Interfaces.IServices;

namespace WebApplication1.Services
{
    public class ProductoCategoryService : IProductCategoryService
    {
        private readonly IProductCategoryRepository _productCategoryRepository;
        private readonly ILogger<ProductoCategoryService> _logger;
        public ProductoCategoryService(IProductCategoryRepository productCategoryRepository, ILogger<ProductoCategoryService> logger)
        {
            _productCategoryRepository = productCategoryRepository;
            _logger = logger;
        }

        public async Task<BaseResponse<List<ProductCategoryResponse>>> GetAllProducts()
        {
            try
            {
                var response = await _productCategoryRepository.GetCategoriaProductos();
                return new BaseResponse<List<ProductCategoryResponse>>
                {
                    StatusCode = (int)HttpStatusCode.OK,
                    Result = response?.Select(c => new ProductCategoryResponse
                    {
                        ProductCategoryId = c.caprId,
                        ProductCategoryCode = c.caprCodigo,
                        ProductCategoryName = c.caprNombre,
                        ProductCategoryRouteName = c.caprNombreRuta,
                        ParentCategory = c.caprPadre,
                        Status = c.caprStatus,
                        ProductCatalogs = c.catalogoProd?.Select(p => new ProductCatalog
                        {
                            ProductCatalogId = p.cproId,
                            ProductCatalogCode = p.cproCodigo,
                            ProductCategoryId = p.caprId,
                            UnitCode = p.unidCodigo,
                            InternalCode = p.cproCodigoint,
                            Barcode = p.cproCodigobarras,
                            ProductName = p.cproNombre,
                            ProductDescription = p.cproDescripcion,
                            Brand = p.cproMarca,
                            Location = p.cproUbicacion,
                            PriceType = p.cproTipoPrecio
                        }).ToList()
                    }).ToList()
                };
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error: {ex.Message}");
                return new BaseResponse<List<ProductCategoryResponse>> { StatusCode = (int)HttpStatusCode.BadRequest, Result = null };
            }
        }

    }
}