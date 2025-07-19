import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

type Props = {
    children: React.ReactNode;
}

const LayoutDefault: React.FC<Props> = ({ children}) => {
  return (
    <>
      <NavBar />
      <main className="min-h-screen w-[80%] mx-auto">{children}</main>
      <Footer />
    </>
  )
}

export default LayoutDefault