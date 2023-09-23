import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ContextWrapper from "./contexts/ContextWrapper.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <ContextWrapper>
        <App />
    </ContextWrapper>
)
