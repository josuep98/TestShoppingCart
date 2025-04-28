using WebApplication1.Interfaces.IRepositories;
using WebApplication1.Interfaces.IServices;
using WebApplication1.Repositories;
using WebApplication1.Services;

namespace WebApplication1
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            //Repositories
            services.AddScoped<IProductCategoryRepository, ProductCategoryRepository>()
            //Services
                    .AddScoped<IProductCategoryService, ProductoCategoryService>()
                    .AddScoped<IPurchaseService, PurchaseService>();
            return services;
        }
    }
}