import { Mealtime } from '@components/Mealtime/Mealtime'
import { Title } from '@components/Title/Title'
import Head from 'next/head'
import React from 'react'

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <section className='p-5 sm:p-0 sm:w-11/12 sm:mx-auto'>
        <Title title="Hoy" />
        <div className="w-full pb-5 sm:pb-0 mb-8 mt-8 flex flex-col items-center sm:h-80 sm:flex-row rounded-[30px] border border-gray-200 bg-white">
          <div className='sm:w-2/4 flex justify-center items-center flex-col mb-6 ms:mb-0'>
            <h2 className='text-[3.5rem] sm:text-[4.5rem] text-gray-800 font-bold tracking-wider'>1453</h2>
            <h4 className='text-sl mt-[-10px] text-gray-800'>Calories</h4>
          </div>
          <div className='sm:w-2/4 flex justify-center items-center '>
            <div className="water"></div>
          </div>

        </div>
        <Title title="Comidas" />
        
        <section>
          <Mealtime title="Breakfast" cal="542" food="Cheese bread, cup of chocolate" />
          <Mealtime title="Breakfast" cal="542" food="Cheese bread, cup of chocolate" />
          <Mealtime title="Breakfast" cal="542" food="Cheese bread, cup of chocolate" />
          <Mealtime title="Breakfast" cal="542" food="Cheese bread, cup of chocolate" />
          <Mealtime title="Breakfast" cal="542" food="Cheese bread, cup of chocolate" />
        </section>

      </section>
    </>
  )
}

export default Dashboard