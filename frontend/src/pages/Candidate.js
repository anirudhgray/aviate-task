import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import axios from '../axios'
import './candidate.css'

export default function Candidate() {
  const {id} = useParams()
  const [firstname, setFirstname] = useState("John")
  const [lastname, setLastname] = useState("Doe")
  const [department, setDepartment] = useState("Department")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [selfInfo, setSelfInfo] = useState("")
  const [organisation, setOrganisation] = useState("")
  const [designation, setDesignation] = useState("")
  const [description, setDescription] = useState("")
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")
  const [current, setCurrent] = useState(false)
  const [university, setUniversity] = useState("")
  const [degree, setDegree] = useState("")
  const [course, setCourse] = useState("")
  const [uniStart, setUniStart] = useState("")
  const [uniEnd, setUniEnd] = useState("")
  const [cgpa, setCgpa] = useState("")
  const [resume, setResume] = useState("")
  const [status, setStatus] = useState("")

  const [loading, setLoading] = useState(true)
  const [changeLoading, setChangeLoading] = useState(false)

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const res = await axios.get(`/candidates/${id}`)
        setFirstname(res.data.firstname)
        setLastname(res.data.lastname)
        setDepartment(res.data.department)
        setPhone(res.data.phone)
        setEmail(res.data.email)
        setSelfInfo(res.data.self_info)
        setOrganisation(res.data.organisation)
        setDescription(res.data.description)
        setDesignation(res.data.designation)
        setStart(res.data.start)
        setEnd(res.data.end)
        setCurrent(res.data.current)
        setResume(res.data.resume)
        setStatus(res.data.status)
        setUniversity(res.data.university)
        setUniEnd(res.data.uni_end)
        setUniStart(res.data.uni_start)
        setDegree(res.data.degree)
        setCourse(res.data.course)
        setCgpa(res.data.cgpa)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchCandidate()
  }, [id])
  
  const changeStatus = async (newStatus) => {
    setChangeLoading(true)
    try {
      const formData = new FormData()
      formData.append('status', newStatus)
      const res = await axios.patch(`/candidates/${id}/`, formData)
      if (res) {
        setStatus(res.data.status)
      }
    } catch (error) {
      console.log(error)
    }
    setChangeLoading(false)
  }

  return (
    <Layout>
      {!loading ? (
        <div>
        <div>
          <p className='light-purple lg:text-3xl md:text-xl text-base'>Candidate</p>
          <h1 className='purple lg:text-6xl md:text-4xl text-2xl'>{firstname} {lastname}</h1>
        </div>
        <div className="mt-4">
          <span className='flex gap-2'>
            <img alt='phone' height={20} src={require('../assets/phone.png')}></img>
            <p className='link'>{phone}</p>
          </span>
          <span className='flex gap-2 mt-2'>
            <img alt='email' height={20} src={require('../assets/email.png')}></img>
            <a href={`mailto:${email}`} className='link'>{email}</a>
          </span>
          <span className='relative'>
            <p className='font-italic mt-6 relative z-2'>{selfInfo}</p>
            <img className='z-1 quote absolute top-0 left-0' height={60} src={require('../assets/quote.png')} alt='quote'></img>
          </span>
          <p className='mt-4'>Applied for <span className='purple'>{department}</span>.</p>
          {organisation ? (
            <div className='mt-4'>
              <h3 className='purple'>Professional Experience</h3>
              <p className='mt-2'>Worked at <span className='purple'>{organisation}</span> as <span className='purple'>{designation}</span> from <span className='purple'>{start}</span> to <span className='purple'>{current ? 'now' : end}</span>.</p>
              <p className='mt-2'>&gt; {description}</p>
            </div>
          ): null}
          {university ? (
            <div className='mt-4'>
              <h3 className='purple'>Education</h3>
              <p className='mt-2'><span className='purple'>{degree}</span> in <span className='purple'>{course}</span> at <span className='purple'>{university}</span> from <span className='purple'>{uniStart}</span> to <span className='purple'>{uniEnd}</span>, with a CGPA of <span className='purple'>{cgpa}</span>.</p>
            </div>
          ): null}
          {resume ? (
            <button type='submit' onClick={() => window.open(
              resume,'_blank')} className='mt-4 text-base button'>Resume</button>
          )
          : null}
          {status === 'Applied' ? (
            <div className='flex gap-2 mt-4'>
              <button disabled={changeLoading} onClick={() => changeStatus('Rejected')} className={`flex-grow-1 text-base button rejected ${changeLoading ? 'disabled-button' : null}`}>Reject</button>
              <button disabled={changeLoading} onClick={() => changeStatus('Accepted')} className={`flex-grow-1 text-base button accepted ${changeLoading ? 'disabled-button' : null}`}>Accept</button>
            </div>
          )
          : (
            <div className='align-items-center flex gap-2 mt-4'>
              <p>{status}</p>
              <button disabled={changeLoading} onClick={() => changeStatus('Applied')} className={`text-base button ${changeLoading ? 'disabled-button' : null}`}>Restore</button>
            </div>
          )}
        </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  )
}
