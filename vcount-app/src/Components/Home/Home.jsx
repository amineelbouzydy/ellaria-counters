import React from 'react'
import PeopleCountingHome from '../../Assets/people-counting-home.svg'

const Home = () => {
  return (
    <div className='bg-neutralSilver'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
      <div indicators={false} leftControl=" " rightControl=" " className='mt-24 w-full mx-auto'>
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src={PeopleCountingHome} alt="" />
          </div>
          <div className='md:w-1/2'>
              <h1 className='w-full text-5xl font-semibold mb-4 text-neutralDgrey md:w-fit leading-snug'>Comptage Des Personnes<br /><span className=' text-4xl text-brandPrimary leading-snug'>Des données exploitables pour des décisions intelligentes.</span></h1>
              <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDgrey transition-all duration-300 hover:translate-y-4'>Découvrir</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
