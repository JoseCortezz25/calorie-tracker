import LayoutGeneral from '@layouts/LayoutGeneral'
import Head from 'next/head'
import Image from 'next/image'
import coffeeTimeImage from '../../public/coffee_time.svg'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Calorie Counter</title>
      </Head>
      <section className='flex flex-col md:flex-row p-5 md:p-0 md:max-h-[80vh]'>
        <section className='md:w-[50%] flex justify-center md:flex-col'>
          <div className='w-full md:w-[80%] mx-auto'>
            <h1 className='text-4xl font-bold uppercase tracking-wider mb-2'>Registra tus calorías y alcanza tu mejor versión</h1>
            <p className='text-gray-700 font-semibold mb-4'>¿Quieres llevar un control de tu ingesta diaria de alimentos y mantener una dieta saludable? <br/>Nuestra aplicación de seguimiento de calorías es la herramienta ideal para ti. Puedes registrar fácilmente lo que comes y bebes, añadiendo detalles sobre las propiedades nutricionales de tus comidas para determinar las calorías que consumes. Además, puedes personalizar tus comidas y recetas para reflejar tus propias preferencias y necesidades individuales.</p>

            <Link href="/login">
              <button className='px-4 py-[9px] text-sm border mr-3 border-black rounded-lg uppercase font-bold hover:bg-black hover:text-white transition-all ease-out'>Iniciar sección</button>
            </Link>
            <Link href="/register">
              <button className='px-4 py-[9px] text-sm border bg-black border-black rounded-lg text-white uppercase font-bold hover:bg-white hover:text-black transition-all ease-out'>Crear una cuenta</button>
            </Link>
          </div>

        </section>
        <section className='mt-9 md:mt-0 md:w-[50%] object-contain'>
          <img className='object-cover max-h-80 md:max-h-full w-full md:h-full rounded-3xl shadow-lg shadow-black-500/50' src="https://images.unsplash.com/photo-1568600891621-50f697b9a1c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
        </section>
      </section>
    </>
  )
}
