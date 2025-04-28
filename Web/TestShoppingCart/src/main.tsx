import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GlobalProvider } from './contexts/GlobalContext.tsx'

const initialState = {
  loading: false
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProvider initialState={initialState}>
      <App />
    </GlobalProvider>
  </StrictMode>,
)
