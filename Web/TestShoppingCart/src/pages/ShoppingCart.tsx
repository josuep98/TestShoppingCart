import { useEffect } from "react";
import { getAllProducts } from "../services/productCategory";
import { useGlobalContext } from "../contexts/GlobalContext";

function ShoppingCart() {
    const { withLoading } = useGlobalContext();

    useEffect(() => {
        withLoading(getAllProducts());
    }, [withLoading]);

    return (
        <h1>Carrito de compras</h1>
    )
}

export default ShoppingCart;
