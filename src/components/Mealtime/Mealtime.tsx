import React, { ReactNode } from 'react'

type Props = {

}

const Mealtime = ({ title, food, cal }: { title: string, food: string, cal: number | string }): JSX.Element => {
  return (
    <article className='w-full flex py-5 border-b-2 border-gray-200'>
      <div className='w-14 h-14 rounded-full bg-gray-500 mr-5 text-white flex flex-col justify-center items-center'>
        <span>{cal}</span>
        <span className='mt-[-9px]'>Cal</span>
      </div>
      <div className='w-3/4 flex flex-col justify-center'>
        <p className='font-bold text-xl'>{title}</p>
        <p className='text-gray-700'>{food}</p>
      </div>
    </article>
  )
}

export { Mealtime }