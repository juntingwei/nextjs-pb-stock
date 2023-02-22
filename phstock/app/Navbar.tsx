'use client'
import { logOutFunction } from "@/pages/api";

import React from 'react';

import PocketBase from 'pocketbase'
const pb = new PocketBase('http://127.0.0.1:8090');

function Navbar() {

//For login status functionality

  const [statusString, setStatusString] = React.useState("You are not logged in")

  React.useEffect(() => {
    if (pb.authStore.isValid) {
      setStatusString(`You are signed in as ${pb.authStore.model!.name}`)
    }
  },[pb.authStore.isValid])
  
  const LoginStatus = () => {
    return <p className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">{`${statusString}`}</p>
  }

//for login and logout button

  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  
  React.useEffect(() => {
    setIsLoggedIn(pb.authStore.isValid ? true : false)
  }, [])

  function NavLogin() {
    return (
      <div>
        <a href="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">
          Login
        </a>
      </div>
    )
  }

  function NavLogout() {
    return (
      <div>
        <button onClick={logOutFunction} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">
          Logout
        </button>
      </div>
    )
  }

  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Tabs</span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${showMenu ? '' : 'hidden'}`}>
        <div className="text-sm lg:flex-grow">
          <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
            Home
          </a>
          <a href="/posts" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
            Posts
          </a>
        </div>
        <LoginStatus/>
        {isLoggedIn ? <NavLogout/> : <NavLogin/>}
      </div>
    </nav>
  );
}

export default Navbar;
