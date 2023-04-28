import Header from '@components/Header/Header'
import Image from 'next/image'
import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const LayoutGeneral = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        {children}
      </main>
    </>
  )
}

export default LayoutGeneral