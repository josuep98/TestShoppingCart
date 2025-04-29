import { useState } from "react";

interface Product {
    productCatalogCode: string;
    productName: string;
}

interface Category {
    productCategoryCode: string;
    productCategoryName: string;
    productCatalogs: Product[];
}

export const useProductSelect = (categories: Category[]) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [childCategories, setChildCategories] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

    const handleSelectCategory = (categoryCode: string) => {
        const category = categories.find(c => c.productCategoryCode === categoryCode);
        if (category?.productCatalogs) setChildCategories(category.productCatalogs);
        else setChildCategories([]);

        setSelectedCategory(categoryCode);
        setSelectedProduct(null);
    };

    const handleSelectProduct = (productCode: string) => {
        setSelectedProduct(productCode);
    };

    const getSelectedProduct = () => {
        if (!selectedProduct) return null;
        return childCategories.find(p => p.productCatalogCode === selectedProduct);
    };

    const addProductToCart = () => {
        const product = getSelectedProduct();
        if (product) {
            return {
                id: product.productCatalogCode,
                name: product.productName
            };
        }
        return null;
    };

    return { selectedCategory, childCategories, selectedProduct, handleSelectCategory, handleSelectProduct, addProductToCart, getSelectedProduct };
};