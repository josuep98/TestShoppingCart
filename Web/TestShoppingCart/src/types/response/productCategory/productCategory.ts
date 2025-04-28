export interface ProductCategory {
    productCategoryId: number;
    productCategoryCode: number;
    productCategoryName: string;
    productCategoryRouteName: string;
    parentCategory: string;
    status: string;
    productCatalogs: ProductCatalog[];
}

export interface ProductCatalog {
    productCatalogId: number;
    productCatalogCode: number;
    productCategoryId: number;
    unitCode: number;
    internalCode: string;
    barcode: string;
    productName: string;
    productDescription: string;
    brand: string;
    location: string;
    priceType: number | null;
}