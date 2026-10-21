import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function SpecialButton ({text}){
  return(
    <button>{text}</button>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpecialButton text={"Boton 1"}></SpecialButton>
    <SpecialButton text={"Boton 2"}></SpecialButton>
    <SpecialButton text={"Boton 3"}></SpecialButton>
  </StrictMode>,
)
