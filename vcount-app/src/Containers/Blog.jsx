import React from 'react'
import { Card } from "flowbite-react";
import blogimage1 from '../Assets/blogimage1.jpeg';
import blogimage2 from '../Assets/blogimage2.jpeg';
import blogimage3 from '../Assets/blogimage3.jpeg';
import blogimage4 from '../Assets/blogimage4.jpeg';
import blogimage5 from '../Assets/blogimage5.jpeg';
const Blog = () => {
  return (
    <div>
      <div className='w-full mt-40 flex flex-col items-center' >
        <h1 className='font-bold text-zrag lg:text-5xl text-4xl lg:leading-10 leading-9'>Notre Blog</h1>
        <h3 className='w-4/5 mt-10 font-bold text-neutralGrey text-center lg:text-xl text-2xl lg:leading-10 leading-9'>Rester à jour avec les dernières technologies peut être une expérience enrichissante et bénéfique pour votre entreprise, car cela peut vous aider à améliorer votre productivité, votre efficacité, votre qualité et la satisfaction de vos clients.</h3>
      </div>
    <div className='mt-28 flex flex-wrap justify-center gap-20'>
      
      <Card
      className="h-1/2 max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={blogimage1}
    >
      <h2 href='https://www.linkedin.com/posts/ellaria-systems_boostez-vos-ventes-en-magasin-avec-ces-%C3%A9tapes-activity-7161282013583302656-B-LN?utm_source=share&utm_medium=member_desktop' className="text-2xl font-bold tracking-tight hover:text-brandPrimary text-gray-900 dark:text-white">
      Boostez vos ventes en magasin avec ces étapes simples !
      </h2>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Vous rêvez de maximiser le trafic et de transformer les visiteurs en clients fidèles ? Chez V-Count, nous transformons ces rêves en réalité grâce à des solutions innovantes, soutenues par un retour sur investissement prouvé.
      </p>
    </Card>
    <Card
      className="h-1/2 max-w-sm "
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={blogimage2}
      
    >
      <h2 href='https://www.linkedin.com/posts/ellaria-systems_boostez-vos-ventes-en-magasin-avec-ces-%C3%A9tapes-activity-7161282013583302656-B-LN?utm_source=share&utm_medium=member_desktop' className="text-2xl font-bold tracking-tight hover:text-brandPrimary text-gray-900 dark:text-white">
      Combien de vos clients entrent dans vos magasins en groupe ?
      </h2>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Les compter individuellement peut avoir un impact sur vos taux de conversion et vos KPI. V-Count résout ce problème 💡 en trois étapes simples avec notre solution de comptage de groupe avancée et précise à 99 %.
      </p>
    </Card>
    <Card
      className="h-1/2 max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={blogimage3}
    >
      <h2 href='https://www.linkedin.com/posts/ellaria-systems_boostez-vos-ventes-en-magasin-avec-ces-%C3%A9tapes-activity-7161282013583302656-B-LN?utm_source=share&utm_medium=member_desktop' className="text-2xl font-bold tracking-tight hover:text-brandPrimary text-gray-900 dark:text-white">
      Boostez vos ventes EXPLOSION : Analyse démographique précise en 3 étapes !
      </h2>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Grâce à notre technologie d'IA embarquée de pointe, notre solution d'analyse démographique plonge en profondeur dans les données visiteurs pour vous révéler des insights inestimables pour vos ventes.
      </p>
    </Card>
    <Card
      className=" max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={blogimage4}
    >
      <h2 href='https://www.linkedin.com/posts/ellaria-systems_boostez-vos-ventes-en-magasin-avec-ces-%C3%A9tapes-activity-7161282013583302656-B-LN?utm_source=share&utm_medium=member_desktop' className="text-2xl font-bold tracking-tight hover:text-brandPrimary text-gray-900 dark:text-white">
      Transformez les visites en showroom en ventes gagnantes !💼🌟
      </h2>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Les clients potentiels prennent leur temps avant d'acheter une voiture. Et si vous pouviez les convaincre sur place ?
      </p>
    </Card>
    <Card
      className=" max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={blogimage5}
    >
      <h2 href='https://www.linkedin.com/posts/ellaria-systems_boostez-vos-ventes-en-magasin-avec-ces-%C3%A9tapes-activity-7161282013583302656-B-LN?utm_source=share&utm_medium=member_desktop' className="text-2xl font-bold tracking-tight hover:text-brandPrimary text-gray-900 dark:text-white">
      Imaginez connaître parfaitement le fonctionnement de votre centre commercial ! 🛍️💼
      </h2>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      La technologie de comptage de personnes VCount vous permet de Transformez votre centre commercial en un modèle de réussite grâce aux données du compteur de trafic et aux analyses de zones de VCount. 
      </p>
    </Card>
    </div>
    </div>
  )
}

export default Blog
