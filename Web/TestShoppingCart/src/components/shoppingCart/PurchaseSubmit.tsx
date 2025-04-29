import { PurchaseItem } from '../../types/request/purchase';
import { usePurchaseSubmit } from '../../hooks/usePurchaseSubmit'; // ajusta la ruta si es necesario

interface PurchaseSubmitProps {
    selectedItems: PurchaseItem[];
    onClearSelection: () => void;
}

export const PurchaseSubmit = ({ selectedItems, onClearSelection }: PurchaseSubmitProps) => {
    const { response, error, handleSubmit } = usePurchaseSubmit(selectedItems, onClearSelection);

    return (
        <div className="purchase-submit">
            <h3>Lista de Compra</h3>

            {selectedItems.length === 0 ? (
                <p>No hay items seleccionados</p>
            ) : (
                <ul className="selected-items">
                    {selectedItems.map((item, index) => (
                        <li key={`${item.id}-${index}`}>
                            {item.name}
                            {item.catalogDetail && ` - ${item.catalogDetail}`}
                        </li>
                    ))}
                </ul>
            )}

            <div className="submit-actions">
                <button onClick={handleSubmit}>
                    Enviar Compra
                </button>
            </div>

            {error && <div className="error-message">{error}</div>}
            {response && <div className="success-message">{response}</div>}
        </div>
    );
};