import { Select } from "antd";
import { useProductSelect } from "../../hooks/useProductSelect";
import { Button } from "antd";

const { Option } = Select;

interface ProductSelectProps {
    categories: any[];
    onSelectItem: (item: any) => void;
}

const ProductSelect = ({ categories, onSelectItem }: ProductSelectProps) => {
    const { selectedCategory, childCategories, selectedProduct, handleSelectCategory, handleSelectProduct, addProductToCart } = useProductSelect(categories);

    const handleAddToCart = () => {
        const product = addProductToCart();
        if (product) {
            onSelectItem(product);
            console.log("Producto agregado:", product);
        }
    };

    return (
        <div>
            <Select
                style={{ width: "100%" }}
                placeholder="Seleccionar categoría"
                value={selectedCategory}
                onChange={handleSelectCategory}
            >
                {categories.map((category) => (
                    <Option key={category.productCategoryCode} value={category.productCategoryCode}>
                        {category.productCategoryName}
                    </Option>
                ))}
            </Select>

            {childCategories.length > 0 && (
                <>
                    <Select
                        style={{ width: "100%", marginTop: "10px" }}
                        placeholder="Seleccionar producto"
                        value={selectedProduct}
                        onChange={handleSelectProduct}
                    >
                        {childCategories.map((product) => (
                            <Option key={product.productCatalogCode} value={product.productCatalogCode}>
                                {product.productName}
                            </Option>
                        ))}
                    </Select>
                    <Button
                        type="primary"
                        onClick={handleAddToCart}
                        style={{ marginTop: "10px" }}
                        disabled={!selectedProduct}
                    >
                        Agregar al carrito
                    </Button>
                </>
            )}
        </div>
    );
};

export default ProductSelect;