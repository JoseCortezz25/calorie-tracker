import React from 'react'

const Title = ({ title }: { title: string }) => {
  return (
    <h2 className='text-4xl font-bold uppercase tracking-wider mb-2 block'>{title}</h2>
  )
}

export { Title }