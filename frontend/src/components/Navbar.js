
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="flex flex-row justify-content-between align-items-center lg:py-4 py-3 lg:px-6 px-3">
      <h2 className='light-purple lg:text-4xl md:text-3xl text-xl'>JAR</h2>
      <span className='flex gap-4 align-items-center'>
        <Link to='/' className='link'>Home</Link>
        <Link to='/new' className='button'>New Candidate</Link>
      </span>
    </div>
  )
}
