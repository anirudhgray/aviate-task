import React from 'react'
import { Link } from 'react-router-dom'
import './candidate-card.css'

export default function CandidateCard({firstname, lastname, save_time, department, status, id}) {

  return (
    <Link className='link' to={`/candidates/${id}`}>
    <div className='relative card p-3 bg-white flex align-items-center justify-content-between grid'>
      <span className={`absolute top-0 left-0 tag text-sm ${status.toLowerCase()}`}>{status}</span>
      <span className='md:col-3 black sm:col-4 col-5 flex gap-1'>
        <p>{firstname}</p>
        <p className='font-bold'>{lastname}</p>
      </span>
      <p className='col-2 sm:block hidden light-purple'>{department}</p>
      <p className='md:col-4 md:text-base text-sm text- col-5 text-right md:col-offset-3 sm:col-offset-1 light-purple'>{save_time.slice(0,10)}</p>
    </div>
    </Link>
  )
}
