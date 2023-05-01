import { Button } from '@components/Button/Button'
import { Title } from '@components/Title/Title'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Foods = () => {
  const listOfFoods = [
    {
      name: "asdasdas",
      cal: 123,
    },
    {
      name: "asdasdas",
      cal: 123,
    },
    {
      name: "asdasdas",
      cal: 123,
    },
    {
      name: "asdasdas",
      cal: 123,
    },
  ]
  return (
    <>
      <Head>
        <title>Mis Food</title>
      </Head>

      <section className='p-5 sm:p-0 sm:w-11/12 sm:mx-auto'>

        <div className='mt-8 mb-8 flex justify-between items-cente'>
          <Title title='Mis comidas' />
          <Link href="/foods/new">
            <Button variant='primary' text='Añadir nueva comida' />
          </Link>
        </div>

        <section>
          {listOfFoods.map((food) => (
            <Food name={food.name} cal={food.cal} key={food.name} />
          ))}
        </section>
      </section>
    </>
  )
}


const Food = ({ name, cal }: { name: string, cal: string | number }) => {
  return (
    <article className='block  py-4 border-b border-gray-800'>
      <h3 className='font-bold text-xl capitalize'>{name}</h3>
      <p className='text-gray-800'>{cal}</p>
    </article>
  )
}

export default Foods