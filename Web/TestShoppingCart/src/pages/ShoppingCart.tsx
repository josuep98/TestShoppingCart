import ProductSelect from "../components/shoppingCart/ProductSelect.tsx";
import { PurchaseSubmit } from "../components/shoppingCart/PurchaseSubmit.tsx";
import useShoppingCart from "../hooks/useShoppingCart";
import { Button } from "antd";

function ShoppingCart() {
    const { categories, selectedItems, handleSelectItem, clearSelection } = useShoppingCart();

    return (
        <div className="shopping-cart-container">
            <h1>Carrito de compras</h1>

            <ProductSelect
                categories={categories}
                onSelectItem={handleSelectItem}
            />

            <div style={{ margin: "20px 0" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>Items seleccionados:</h3>
                    {selectedItems.length > 0 && (
                        <Button
                            type="primary"
                            danger
                            onClick={clearSelection}
                            style={{ marginLeft: '10px' }}
                        >
                            Limpiar lista
                        </Button>
                    )}
                </div>
                <ul>
                    {selectedItems.length === 0 ? (
                        <li>No hay items seleccionados</li>
                    ) : (
                        selectedItems.map((item, index) => (
                            <li key={`${item.id}-${index}`}>{item.name}</li>
                        ))
                    )}
                </ul>
            </div>

            <PurchaseSubmit
                selectedItems={selectedItems}
                onClearSelection={clearSelection}
            />
        </div>
    );
}

export default ShoppingCart;