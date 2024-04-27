import React from "react";
import Decathlon from "../../Assets/Decathlon.png";
import koton from "../../Assets/Koton.png";
import Fils from "../../Assets/fils.png";
import miniso from "../../Assets/Miniso.png";
import ikea from "../../Assets/ikea.png";
import yvesrocher from "../../Assets/YvesRocher.png";
import apple from "../../Assets/apple.png";
import industrie1 from "../../Assets/shoppingmalls.png";
import industrie2 from "../../Assets/hotel.png";

const Services = () => {

  const services = [
    {id:1 , title:"Magasins et Centres commerciaux", description:"Le compteur de trafic dans les magasins fournit des données en temps réel et précis à 99,9 % des personnes entrant et sortant de votre entreprise.", image: industrie1 },
    {id:2 , title:"Hotels & Restaurants", description:"Les gestionnaires d'hôtel peuvent exploiter des analyses avancées des visiteurs pour prévoir avec précision les saisons de pointe.", image: industrie2 },
    {id:3 , title:"Banques", description:"Les banques peuvent mesurer en continu le trafic piétonnier et l'occupation en temps réel au sein de leurs agences.", image: industrie1 }
  ]
  return (
    <div className="md:px-14 px-4  max-width-screen-2xl mx-auto ">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDgrey font-semibold mb-2">
          Nos Clients
        </h2>
        <p className="text-neutralDgrey">
          Nous avons travaillé avec quelques clients qui nous font confiance
        </p>
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src={Decathlon} alt="" className="w-28" />
          <img src={koton} alt="" className="w-28" />
          <img src={Fils} alt="" className="w-28" />
          <img src={miniso} alt="" className="w-16" />
          <img src={yvesrocher} alt="" className="w-28" />
          <img src={apple} alt="" className="w-20" />
          <img src={ikea} alt="" className="w-28" />
        </div>
      </div>

      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDgrey font-semibold mb-2">
        Adapté à Tous les Secteurs
        </h2>
        <p className="text-neutralDgrey">
        Nos produits convient à tous les secteurs.Ils répond aux besoins variés des entreprises.</p>
      </div>
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {
          services.map(services => <div key={services.id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer
          hover:-translate-y-5 hover:border-b-4 hover:border-brandPrimary transition-all duration-300">
              <div>
                <div className=" h-14 mb-4 w-14 mx-auto rounded-tl-3xl rounded-br-3xl"> <img src={services.image} alt=""  /> </div>
                <h4 className="text-2xl font-bold text-neutralDgrey mb-2 px-2">{services.title}</h4>
                <p className="text-sm text-neutralGrey">{services.description}</p>
              </div>
            
             </div>)
        }
      </div>

    </div>
  );
};

export default Services;
