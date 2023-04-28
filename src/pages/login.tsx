import { Title } from '@components/Title/Title'
import Head from 'next/head'
import Link from 'next/link'
import React, { FormEvent, useContext, useState } from 'react'
import AuthContext from '../contexts/AuthContext'
import { IUser } from '../hooks/useUser'

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
  const { setUser } = useContext(AuthContext)

  const loginService = async () => {
    console.log(JSON.stringify({ email, password }));

    try {
      const response = await fetch(`${process.env.NEXT_API}/users/login`, {
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
      setUser({id: body.user.id, username: body.user.username, email: body.user.email, authToken: body.token})
      console.log('result', result);

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

              <button type='submit' className='mt-3 px-4 py-[9px] text-sm border bg-black border-black rounded-lg text-white uppercase font-bold hover:bg-white hover:text-black transition-all ease-out'>Crear una cuenta</button>
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