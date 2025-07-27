import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import image1 from "../../assets-test/Images/green2-long.jpg";

type Props = {
    children: React.ReactNode;
}

const LayoutDefault: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize:'cover'
      }}
    >
      <section
          className="relative w-full h-screen bg-cover"
        >
          <NavBar />
          <div className="text-white text-center font-semibold text-3xl my-20">
            Hello!  
          </div>
      </section>
      {/* <NavBar /> */}
      <main className="min-h-screen w-[80%] mx-auto">{children}</main>
      <Footer isLandingPage={true}/>
    </div>
  )
}

export default LayoutDefault
