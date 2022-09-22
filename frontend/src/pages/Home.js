import React from 'react'
import Layout from '../components/Layout'
import CandidateCard from '../components/CandidateCard'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Layout>
      <div>
        <h1 className='purple lg:text-6xl md:text-4xl text-2xl'>Job Application Review</h1>
      </div>
      <div className='mt-6 mb-4 flex flex-column gap-5'>
        <CandidateCard status='Applied' firstname='Anirudh' lastname='Mishra' department='IT' save_time='2022-09-22T05:44:59.200371Z' />
        <CandidateCard status='Applied' firstname='Dorian' lastname='Gray' department='Sales' save_time='2022-09-21T05:44:59.200371Z' />
        <CandidateCard status='Accepted' firstname='John' lastname='Doe' department='IT' save_time='2022-09-21T05:44:59.200371Z' />
        <CandidateCard status='Rejected' firstname='John' lastname='Doe' department='IT' save_time='2022-09-21T05:44:59.200371Z' />
        <CandidateCard status='Applied' firstname='John' lastname='Doe' department='IT' save_time='2022-09-21T05:44:59.200371Z' />
        <CandidateCard status='Rejected' firstname='John' lastname='Doe' department='IT' save_time='2022-09-21T05:44:59.200371Z' />
        <CandidateCard status='Applied' firstname='John' lastname='Doe' department='IT' save_time='2022-09-21T05:44:59.200371Z' />
        <CandidateCard status='Applied' firstname='John' lastname='Doe' department='IT' save_time='2022-09-21T05:44:59.200371Z' />
      </div>
      <Link to='/new' className='bottom-0 right-0 add-button button fixed'>Add New</Link>
    </Layout>
  )
}
