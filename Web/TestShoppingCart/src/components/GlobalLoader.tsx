import { Spin } from 'antd';
import { useGlobalContext } from '../contexts/GlobalContext';

const GlobalLoader = () => {
    const { state: { loading } } = useGlobalContext();

    if (!loading) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            pointerEvents: 'none'
        }}>
            <Spin
                size="large"
                tip="Cargando..."
                style={{
                    pointerEvents: 'auto'
                }}
            />
        </div>
    );
};

export default GlobalLoader;