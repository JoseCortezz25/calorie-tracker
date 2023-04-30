import { Title } from '@components/Title/Title'
import Head from 'next/head'
import Link from 'next/link'
import React, { FormEvent, useContext, useState } from 'react'
import AuthContext from '../contexts/AuthContext'
import { IUser } from '../hooks/useUser'
import { Button } from '@components/Button/Button'
import { useRouter } from 'next/router'

type UserBodyResponse = {
  token: string,
  user: IUser
}

type UserResponse = {
  error: boolean,
  body: UserBodyResponse,
  status: number
}

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useContext(AuthContext)
  const router = useRouter()

  const loginService = async () => {
    console.log(JSON.stringify({ email, password }));

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })

      const result = response.json()
      return result
    } catch (error) {
      if (error instanceof Error) {
        console.log('error', error);
        return error
      }
    }
  }

  const handelSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      console.log({ email, password });

      const result: UserResponse = await loginService()
      const { body } = result
      login({id: body.user.id, username: body.user.username, email: body.user.email, authToken: body.token})
      console.log('result', result);
      router.replace('/dashboard')

    } catch (error) {

    }

  }

  return (
    <>
      <Head>
        <title>Log In</title>
      </Head>
      <section className='flex flex-col md:flex-row p-5 md:p-0 md:max-h-[80vh]'>
        <section className='md:w-[50%] flex justify-center md:flex-col'>
          <div className='w-full md:w-[80%] mx-auto'>
            <Title title='Inicia sesión' />
            <form onSubmit={handelSubmit} >
              <div className='block mt-6'>
                <label htmlFor="">Email</label>
                <input
                  onChange={({ target }) => setEmail(target.value)}
                  name={email}
                  type="email"
                  className='w-full px-3 py-3 rounded-lg mb-4'
                />
              </div>
              <div>
                <label htmlFor="">Contraseña</label>
                <input
                  onChange={({ target }) => setPassword(target.value)}
                  name={password}
                  type="password"
                  className='w-full px-3 py-3 rounded-lg mb-4'
                />
              </div>

              <Link href='/register'><span className='mt-4 mb-2 font-bold text-gray-900 block'>¿No tienes cuenta? Crea una cuenta ahora</span></Link>
              <Button type='submit' variant='primary' text='Iniciar sesión'/>
            </form>
          </div>

        </section>
        <section className='mt-9 md:mt-0 md:w-[50%] object-contain'>
          <img className='object-cover max-h-80 md:max-h-full w-full md:h-full rounded-3xl shadow-lg shadow-black-500/50' src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80" alt="" />
        </section>
      </section>
    </>
  )
}

export default Login