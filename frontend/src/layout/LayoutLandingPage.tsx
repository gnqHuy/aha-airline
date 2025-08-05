import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

type Props = {
    children: React.ReactNode;
}

const LayoutLandingPage: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url("https://aha-airline.s3.ap-southeast-2.amazonaws.com/green2-long.jpg")`,
        backgroundSize:'cover'
      }}
    >
      <section
          className="relative w-full bg-cover"
        >
          <NavBar />
          <div className="text-white text-center font-semibold text-3xl my-24">
            Hello!  
          </div>
      </section>
      {/* <NavBar /> */}
      <main className="min-h-screen w-[80%] my-10 mx-auto">{children}</main>
      <Footer isLandingPage={true}/>
    </div>
  )
}

export default LayoutLandingPage
