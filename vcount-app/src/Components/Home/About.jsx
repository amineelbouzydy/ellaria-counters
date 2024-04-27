import React from 'react'
import aboutImg from "../../Assets/aboutImg.jpg";


const About = () => {
  return (
    <div>
      <div>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div>
                    <img src={aboutImg} alt="" />
                </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDgrey font-semibold mb-4 '>
                        What Are People Counting Sensors?
                    </h2>
                    <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>
                        
Pour des entreprises telles que les centres commerciaux, les magasins de vente au détail, les musées, les restaurants, etc., la collecte et l'analyse des données sur le trafic des clients peuvent créer de la valeur en termes de revenus et d'efficacité commerciale, et générer des informations cruciales qui stimulent les ventes, améliorent les taux de conversion et permettent de prendre des décisions marketing et de dépenses éclairées.
                    </p>
                    <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDgrey transition-all duration-300 hover:translate-y-4'>

                        Learn More
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
