import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
      
<footer className="bg-white  shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <NavLink to="/" className="hover:underline">AudioBuddy™</NavLink>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://www.instagram.com/anguraldheeraj.ul/" target="_blank"  rel='noreferrer' className="mr-4 hover:underline md:mr-6 ">Instagram</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/dheeraj-angurala-a841a3251" target="_blank" rel='noreferrer' className="mr-4 hover:underline md:mr-6">Linkedin</a>
        </li>
        <li>
            <a href="https://www.github.com/Dheeraj-485" target="_blank" rel='noreferrer' className="mr-4 hover:underline md:mr-6">Github</a>
        </li>
        
    </ul>
    </div>
</footer>


  )
}
