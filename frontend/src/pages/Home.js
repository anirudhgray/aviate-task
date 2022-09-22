import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import CandidateCard from '../components/CandidateCard'
import { Link } from 'react-router-dom'
import axios from '../axios'

export default function Home() {
  const [candidates, setCandidates] = useState([])

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const res = await axios.get('/candidates')
        setCandidates(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCandidates()
  }, [])
  
  return (
    <Layout>
      <div>
        <h1 className='purple lg:text-6xl md:text-4xl text-2xl'>Job Application Review</h1>
      </div>
      <div className='mt-6 mb-4 flex flex-column gap-5'>
        {candidates.map((candidate, index) => {
          return (
            <CandidateCard key={index} id={candidate.id} status={candidate.status} firstname={candidate.firstname} lastname={candidate.lastname} department={candidate.department} save_time={candidate.save_time} />
          )
        })}
      </div>
      <Link to='/new' className='bottom-0 right-0 add-button button fixed'>Add New</Link>
    </Layout>
  )
}
