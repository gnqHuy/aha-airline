import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import NewsSection from '../../components/NewsSection/NewsSection'
import BookingSection from '../../components/BookingSection/BookingSection'
import './HomePage.css';

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className="container">
      <NavBar />
      <NewsSection />
      <BookingSection />
    </div>
  )
}

export default HomePage