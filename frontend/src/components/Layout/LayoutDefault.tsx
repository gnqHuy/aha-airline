import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import image1 from "../../assets-test/Images/green2-long.jpg";

type Props = {
    children: React.ReactNode;
}

const LayoutDefault: React.FC<Props> = ({ children}) => {
  return (
    <div style={{ backgroundImage: `url(${image1})` }}>
      <NavBar />
      <main className="min-h-screen w-[80%] mx-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutDefault