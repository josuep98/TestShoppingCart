import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productCategory";
import { useGlobalContext } from "../contexts/GlobalContext";
import { BaseResponse } from "../types/response/baseResponse";
import { ProductCategory } from "../types/response/productCategory";
import { PurchaseItem } from "../types/request/purchase";

const useShoppingCart = () => {
    const { withLoading } = useGlobalContext();
    const [categories, setCategories] = useState<ProductCategory[]>([]);
    const [selectedItems, setSelectedItems] = useState<PurchaseItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response: BaseResponse<ProductCategory[]> = await getAllProducts();
            setCategories(response.result);
        };

        withLoading(fetchData());
    }, [withLoading]);

    const handleSelectItem = (item: PurchaseItem) => {
        setSelectedItems(prev => [...prev, item]);
        console.log("Lista actualizada:", [...selectedItems, item]);
    };

    const clearSelection = () => {
        setSelectedItems([]);
        console.log("Lista limpiada");
    };

    return { categories, selectedItems, handleSelectItem, clearSelection };
};

export default useShoppingCart;