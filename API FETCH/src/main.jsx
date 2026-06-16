import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FetchAPI from './FetchApi' //Fetching Api with .this() and .fetch
import AsyncAwait from './AsyncAwait' // by doing fetching fetch.() by async and await promises 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <FetchAPI/> */}
    {/* <AsyncAwait/> */} 
  </StrictMode>,
)
