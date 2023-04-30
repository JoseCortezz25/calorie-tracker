import { Title } from '@components/Title/Title'
import React, { useContext } from 'react'
import AuthContext from '../contexts/AuthContext'
import { Button } from '@components/Button/Button'
import Head from 'next/head'
import Link from 'next/link'

const Register = () => {
  
  return (
    <>
    <Head>
      <title>Register</title>
    </Head>
    <section className='flex flex-col md:flex-row p-5 md:p-0 md:max-h-[80vh]'>
      <section className='md:w-[50%] flex justify-center md:flex-col'>
        <div className='w-full md:w-[80%] mx-auto'>
          <Title title='Registráte ahora' />
          <form action="" >
            <div className='block mt-6'>
              <label htmlFor="">Nombre</label>
              <input type="text" className='w-full px-3 py-3 rounded-lg mb-4' />
            </div>
            <div className='block'>
              <label htmlFor="">Email</label>
              <input type="email" className='w-full px-3 py-3 rounded-lg mb-4' />
            </div>
            <div>
              <label htmlFor="">Contraseña</label>
              <input type="password" className='w-full px-3 py-3 rounded-lg' />
            </div>

            <Link href='/login'><span className='mt-4 mb-2 font-bold text-gray-900 block'>¿Ya tienes cuenta? Inicia sesión ahora</span></Link>
            <Button type='submit' variant='primary' text='Crear cuenta ahora'/>
          </form>
        </div>

      </section>
      <section className='mt-9 md:mt-0 md:w-[50%] object-contain'>
        <img className='object-cover max-h-80 md:max-h-full w-full md:h-full rounded-3xl shadow-lg shadow-black-500/50' src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80" alt="" />
      </section>
    </section>
    </>
  )
}

export default Register