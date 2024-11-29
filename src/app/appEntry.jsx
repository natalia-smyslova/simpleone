import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './main.jsx';
import '../scss/main.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container'>
      <Main />
    </div>
  </StrictMode>
)
