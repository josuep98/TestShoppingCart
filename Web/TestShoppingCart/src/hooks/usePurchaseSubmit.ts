import { useState } from 'react';
import { PurchaseItem } from '../types/request/purchase';
import { useGlobalContext } from '../contexts/GlobalContext';
import { saveProducts } from '../services/purchase';

export const usePurchaseSubmit = (selectedItems: PurchaseItem[], onClearSelection: () => void) => {
    const { withLoading } = useGlobalContext();
    const [response, setResponse] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        setError(null);
        setResponse(null);

        if (selectedItems.length === 0) {
            setError('Debe seleccionar al menos un producto');
            return;
        }

        try {
            const itemsToSend = selectedItems.map(item => ({
                id: item.id,
                name: item.name,
                ...(item.catalogId && { catalogId: item.catalogId }),
                ...(item.catalogDetail && { catalogDetail: item.catalogDetail })
            }));

            const result = await withLoading(saveProducts(itemsToSend));
            setResponse(result.data || 'Compra realizada con éxito');
            onClearSelection();
        } catch (err) {
            setError('Error al procesar la compra');
            console.error('Error:', err);
        }
    };

    return { response, error, handleSubmit };
};
