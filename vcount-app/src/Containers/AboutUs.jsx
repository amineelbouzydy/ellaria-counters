import React from "react";

function AboutUs() {
  return (
    <div className="mt-20 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <div className="w-full lg:w-6/12">
          <h2 className="w-full font-bold text-zrag lg:text-5xl text-4xl lg:leading-10 leading-9">
            Nos Services
          </h2>
          <ul class="list-disc ml-10 mt-5">
            <li className="w-full  font-bold lg:text-3xl text-2xl lg:leading-10 leading-9">
              Technical support
            </li>
            <p className="font-normal text-2xl leading-6 text-gray-600 mt-3 leading-10 ">
              Une équipe de support technique, composée de professionnels
              expérimentés en informatique, assure un service client de qualité, est là pour vous aider.
            </p>
          </ul>
          <ul class="list-disc ml-10 mt-10 ">
            <li className="w-full  font-bold lg:text-3xl text-2xl lg:leading-10 leading-9">
            Solutions Informatiques
            </li>
            <p className="font-normal text-2xl leading-6 text-gray-600 mt-3 leading-10 ">
            Notre service propose des solutions IT complètes pour répondre à tous vos besoins technologiques. Nous offrons une expertise sur mesure et un support dédié pour garantir le succès de votre entreprise.
            </p>
          </ul>
          <ul class="list-disc ml-10 mt-10">
            <li className="w-full  font-bold lg:text-3xl text-2xl lg:leading-10 leading-9">
            Réseaux et Systèmes
            </li>
            <p className="font-normal text-2xl leading-6 text-gray-600 mt-3 leading-10 ">
            Nous offrons des services visant à améliorer votre infrastructure informatique existante et à en maximiser la valeur, tout en assurant une stabilité et des performances constantes pour répondre à votre croissance et à vos besoins changeants.
            </p>
          </ul>
        </div>
        
        <div className="w-full lg:w-6/12 flex flex-col gap-5">
        <div >
          <img
            className="lg:block hidden w-full rounded-2xl"
            src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="people discussing on board"
          />
          <img
            className="lg:hidden sm:block hidden w-full rounded-2xl"
            src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="people discussing on board"
          />
          <img
            className="sm:hidden block w-full rounded-2xl"
            src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="people discussing on board"
          />
        </div>
        <div >
          <img
            className="lg:block hidden w-full rounded-2xl"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="people discussing on board"
          />
          <img
            className="lg:hidden sm:block hidden w-full rounded-2xl"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="people discussing on board"
          />
          <img
            className="sm:hidden block w-full rounded-2xl"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="people discussing on board"
          />
        </div>
        </div>
      </div>
      
    </div>
  );
}

export default AboutUs;
