import pokemon1 from "../../Utils/Pokemon/pokemon_-_detail-readme_gyltnu.jpg"
import pokemon2 from "../../Utils/Pokemon/pokemon_-_form-readme_jllwxl.jpg"
import pokemon3 from "../../Utils/Pokemon/pokemon_-_home-readme_mamfwg.jpg"
import pokemon4 from "../../Utils/Pokemon/pokemon_-_Landing-readme_t7mep3.jpg"
import food1 from "../../Utils/FoodApi/food1_-_home_pqzrsm.jpg"
import food2 from "../../Utils/FoodApi/food1_-_landing_f4mxn2.jpg"
import food3 from "../../Utils/FoodApi/food1_-_loading_c5h80u.jpg"
import food4 from "../../Utils/FoodApi/food1_-_new_recipe_rcyxfx.jpg"
import food5 from "../../Utils/FoodApi/food1_-_sweetAlert_qzmv2z.jpg"
import servex1 from "../../Utils/ServEx/ServiExpress_-_Contact_nncz3m.jpg"
import servex2 from "../../Utils/ServEx/ServiExpress_-_Detail1_fmrdnu.jpg"
import servex3 from "../../Utils/ServEx/ServiExpress_-_Detail2_qle5lm.jpg"
import servex4 from "../../Utils/ServEx/ServiExpress_-_Detail3_utcjvi.jpg"
import servex5 from "../../Utils/ServEx/ServiExpress_-_Fav_yi7i8u.jpg"
import servex6 from "../../Utils/ServEx/ServiExpress_-_Home_uskzdr.jpg"
import servex7 from "../../Utils/ServEx/ServiExpress_-_inicio_sesion_jfxdyd.jpg"
import servex8 from "../../Utils/ServEx/ServiExpress_-_Landing_jcaryb.jpg"
import servex9 from "../../Utils/ServEx/ServiExpress_-_Login_c0kcgy.jpg"
import servex10 from "../../Utils/ServEx/ServiExpress_-_Profile_exih7d.jpg"
import servex11 from "../../Utils/ServEx/ServiExpress_-_Register_email_urtf2a.jpg"
import servex12 from "../../Utils/ServEx/ServiExpress_-_Register_yajwze.jpg"
import gestion1 from "../../Utils/Gestion/gestion1.jpg"
import gestion2 from "../../Utils/Gestion/gestion2.jpg"
import gestion3 from "../../Utils/Gestion/gestion3.jpg"
import gestion4 from "../../Utils/Gestion/gestion4.jpg"
import gestion5 from "../../Utils/Gestion/gestion5.jpg"
import gestion6 from "../../Utils/Gestion/gestion6.jpg"
import gestion7 from "../../Utils/Gestion/gestion7.jpg"
import gestion8 from "../../Utils/Gestion/gestion8.jpg"
import gestion9 from "../../Utils/Gestion/gestion9.jpg"
import gestion10 from "../../Utils/Gestion/gestion10.jpg"



export default function Albums(name){

    const Pokemon = [pokemon1,pokemon2,pokemon3,pokemon4]
    const FoodApi = [food1,food2,food3,food4,food5]
    const GatoGestion = [gestion1,gestion2,gestion3,gestion4,gestion5,gestion6,gestion7,gestion8,gestion9,gestion10]
    const ProyGrupal = []
    const Portafolio = []
    const ServEx = [servex1,servex2,servex3,servex4,servex5,servex6,servex7,servex8,servex9,servex10,servex11,servex11,servex12]

return(name=="⚡ PokemonApi"?Pokemon:name=="🐄 Gestion de Carnes"?GatoGestion:name=="🚘 OnDrive"?ProyGrupal:name=="💼Porfolio"?
Portafolio:name=="🍏 FoodApi"?FoodApi:name=="👷🏽‍♂️ ServiExpress"?ServEx:[])
}