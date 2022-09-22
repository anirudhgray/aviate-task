import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import CandidateCard from '../components/CandidateCard'
import { Link } from 'react-router-dom'
import axios from '../axios'

export default function Home() {
  const [candidates, setCandidates] = useState([])
  const [allCandidates, setAllCandidates] = useState([])
  const [status, setStatus] = useState("")
  const [department, setDepartment] = useState("")

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const res = await axios.get('/candidates')
        setCandidates(res.data)
        setAllCandidates(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCandidates()
  }, [])

  const handleStatusFilter = (e) => {
    setStatus(e.currentTarget.value)
    if (e.currentTarget.value !== 'All') {
      setCandidates(allCandidates.filter(candidate => candidate.status === e.currentTarget.value))
    } else {
      setCandidates(allCandidates)
    }
  }

  const handleDepartmentFilter = (e) => {
    setDepartment(e.currentTarget.value)
    if (e.currentTarget.value !== 'All') {
      setCandidates(allCandidates.filter(candidate => candidate.department === e.currentTarget.value))
    } else {
      setCandidates(allCandidates)
    }
  }
  
  return (
    <Layout>
      <div>
        <h1 className='purple lg:text-6xl md:text-4xl text-2xl'>Job Application Review</h1>
      </div>
      <div className='mt-6'>
        <p className='light-purple'>Filter by</p>
        <span className='flex gap-2 mt-2'>
          <select value={status} onChange={handleStatusFilter} required className='block' name="status" id="status">
            <option value="" disabled>Status</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
            <option value="Applied">Applied</option>
            <option value="All">All</option>
          </select>
          <select value={department} onChange={handleDepartmentFilter} required className='block' name="department" id="department">
            <option value="" disabled>Department</option>
            <option value="IT">IT</option>
            <option value="Sales">Sales</option>
            <option value="Recruiting">Recruiting</option>
            <option value="Accounting">Accounting</option>
            <option value="Materials">Materials</option>
            <option value="All">All</option>
          </select>
        </span>
      </div>
      <div className='mt-6 mb-4 flex flex-column gap-5'>
        {candidates.length ? candidates.map((candidate, index) => {
          return (
            <CandidateCard key={index} id={candidate.id} status={candidate.status} firstname={candidate.firstname} lastname={candidate.lastname} department={candidate.department} save_time={candidate.save_time} />
          )
        }) : <p>No candidates found. Try with different filtering?</p>}
      </div>
      <Link to='/new' className='bottom-0 right-0 add-button button fixed'>Add New</Link>
    </Layout>
  )
}
