import { useEffect } from 'react';
import './App.css'
import { useGlobalContext } from './contexts/GlobalContext';
import { configureApiInterceptors } from './services/axiosInstance';
import GlobalLoader from './components/GlobalLoader';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  const { startLoading, stopLoading } = useGlobalContext();

  useEffect(() => {
    configureApiInterceptors(startLoading, stopLoading);
  }, [startLoading, stopLoading]);

  return (
    <div className="App">
      <GlobalLoader />
      <ShoppingCart />
    </div>
  );
}

export default App;