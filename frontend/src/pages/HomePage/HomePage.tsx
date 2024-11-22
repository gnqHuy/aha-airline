import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import NewsSection from '../../components/NewsSection/NewsSection'
import FlightCard from '../../components/FlightCard/FlightCard'
import FlightPreview from '../../components/FlightPreview/FlightPreview'
import BookingSection from '../../components/BookingSection/BookingSection'
import './HomePage.css';
import Footer from '../../components/Footer/Footer'


type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className="container">
      <NavBar />
      <NewsSection />
      <BookingSection />
      <FlightPreview />
      <Footer />
    </div>
  )
}

export default HomePage