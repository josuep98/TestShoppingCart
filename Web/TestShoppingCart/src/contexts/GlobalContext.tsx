import { createContext, useState, useContext, ReactNode, useCallback } from 'react';

type GlobalState = {
    loading: boolean;
    [key: string]: any;
};

type GlobalContextType = {
    state: GlobalState;
    setGlobalState: <K extends keyof GlobalState>(key: K, value: GlobalState[K]) => void;
    startLoading: () => void;
    stopLoading: () => void;
    withLoading: <T>(promise: Promise<T>) => Promise<T>;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
    children: ReactNode;
    initialState?: Partial<GlobalState>;
}

export const GlobalProvider = ({ children, initialState = {} }: GlobalProviderProps) => {
    const [state, setState] = useState<GlobalState>({
        loading: false,
        ...initialState
    });

    const setGlobalState = useCallback(<K extends keyof GlobalState>(key: K, value: GlobalState[K]) => {
        setState(prev => ({ ...prev, [key]: value }));
    }, []);

    const startLoading = useCallback(() => setGlobalState('loading', true), [setGlobalState]);
    const stopLoading = useCallback(() => setGlobalState('loading', false), [setGlobalState]);

    const withLoading = useCallback(async <T,>(promise: Promise<T>) => {
        try {
            startLoading();
            const result = await promise;
            return result;
        } finally {
            stopLoading();
        }
    }, [startLoading, stopLoading]);

    return (
        <GlobalContext.Provider value={{ state, setGlobalState, startLoading, stopLoading, withLoading }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context)
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    return context;
};