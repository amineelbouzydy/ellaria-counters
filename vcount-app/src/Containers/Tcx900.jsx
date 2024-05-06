"use client";
import React from 'react'
import tcx900 from "../Assets/TCx900.png";
import tcx900Ports from "../Assets/TCx900Ports.png";
import tcx900Antenna from "../Assets/TCx900antennasq.png";
import tcx900Environmental from "../Assets/TCx900Environmental.png";
import { Carousel } from "flowbite-react";


const Tcx900 = () => {
    
  return (
    <div className='flex flex-col items-center'>
<div className='flex justify-around mt-40 '>
      <div className='flex flex-col justify-around px-10 w-1/2 h-80 '>
        <h1 className='text-6xl font-bold'>
         TCx® 900
        </h1>
        <p className='text-xl '>
            Le système de point de vente (POS) TCx® 900 offre une solution modulaire "meilleure de sa catégorie" qui permet des transactions plus intelligentes pour les détaillants. Conçu pour le commerce de détail, le design puissant mais élégant du TCx 900 se vante d'avoir l'une des empreintes les plus petites sur le marché aujourd'hui, offrant aux détaillants une solution modulaire, compacte et efficace pour leurs magasins.
        </p>
      </div>
      
    

      <div className="w-2/6  ">
      <Carousel indicators={false}  className='p-10'>
        <img src={tcx900} alt="..." />
        <img src={tcx900Ports} alt="..." />
        <img src={tcx900Antenna} alt="..." />
        <img src={tcx900Environmental} alt="..." />
      </Carousel>
    </div>
    </div>

    <div className='flex justify-around gap-20 px-20 mt-28  h-80 '>
      <div className='w-1/2'>
      <h1 className='text-2xl underline text-brandPrimary mb-10 font-bold'>
         About TCx® 900
        </h1>
        <ul class="list-disc leading-10 text-2xl">
          <li>13th Gen. Intel Celeron, i3, i5, and i7 Core processor</li>
          <li>First DDR5 memory module</li>
          <li>Integrated Wi-Fi 6E antenna and BT 5.X support (optional)</li>
          <li>Compatible with TCx® Sky, Win 10 IoT 2021 LTSC and Linux</li>
          <li>Rich set of integrated IO port for nearly any configurations</li>
          <li>Energy Star® certified </li>
        </ul>
        
      </div>
      <div className='w-1/2'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </div>
        
      </div>
      
    </div>
    
  )
}

export default Tcx900
