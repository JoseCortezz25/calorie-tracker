import { Button } from '@components/Button/Button'
import { Title } from '@components/Title/Title'
import Head from 'next/head'
import Link from 'next/link'
import React, { InputHTMLAttributes } from 'react'

const FormFood = () => {
  return (
    <>
      <Head>
        <title>Mis Food</title>
      </Head>

      <section className='p-5 sm:p-0 sm:w-11/12 sm:mx-auto'>

        <div className='mt-8 mb-8 flex justify-between items-cente'>
          <Title title='Añadir nueva comida' />
          <Link href="/foods/new">
            <Button variant='primary' text='Guardar nueva comida' />
          </Link>
        </div>

        <form>
          <InputGroup label="Nombre de la comida" sublabel="" type='number' name='namefood'/>
          <InputGroup label="Calorias por porción:" sublabel="g" type='number' />
          <InputGroup label="Total de carbohidratos:" sublabel="g" type='number' />
          <InputGroup label="Total de grasa:" sublabel="g" type='number' />
          <InputGroup label="Grasas saturadas:" sublabel="g" type='number' />
          <InputGroup label="Grasas transgénicas:" sublabel="g" type='number' />
          <InputGroup label="Colesterol:" sublabel="mg" type='number' />
          <InputGroup label="Sodio:" sublabel="mg" type='number' />
          <InputGroup label="Potasio:" sublabel="mg" type='number' />
          <InputGroup label="Fibra dietética:" sublabel="g" type='number' />
          <InputGroup label="Azúcares:" sublabel="g" type='number' />
          <InputGroup label="Potasio:" sublabel="mg" type='number'/>

          <InputGroup label="Vitamina A (100% = 900mcg RAE)*:" sublabel="mg" type='number'/>
          <InputGroup label="Vitamina C (100% = 90mg)*:" sublabel="mg" type='number'/>
          <InputGroup label="Calcium (100% = 1,300mg)*:" sublabel="mg" type='number'/>
          <InputGroup label="Iron (100% = 18mg)*:" sublabel="mg" type='number'/>

        </form>

      </section>
    </>
  )
}
type InputNative = InputHTMLAttributes<HTMLInputElement>

type InputGroup = {
  label: string,
  sublabel?: string
}
type Props = InputGroup & InputNative

const InputGroup = ({ label, sublabel, name, ...props }: Props): JSX.Element => {
  return (
    <div className='flex mb-4 items-center'>
      <label htmlFor={name} className='w-1/4 py-3 px-2 rounded-lg font-bold text-gray-800 text-lg'>{label}</label>
      <input {...props} className='py-3 px-2 rounded-lg' name={name} />
      {sublabel !== undefined &&  <p className='ml-3'>{sublabel}</p>}
    </div>
  )
}

export default FormFood