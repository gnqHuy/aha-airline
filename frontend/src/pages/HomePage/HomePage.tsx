import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import NewsSection from '../../components/NewsSection/NewsSection'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className="container">
      <NavBar />
      <NewsSection />
    </div>
  )
}

export default HomePage