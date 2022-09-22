import React, {useState} from 'react'
import Layout from '../components/Layout'
import './new-candidate.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import axios from '../axios'
import { useNavigate } from 'react-router-dom'

export default function NewCandidate() {
  const [phone, setPhone] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [selfInfo, setSelfInfo] = useState("")
  const [desc, setDesc] = useState("")
  const [organisation, setOrganisation] = useState("")
  const [designation, setDesignation] = useState("")
  const [from, setFrom] = useState("")
  const [till, setTill] = useState("")
  const [current, setCurrent] = useState(false)
  const [department, setDepartment] = useState("")
  const [resume, setResume] = useState("")
  const [university, setUniversity] = useState("")
  const [degree, setDegree] = useState("")
  const [course, setCourse] = useState("")
  const [cgpa, setCgpa] = useState("")
  const [uniStart, setUniStart] = useState("")
  const [uniEnd, setUniEnd] = useState("")

  const [page, setPage] = useState(0)

  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    if (page===3) {
      const formData = new FormData()
      formData.append('firstname', firstname)
      formData.append('lastname', lastname)
      formData.append('department', department)
      formData.append('email', email)
      formData.append('phone', phone)
      formData.append('self_info', selfInfo)
      if (resume) {
        formData.append('resume', resume, resume.name)
      }
      formData.append('organisation', organisation)
      formData.append('description', desc)
      formData.append('designation', designation)
      formData.append('current', current)
      formData.append('start', from)
      formData.append('end', till)
      formData.append('university', university)
      formData.append('degree', degree)
      formData.append('course', course)
      formData.append('cgpa', cgpa)
      formData.append('uniStart', uniStart)
      formData.append('uniEnd', uniEnd)

      try {
        const res = await axios.post('/candidates/', formData)
        if (res) {
          navigate('/')
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      setPage(page+1)
    }
  }

  return (
    <Layout>
      <div>
        <h1 className='purple lg:text-6xl md:text-4xl text-2xl'>Add New Candidate</h1>
      </div>
      <form onSubmit={submit} className='mt-6 mb-4 lg:col-8 md:col-9 sm:col-10'>
        <div className={`flex-column gap-4 ${page === 0 ? 'flex' : 'hidden'}`}>
          <h3 className='purple'><span className='light-purple'>1. </span>General Information</h3>
          <span>
          <label htmlFor="first">Firstname</label>
          <input value={firstname} onChange={e => setFirstname(e.currentTarget.value)} required className='mt-2 block' id='first'></input>
          </span>
          <span>
          <label htmlFor="last">Lastname</label>
          <input value={lastname} onChange={e => setLastname(e.currentTarget.value)} required className='mt-2 block' id='last'></input>
          </span>
          <span>
          <label htmlFor="department">Applying for department</label>
          <select value={department} onChange={e => setDepartment(e.currentTarget.value)} required className='block mt-2' name="department" id="department">
            <option value="IT">IT</option>
            <option value="Sales">Sales</option>
            <option value="Recruiting">Recruiting</option>
            <option value="Accounting">Accounting</option>
            <option value="Materials">Materials</option>
          </select>
          </span>
          <span>
          <label htmlFor="email">Email</label>
          <input value={email} onChange={e => setEmail(e.currentTarget.value)} required type='email' className='mt-2 block' id='email'></input>
          </span>
          <span>
          <label htmlFor="phone">Phone</label>
          <PhoneInput
            id='phone'
            className='mt-2'
            international
            defaultCountry="IN"
            value={phone}
            onChange={setPhone}
          />
          </span>
          <button type='submit' className='text-base button'>Next</button>
        </div>
        <div className={`flex-column gap-4 ${page === 1 ? 'flex' : 'hidden'}`}>
          <h3 className='purple'><span className='light-purple'>2. </span>Education</h3>
          <span>
            <label htmlFor="org">University/College</label>
            <input value={university} onChange={e => setUniversity(e.currentTarget.value)} className='mt-2 block' id='org'></input>
          </span>
          <span>
            <label htmlFor="desig">Degree</label>
            <input value={degree} onChange={e => setDegree(e.currentTarget.value)} className='mt-2 block' id='desig'></input>
          </span>
          <span>
            <label htmlFor="desc">Course</label>
            <input value={course} onChange={e => setCourse(e.currentTarget.value)} rows={4} className='mt-2 block' id='desc'></input>
          </span>
          <span>
            <label htmlFor="desc">CGPA</label>
            <input value={cgpa} onChange={e => setCgpa(e.currentTarget.value)} rows={4} className='mt-2 block' id='desc'></input>
          </span>
          <span>
            <label htmlFor="start">From</label>
            <input value={uniStart} onChange={e => setUniStart(e.currentTarget.value)} type='date' className='mt-2 block' id='start'></input>
          </span>
          <span>
            <label htmlFor="end">Till</label>
            <input value={uniEnd} onChange={e => setUniEnd(e.currentTarget.value)} type='date' className='mt-2 block' id='end'></input>
          </span>
          <span className='flex gap-2'>
            <button type='button' onClick={() => setPage
            (0)} className='flex-grow-1 text-base button'>Back</button>
            <button type='submit' className='flex-grow-1 text-base button'>Next</button>
          </span>
        </div>
        <div className={`flex-column gap-4 ${page === 2 ? 'flex' : 'hidden'}`}>
          <h3 className='purple'><span className='light-purple'>3. </span>Past Experience</h3>
          <span>
            <label htmlFor="org">Organisation</label>
            <input value={organisation} onChange={e => setOrganisation(e.currentTarget.value)} className='mt-2 block' id='org'></input>
          </span>
          <span>
            <label htmlFor="desig">Designation</label>
            <input value={designation} onChange={e => setDesignation(e.currentTarget.value)} className='mt-2 block' id='desig'></input>
          </span>
          <span>
            <label htmlFor="desc">Description</label>
            <textarea value={desc} onChange={e => setDesc(e.currentTarget.value)} rows={4} className='mt-2 block' id='desc'></textarea>
          </span>
          <span>
            <label htmlFor="start">From</label>
            <input value={from} onChange={e => setFrom(e.currentTarget.value)} type='date' className='mt-2 block' id='start'></input>
          </span>
          <span>
            <label htmlFor="current">Currently in this position</label>
            <input value={current} onChange={e => setCurrent(e.currentTarget.value)} type='checkbox' id='end'></input>
          </span>
          <span>
            <label htmlFor="end">Till</label>
            <input value={till} onChange={e => setTill(e.currentTarget.value)} type='date' className='mt-2 block' id='end'></input>
          </span>
          <span className='flex gap-2'>
            <button type='button' onClick={() => setPage
            (1)} className='flex-grow-1 text-base button'>Back</button>
            <button type='submit' className='flex-grow-1 text-base button'>Next</button>
          </span>
        </div>
        <div className={`flex-column gap-4 ${page === 3 ? 'flex' : 'hidden'}`}>
          <h3 className='purple'><span className='light-purple'>4. </span>Some More Things</h3>
          <span>
            <label htmlFor="self-info">Anything else about you?</label>
            <textarea value={selfInfo} onChange={e => setSelfInfo(e.currentTarget.value)} rows={4} className='mt-2 block' id='self-info'></textarea>
          </span>
          <span>
            <label htmlFor="resume">Resume/CV</label>
            <input onChange={e => setResume(e.target.files[0])} type='file' className='mt-2 block' id='resume'></input>
          </span>
          <span className='flex gap-2'>
            <button type='button' onClick={() => setPage
            (2)} className='flex-grow-1 text-base button'>Back</button>
            <button type='submit' className='flex-grow-1 text-base button'>Submit</button>
          </span>
        </div>
      </form>
    </Layout>
  )
}
