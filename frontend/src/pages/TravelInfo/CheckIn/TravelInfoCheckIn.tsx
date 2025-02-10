import React, { useEffect, useState } from 'react'
import Layout from '../../../components/Layout/Layout'

type Props = {}

const TravelInfoCheckIn = (props: Props) => {
    const [guideStep, setGuideStep] = useState<number>(1);

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          const section = document.querySelector(hash); 
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      }, []);
  return (
    <Layout>
        <div className = "relative overflow-x-clip overflow-y-auto bg-slate-50 bottom-[0rem]">
            {/* online check-in */}
            <div className = "relative left-[12vw] top-[1rem] w-[75vw]">
                <p className="text-3xl text-golden font-bold">Check In</p>
                <div className = "relative top-[2rem]" id = "online">
                    <p className = "text-2xl text-Green font-bold">Online Check-in</p>
                    <p className = "text-lg relative">Web check–in is only available for Domestic flights operated by AHA Airlines, departing from Noi Bai (HAN), Da Nang (DAD), Tan Son Nhat (SGN), Nha Trang (CXR), Quy Nhon (UIH) airports.</p>
                    <p className = "text-xl text-Green font-bold">Check-in online instructions</p>
                    <p className = "text-lg relative bottom-[0.5rem]"><b>Step 1:</b> Click “Check-in” on AHA Airlines’ website.</p>
                    <p className = "text-lg relative bottom-[1rem]"><b>Step 2:</b> Input PNR (Passenger name record) or ticket number and last name of one of the passengers.</p>
                    <p className = "text-lg relative bottom-[1rem]"><b>Step 3:</b> Select passenger and flight, then click  “Next”.</p>
                    <p className = "text-lg relative bottom-[1rem]"><b>Step 4:</b> Please read carefully the ICI regulations on passenger and cargo, then choose “Agree” and “Next”.</p>
                    <p className = "text-lg relative bottom-[1rem]"><b>Step 5:</b> In the following screen, you can select additional services and proceed to pay. If not, please click “Next”.</p>
                    <p className = "text-lg relative bottom-[1rem]"><b>Step 6:</b> Upon check-in completion, a success message will be shown. You can choose to print or receive via email your boarding pass.</p>
                    <p className = "text-lg relative bottom-[1rem]"><b>Step 7:</b> Upon arrival at the airport, please show your boarding pass and required documents at the check-in counter to check your baggage. If you do not bring checked baggage, you can go directly to the security gate and show your Boarding pass. Once completed, you will arrive at the boarding gate.</p>
                    <p className = "text-lg relative bottom-[1rem]">If you have checked in via the Online Check-in function on AHA Airlines’s website, you can proactively cancel the check-in at Cancel Check-in.</p>

                    {/* case not work */}
                    <p className = "text-xl text-Green font-bold relative top-[0.5rem]">Cases Where Online Check-in Is Not Applicable</p>
                    <p className = "text-lg relative">To best support customers in obtaining practical benefits on their flights, the following cases do not apply to online check-in:</p>
                    <p className = "text-lg relative bottom-[0.5rem]">» Passengers with special service requests (except for special meal service)</p>
                    <p className = "text-lg relative bottom-[1rem]">» Passengers who have been refused carriage or deported</p>
                    <p className = "text-lg relative bottom-[1rem]">» Passengers traveling with infants under 02 years of age</p>
                    <p className = "text-lg relative bottom-[1rem]">» Pregnant women</p>
                    <p className = "text-lg relative bottom-[1rem]">» Passengers requiring medical assistance (wheelchair service)</p>
                    <p className = "text-lg relative bottom-[1rem]">» Passengers departing from cities not listed above</p>

                    {/* additional notes */}
                    <p className = "text-xl text-Green font-bold relative top-[0.5rem]">Additional Notes for Passengers Who Have Completed Online Check-in</p>
                    <ul>
                        <li className = "relative mt-[0.5rem]">Passengers should present their boarding passes online, other required documents as stipulated when traveling by air to complete check-in for their flight.</li>
                        <li className = "relative mt-[0.5rem]">The boarding gate may change based on actual operational conditions. Therefore, please check the information at the airport.</li>
                        <li className = "relative mt-[0.5rem]">Passengers who have completed online check-in and are not carrying checked baggage can proceed directly to the security checkpoint. <b>Please arrive at the departure gate no later than 30 minutes before the flight's departure time.</b> If passengers are not at the departure gate at the specified time, AHA Airlines may cancel the online check-in for the passenger.</li>
                        <li className = "relative mt-[0.5rem]">In cases where passengers who have completed online check-in are carrying checked baggage, please arrive at the check-in counter no later than 15 minutes before the closing time for the flight. If passengers are not at the check-in counter at the specified time, AHA Airlines may refuse to transport the passenger's checked baggage.</li>
                    </ul>
                </div>

                {/* airport check in */}
                <div className = "relative top-[5rem]" id = "airport">
                    <p className = "text-2xl text-Green font-bold">Airport Check-in</p>
                    <p className = "text-lg relative bottom-[0.5rem]">For a great travel with AHA Airlines, please refer to the following procedures for your check-in at the airport. </p>
                    <p className = "text-lg relative bottom-[1rem]">Guide for your check-in at the airport </p>
                    {/* guide */}
                    <div className = "flex">
                        <div>
                            <div className = {guideStep === 1 ? "hover:bg-[#ebc94e] w-[20vw] h-[4rem] text-left border-white border-x-[1px] border-y-[1px] border-solid hover:cursor-pointer bg-[#ebc94e]" : "hover:bg-[#ebc94e] w-[20vw] h-[4rem] text-left border-white border-x-[1px] border-y-[1px] border-solid hover:cursor-pointer bg-[#d5dadb]"} onClick = {() => setGuideStep(1)}>
                                <p className = "text-2xl font-bold relative bottom-[1rem] left-[1rem]">Step 1</p>
                            </div>
                            <div className = {guideStep === 2 ? "hover:bg-[#ebc94e] w-[20vw] h-[4rem] text-left border-white border-x-[1px] border-y-[1px] border-solid hover:cursor-pointer bg-[#ebc94e]" : "hover:bg-[#ebc94e] w-[20vw] h-[4rem] text-left border-white border-x-[1px] border-y-[1px] border-solid hover:cursor-pointer bg-[#d5dadb]"} onClick = {() => setGuideStep(2)}>
                                <p className = "text-2xl font-bold relative bottom-[1rem] left-[1rem]">Step 2</p>
                            </div>
                            <div className = {guideStep === 3 ? "hover:bg-[#ebc94e] w-[20vw] h-[4rem] text-left border-white border-x-[1px] border-y-[1px] border-solid hover:cursor-pointer bg-[#ebc94e]" : "hover:bg-[#ebc94e] w-[20vw] h-[4rem] text-left border-white border-x-[1px] border-y-[1px] border-solid hover:cursor-pointer bg-[#d5dadb]"} onClick = {() => setGuideStep(3)}>
                                <p className = "text-2xl font-bold relative bottom-[1rem] left-[1rem]">Step 3</p>
                            </div>
                            <div className = {guideStep === 4 ? "hover:bg-[#ebc94e] w-[20vw] h-[4rem] text-left border-white border-x-[1px] border-y-[1px] border-solid hover:cursor-pointer bg-[#ebc94e]" : "hover:bg-[#ebc94e] w-[20vw] h-[4rem] text-left border-white border-x-[1px] border-y-[1px] border-solid hover:cursor-pointer bg-[#d5dadb]"} onClick = {() => setGuideStep(4)}>
                                <p className = "text-2xl font-bold relative bottom-[1rem] left-[1rem]">Step 4</p>
                            </div>
                            <div className = {guideStep === 5 ? "hover:bg-[#ebc94e] w-[20vw] h-[4rem] text-left border-white border-x-[1px] border-y-[1px] border-solid hover:cursor-pointer bg-[#ebc94e]" : "hover:bg-[#ebc94e] w-[20vw] h-[4rem] text-left border-white border-x-[1px] border-y-[1px] border-solid hover:cursor-pointer bg-[#d5dadb]"} onClick = {() => setGuideStep(5)}>
                                <p className = "text-2xl font-bold relative bottom-[1rem] left-[1rem]">Step 5</p>
                            </div>
                        </div>
                        <div className = "bg-[#1A4532] w-[55vw] h-[20.4rem] border-white border-x-[1px] border-y-[1px] border-solid text-[#ebc94e]">
                            {guideStep === 1 && 
                                <div className = "relative left-[1rem] w-[48rem] fadeIn">
                                    <p className = "text-lg font-bold">At check-in counter </p>
                                    <p className = "text-lg relative bottom-[1rem] w-[52vw] small:text-[16px]">At the airport, please follow the electronic board displaying flight information at the terminal for your check-in counter. Upon arrival at the counter, ground service staff shall check your PNR/ ticket number and your travel documents. Check-in baggage will be placed on the conveyor belt for weighing and transported separately. </p>
                                </div>
                            }
                            {guideStep === 2 && 
                                <div className = "relative left-[1rem] w-[48rem] fadeIn">
                                    <p className = "text-lg font-bold">Receive boarding pass </p>
                                    <p className = "text-lg relative bottom-[1rem] w-[52vw] small:text-[16px]">Upon completion of check-in procedures, ground service staff shall return your documents and boarding pass stating boarding gate. </p>
                                </div>
                            }
                            {guideStep === 3 && 
                                <div className = "relative left-[1rem] w-[48rem] fadeIn">
                                    <p className = "text-lg font-bold">At security area </p>
                                    <p className = "text-lg relative bottom-[1rem] w-[52vw] small:text-[16px]">Upon receiving boarding pass, please go to the security area. Then, you shall be required to take off your belongings such as watch, shoes, bag, belt... then put them into a tray and go through screening machine. </p>
                                </div>
                            }
                            {guideStep === 4 && 
                                <div className = "relative left-[1rem] w-[48rem] fadeIn">
                                    <p className = "text-lg font-bold">At boarding gate </p>
                                    <p className = "text-lg relative bottom-[1rem] w-[52vw] small:text-[16px]">Passengers are advised to be present at boarding gate around 30 to 40 minutes before departure time. Upon waiting for boarding, passengers with Business cabin tickets or Voucher for Business lounge entrance are welcomed to use our First Lounge. At least 15 minutes before departure time, if you are not at the designated boarding gate, AHA Airlines shall mark you as no-show and proceed accordingly to our regulations. </p>
                                </div>
                            }
                            {guideStep === 5 && 
                                <div className = "relative left-[1rem] w-[48rem] fadeIn">
                                    <p className = "text-lg font-bold">Boarding </p>
                                    <p className = "text-lg relative bottom-[1rem] w-[52vw] small:text-[16px]">After boarding the plane, please go to the right seat number stated on the ticket. Don't forget to put your suitcase, backpack or belongings in the overhead luggage compartment then close the door and sit down, fasten your seat belt and wait for the plane to take off. </p>
                                </div>
                            }
                        </div>
                    </div>

                    <div>
                        <p className = "text-xl font-bold">Note:</p>
                        <ul className = "relative bottom-[0.5rem] text-lg">
                            <li>Upon schedule change, opening and closing time of check-in counter shall be adjusted accordingly to new departure time.</li>
                            <li>The opening and closing time of check-in counters is based on the authorities' and each airline's regulations.</li>
                            <li>Passengers are advised to arrange sufficient time for check-in, security, customs and enter/exit procedures.</li>
                            <li>AHA Airlines shall refuse carriage if you are at check-in counter after the check-in counter for that flight has closed.</li>
                            <li>AHA Airlines shall not be responsible for travel documents and other legal procedures related to the your failure to be at boarding gate at the designated time.</li>
                        </ul>
                    </div>
                </div>

                {/* cancel check in */}
                <div className = "relative top-[7rem]" id = "cancel">
                    <p className = "text-2xl text-Green font-bold">Cancel Check-in</p>
                    <p className = "text-lg"><b>Option 1:</b> Cancel check-in status as soon as the system confirms successful check-in</p>
                    <p className = "text-lg"><b>Option 2:</b> Acces the website of AHA Airlines to cancel check-in</p>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default TravelInfoCheckIn