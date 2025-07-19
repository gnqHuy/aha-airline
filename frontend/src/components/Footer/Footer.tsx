import React from 'react';
import '../../index.css';
import { FaGithub, FaFacebook, FaInstagram, FaPhoneAlt  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



import { Link } from 'react-router-dom';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer-text bg-gradient-to-r from-ahaGreen-0 to-ahaGreen-2">
        <div className="mx-auto w-full max-w-screen-xl lg:py-6">
            <div className="md:flex md:justify-between mb-4">
                <div className="mb-6 ml-10 md:mb-0">
                    <Link to="/" className="flex items-center no-underline text-ahaAmber-2 hover:opacity-80">
                        <span className="self-center text-3xl font-semibold whitespace-nowrap small:relative small:top-[1vw]">AHA AIRLINE</span>
                    </Link>
                    <ul className="font-medium text-sm list-none p-0 ml-6">
                        <li className="mb-4">
                            <a href="/about us" className="text-white no-underline hover:opacity-80">About Us</a>
                        </li>
                        <li>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-ahaAmber-2">Contact And Feedback: </h2>
                            <p className='flex items-center gap-1 ml-4 text-white'>
                                <MdEmail /> Email: mequanghuy.dev@gmail.com 
                            </p>
                            <p className='flex items-center gap-1 ml-4 text-white'>
                                <FaPhoneAlt /> Phone number: 0941562004
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="mr-5 grid grid-cols-2 gap-8 sm:gap-20 sm:grid-cols-3 small:relative small:left-[5vw]">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-ahaAmber-2">Resources</h2>
                        <ul className="font-medium text-sm list-none p-0">
                            <li className="mb-4">
                                <a href="/explore" className="text-white no-underline hover:opacity-80">Explore</a>
                            </li>
                            <li className="mb-4">
                                <a href="/booking" className="text-white no-underline hover:opacity-80">Booking</a>
                            </li>
                            <li className="mb-4">
                                <a href="/travel-info" className="text-white no-underline hover:opacity-80">Travel Info</a>
                            </li>
                            <li className="mb-4">
                                <a href="/explore/experience" className="text-white no-underline hover:opacity-80">Experience</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-ahaAmber-2">Destination</h2>
                        <ul className="font-medium text-sm list-none p-0">
                            <li className="mb-4">
                                <a href="/explore/destination/hanoi" className="text-white no-underline hover:opacity-80">Hanoi</a>
                            </li>
                            <li className="mb-4">
                                <a href="/explore/destination/new york" className="text-white no-underline hover:opacity-80">New York</a>
                            </li>
                            <li className="mb-4">
                                <a href="/explore/destination/seoul" className="text-white no-underline hover:opacity-80">Seoul</a>
                            </li>
                            <li className="mb-4">
                                <a href="/explore/destination/paris" className="text-white no-underline hover:opacity-80">Paris</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-ahaAmber-2">Legal</h2>
                        <ul className="font-medium text-sm list-none p-0">
                            <li className="mb-4">
                                <a href="/explore/experience#privacy-policy" className="text-white no-underline hover:opacity-80">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/explore/experience#terms-and-conditions" className="text-white no-underline hover:opacity-80">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="border-gray-200 " />
            <div className="pl-4 pr-4 sm:flex sm:items-center sm:justify-between text-white">
                <span className="text-sm sm:text-center">© 2024 <a href="/" className="hover:underline text-ahaAmber-2 no-underline">AHA AIRLINE™</a>. All Rights Reserved.</span>
                <div className="flex items-center">
                    <p className='mr-4 text-ahaAmber-2'>Follow Us:</p>
                    <a href="https://www.facebook.com/quang.huy.423712/" className="flex items-center hover:text-[#D4A422] text-white">
                        <FaFacebook />
                    </a>
                    <a href="https://github.com/gnqHuy/aha-airline" className="flex items-center hover:text-[#D4A422] ms-5 text-white">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/gnq_huy/" className="flex items-center hover:text-[#D4A422] ms-5 text-white">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
