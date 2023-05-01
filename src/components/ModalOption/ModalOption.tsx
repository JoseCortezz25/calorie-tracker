import React, { ReactNode } from 'react'
import { Option } from './Option'

const ModalOption = ({ setOpenModal }: { setOpenModal: (value: boolean) => void }) => {
  return (
    <div className='w-full h-full top-0 left-0 z-10 absolute bg-black/50 mr-[-15px]'>
      <div className='w-6/12 bg-white m-auto mt-[4rem] p-6 rounded-lg'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='font-bold text-lg'>Tipo de comida</h2>
          <button onClick={() => setOpenModal(false)} className='font-bold text-xl p-5'>X</button>
        </div>
        <Option option="Breakfast" />
        <Option option="Lunch" />
        <Option option="Dinner" />
        <Option option="Morning snack" />
        <Option option="Afternoon snack" />
        <Option option="Evening snack" />
      </div>
    </div>
  )
}

export { ModalOption }