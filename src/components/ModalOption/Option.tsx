import React from 'react'

const Option = ({ option }: { option: string }) => {
  return (
    <button className='w-full border-b border-gray-300 font-bold py-3 hover:bg-gray-200 transition-all ease-out active:text-[15px]'>{option}</button>
  )
}

export { Option }