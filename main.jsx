import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function SpecialImage({image}){
  return[
    <img src={image} alt='imagen'></img>
  ]
}

function SpecialText({text}){
  return[
    <p>{text}</p>
  ]
}

function SpecialButton({text}){
  return[
    <button>{text}</button>
  ]
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpecialText text={"Juan Pablo Londoño Arenas"}></SpecialText>
    <SpecialButton text={"click"}></SpecialButton>
    <SpecialImage image={"https://i.pinimg.com/originals/87/e0/f9/87e0f99612ac28189bd232d90f0b53a3.jpg"}></SpecialImage>

    <SpecialText text={"Luis Estaban Rojo Rosales"}></SpecialText>
    <SpecialButton text={"click"}></SpecialButton>
    <SpecialImage image={"https://cdn.kastatic.org/ka-perseus-images/9ceb131bcf850dba4c7f29f9b7822db2316fd2f7.jpg"}></SpecialImage>

    <SpecialText text={"Maria Jose Manazanos Puerta"}></SpecialText>
    <SpecialButton text={"click"}></SpecialButton>
    <SpecialImage image={"https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg"}></SpecialImage>
  
  </StrictMode>,
)
