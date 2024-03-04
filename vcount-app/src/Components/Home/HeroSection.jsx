import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../Assets/image1.jpg'
import image2 from '../../Assets/image2.jpg'
import image3 from '../../Assets/image3.gif'

class HeroSection extends React.Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        pauseOnHover: false,
      };
  
      return (
        <Slider {...settings} className='carousel-section'>
          <div className='first-section'>
            <div className='content'>
            <div className='image-area'>
              <img src={image3} className='image-area' alt="" />
            </div>
            <div className='text-area'>
              <h1>
                Solutions de comptage de personnes
              </h1>
              <p>
              Nous proposons une large gamme de solutions de comptage de personnes offrant une précision et une fiabilité inégalées. Nos systèmes de comptage de personnes résolvent une variété de problèmes de surveillance du trafic pour tous les types d'organisations
              </p>
            </div>
            </div>
            
          </div>
          <div className='first-section'>
            <div className='content'>
            <div className='text-area2'>
              <h1>
                Analysez, ciblez, vendez plus !
              </h1>
              <p>
              La personnalisation est la clé du succès, et V-Count vous offre la solution pour exploiter la puissance des données démographiques en temps réel pour vos publicités.              </p>
            </div>
            <div className='image-area'>
              <img src={image2} className='image-area' alt="" />
            </div>
            
            </div>
            
          </div>
          <div className='first-section'>
            <div className='content'>
            <div className='image-area'>
              <img src={image1} className='image-area'  alt="" />
            </div>
            <div className='text-area'>
              <h1>
                Rendez votre Entreprise intelligente
              </h1>
              <p>
              Les données d'occupation en temps réel capturées par nos capteurs avancés de comptage de personnes rendent votre bâtiment intelligent. Il connecte le monde physique au monde numérique et ouvre tout un monde d’automatisations, d’optimisations et d’améliorations.              </p>
            </div>
            </div>
            
          </div>
          
        </Slider>
      );
    }
  }
  
  export default HeroSection;
  