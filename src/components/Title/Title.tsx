import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

type HeadingProps = { 
  title: string
}

type HeadingNative = DetailedHTMLProps<ButtonHTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

type Props = HeadingProps & HeadingNative

const Title = ({ title, ...props }:Props ) => {
  return (
    <h2 className='text-4xl font-bold uppercase tracking-wider mb-2 block text-gray-700' {...props}>{title}</h2>
  )
}

export { Title }