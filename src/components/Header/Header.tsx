import Link from 'next/link'
import React, { useContext } from 'react'
import AuthContext from '../../contexts/AuthContext';
import { IUser } from '../../hooks/useUser';

const Header = (): JSX.Element => {
  
  return (
    <header className="py-6 px-6 mx-auto mb-4 border border-gray-200">
      <nav className='flex justify-between items-center w-[92%] mx-auto'>
        <div>
          <Link href="/"><span className='font-bold text-xl'>Slimmer</span></Link>
        </div>
        <div>
          <LoginLogout />
          <Link href=""><button className="px-4 py-[9px] bg-black rounded-lg border-2 border-black  text-white font-bold hover:bg-white hover:text-black transition-all ease-out">Register</button></Link>
        </div>
      </nav>
    </header>
  )
}

const LoginLogout = (): JSX.Element => {
  const { currentUser, logout } = useContext(AuthContext);
  const user = currentUser();

  // if (!user.authToken) {
  //   return <button className="px-4 py-[9px] font-bold mr-3 border-2 hover:border-black rounded-lg transition-all ease-out">Sign In</button>
  // }

  return (
    <>
      <button onClick={logout} className="px-4 py-[9px] font-bold mr-3 border-2 hover:border-black rounded-lg transition-all ease-out">Sign Out</button>
    </>
  )
}

export default Header