import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LoadScript } from '@react-google-maps/api'
import './index.css'
import { App } from './App'

const LIBRARIES: ('places')[] = ['places']

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoadScript
      googleMapsApiKey="AIzaSyABo6PNT0tmM1hPNDrtjNIJU20wiNRhomQ"
      libraries={LIBRARIES}
    >
      <App />
    </LoadScript>
  </StrictMode>,
)
