import React from "react";
import style from './style.module.scss'
import styleGestionCarnes from "./GaleriGestion.module.scss";
import styleToDo from "./GaleriToDo.module.scss";
import styleWeather from "./GaleriWeather.module.scss";
import stylePokemon from "./GaleriPokemon.module.scss";
import styleFood from "./GaleriFood.module.scss";
import styleServiExpress from "./GaleriServiExpress.module.scss";


const Galeri = ({project}) => {
  let image1 = ''
  let image2 = ''
  let image3 = ''
  let image4 = ''
  let image5 = ''

if(project==='gestion'){
  image1 = styleGestionCarnes.imageOne
  image2 = styleGestionCarnes.imageTwo
  image3 = styleGestionCarnes.imageThree
  image4 = styleGestionCarnes.imageFour
  image5 = styleGestionCarnes.imageFive
}
if(project==='toDo'){
  image1 = styleToDo.imageOne
  image2 = styleToDo.imageTwo
  image3 = styleToDo.imageThree
  image4 = styleToDo.imageFour
  image5 = styleToDo.imageFive
}
if(project==='weather'){
  image1 = styleWeather.imageOne
  image2 = styleWeather.imageTwo
  image3 = styleWeather.imageThree
  image4 = styleWeather.imageFour
  image5 = styleWeather.imageFive
}
if(project==='pokemon'){
  image1 = stylePokemon.imageOne
  image2 = stylePokemon.imageTwo
  image3 = stylePokemon.imageThree
  image4 = stylePokemon.imageFour
  image5 = stylePokemon.imageFive
}
if(project==='food'){
  image1 = styleFood.imageOne
  image2 = styleFood.imageTwo
  image3 = styleFood.imageThree
  image4 = styleFood.imageFour
  image5 = styleFood.imageFive
}
if(project==='serviExpress'){
  image1 = styleServiExpress.imageOne
  image2 = styleServiExpress.imageTwo
  image3 = styleServiExpress.imageThree
  image4 = styleServiExpress.imageFour
  image5 = styleServiExpress.imageFive
}

  return (
    <div className={style.galeri}>
      <div className={image1}></div>
      <div className={image2}></div>
      <div className={image3}></div>
      <div className={image4}></div>
      <div className={image5}></div>
    </div>
  );
};

export default Galeri;
