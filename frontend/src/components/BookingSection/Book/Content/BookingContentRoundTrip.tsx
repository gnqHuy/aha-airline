import React, { useState } from 'react'
import { FaArrowRight, FaCalendarAlt, FaGift } from 'react-icons/fa'
import { FaArrowRightArrowLeft } from 'react-icons/fa6'
import { RiExpandUpDownFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setReturnDate, setRoundTrip, setSelectedFlightPreview } from '../../../../redux/slice/flightSlice';
import { setPassengers } from '../../../../redux/slice/passengerSlice';
import { useSnackbar } from 'notistack';

interface Props {
    handleSetupDisplaySuggestion: () => void;
    handleSetupDisplaySuggestionTo: () => void;
    handleSetupDisplayCalendarDepart: () => void;
    handleSetupDisplayCalendarReturn: () => void;
    handleSetupDisplayPassengerInfo: () => void;
    adultPassengerQuantity: number;
    childrenPassengerQuantity: number;
    infantPassengerQuantity: number;
    displaySuggestion: boolean;
    displaySuggestionTo: boolean;
    handleChangeSearchingAirport: (airport: string) => void;
    handleChangeSearchingAirportTo: (airport: string) => void;
    selectedAirport: string;
    selectedAirportTo: string;
    selectedDateDepart: string;
    selectedDateReturn: string;
    flightOption: string;
}

const BookingContentRoundTrip: React.FC<Props> = ({
    handleSetupDisplaySuggestion, 
    handleSetupDisplaySuggestionTo, 
    handleSetupDisplayCalendarDepart, 
    handleSetupDisplayCalendarReturn, 
    handleSetupDisplayPassengerInfo, 
    adultPassengerQuantity, 
    childrenPassengerQuantity, 
    infantPassengerQuantity, 
    displaySuggestion, 
    displaySuggestionTo, 
    handleChangeSearchingAirport, 
    handleChangeSearchingAirportTo, 
    selectedAirport, 
    selectedAirportTo, 
    selectedDateDepart, 
    selectedDateReturn, 
    flightOption,
        }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    function parseAirportInfo(input: string): {
        iata: string;
        cityName: string;
        country: string;
    } {
        const parts = input.split(/ \(|\), /);
        
        if (parts.length < 3) {
            throw new Error("Input string is not in the correct format");
        }
        
        return {
            cityName: parts[0].trim(),
            iata: parts[1].trim(),
            country: parts[2].trim(),
        };
    }
    
    function convertToISO(dateString: string, time: string): string {
        const [day, month, year] = dateString.split("/").map(Number);
        return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T${time}`;
    }
                      
    const handleFindFlightClick = () => {
        try {
            if (!selectedAirport || !selectedAirportTo || !selectedDateDepart) {
                toast.success("Please fill in all required fields: departure airport, destination airport, and departure date.", {
                    position: "top-right"
                  });
                return;
            }
            else {
                toast.success("Choose your flight!", {
                    position: "top-right"
                  });
            }
    
            const fromInput = parseAirportInfo(selectedAirport);
            const toInput = parseAirportInfo(selectedAirportTo);
            const departureTime = convertToISO(selectedDateDepart, "00:00:01");

            if (flightOption === "roundTrip") {
                dispatch(setRoundTrip(true));
                console.log(selectedDateReturn + " " + convertToISO(selectedDateReturn, "00:00:01")) 
                dispatch(setReturnDate(convertToISO(selectedDateReturn, "00:00:01")));
            }
    
            const flightPreview = {
                fromAirport: {
                    iata: fromInput.iata,
                    name: "",
                    city: {
                        name: fromInput.cityName,
                        country: fromInput.country,
                    },
                },
                toAirport: {
                    iata: toInput.iata,
                    name: "",
                    city: {
                        name: toInput.cityName,
                        country: toInput.country,
                    },
                },
                departureTime: departureTime,
                minimumPrice: 0,
            };
    
            dispatch(setSelectedFlightPreview(flightPreview));
            dispatch(setPassengers({
                adults: adultPassengerQuantity,
                children: childrenPassengerQuantity,
                infants: infantPassengerQuantity,
            }));
    
            navigate("ticket");
        } catch (error) {
            enqueueSnackbar("An error occurred while processing your request. Please check your inputs and try again.", {variant: "error"});
            console.error(error);
        }
    };    
        
  return (
    <div className = "flex">
        {/* flight from */}
        {/* <ToastContainer /> */}
        <div className = "absolute top-[2.5rem] hover:cursor-pointer" onClick = {handleSetupDisplaySuggestion}>
            <p className = " text-gray-500 absolute top-[1rem] left-[2.2rem]" style = {{fontSize: "12px"}}>From</p>
            {displaySuggestion === true ? 
                <div className = "w-[15rem] h-[1rem] text-left absolute left-[2rem] top-[3.5rem] flex medium:w-[21vw] small:w-[35vw]" style = {{borderBottom: "1px solid black"}}>
                    <input type = "text" className = "absolute top-[-0.3rem] left-[0rem] w-[14.55rem] bg-transparent border-none focus:border-none outline-none" autoFocus onChange = {(e) => handleChangeSearchingAirport(e.target.value)}/>
                    <span><RiExpandUpDownFill className = "w-[1.3rem] h-[1.3rem] absolute left-[13.5rem] bottom-[0.3rem] medium:left-[19vw] small:left-[32vw]" style = {{color: "gray"}}/></span>
                </div> : 
                <div className = "w-[15rem] h-[1rem] text-left absolute left-[2rem] top-[3.5rem] flex medium:w-[21vw] small:w-[35vw]" style = {{borderBottom: "1px solid black"}}>
                    <span className = " absolute bottom-[0.3rem] left-[0.2rem]" style = {{fontSize: "13px"}}>{selectedAirport}</span>
                    <span><RiExpandUpDownFill className = "w-[1.3rem] h-[1.3rem] absolute left-[13.5rem] bottom-[0.3rem] medium:left-[19vw] small:left-[32vw]" style = {{color: "gray"}}/></span>
                </div>
            } 
        </div>
        
        {/* icon arrow */}
        <div className = "relative top-[3.2rem]">
            {flightOption === "roundTrip" ? 
                <FaArrowRightArrowLeft className = "w-[1.5rem] h-[1.5rem] absolute left-[18rem] medium:left-[26.5vw] small:left-[43vw]" style = {{color: "#1A4532"}}/> : 
                <FaArrowRight className = "w-[1.5rem] h-[1.5rem] absolute left-[18rem] medium:left-[26.5vw] small:left-[43vw]" style = {{color: "#1A4532"}}/>
            }
        </div>
        
        {/* flight to */}
        <div className = "absolute top-[2.5rem] left-[18.5rem] hover:cursor-pointer medium:left-[27vw] small:left-[45vw]" onClick = {handleSetupDisplaySuggestionTo}>
            {displaySuggestionTo === true ? 
                <div className = "w-[15rem] h-[1rem] text-left absolute left-[2rem] top-[3.5rem] flex medium:w-[21vw] small:w-[35vw]" style = {{borderBottom: "1px solid black"}}>
                    <input type = "text" className = "absolute top-[-0.3rem] left-[0rem] w-[14.55rem] bg-transparent border-none focus:border-none outline-none" autoFocus onChange = {(e) => handleChangeSearchingAirportTo(e.target.value)}/>
                    <span><RiExpandUpDownFill className = "w-[1.3rem] h-[1.3rem] absolute left-[13.5rem] bottom-[0.3rem] medium:left-[19vw]" style = {{color: "gray"}}/></span>
                </div> : 
                <div className = "w-[15rem] h-[1rem] text-left absolute left-[2rem] top-[3.5rem] flex medium:w-[21vw]" style = {{borderBottom: "1px solid black"}}>
                    <span className = " absolute bottom-[0.3rem] left-[0.2rem]" style = {{fontSize: "13px"}}>{selectedAirportTo}</span>
                    <span><RiExpandUpDownFill className = "w-[1.3rem] h-[1.3rem] absolute left-[13.5rem] bottom-[0.3rem] medium:left-[19vw]" style = {{color: "gray"}}/></span>
                </div>
            }
        </div>

        {/* calendar depart */}
        <div className = "absolute top-[2.5rem] left-[34.5rem] hover:cursor-pointer medium:left-[50vw] small:top-[7rem] small:left-[0rem]" onClick = {handleSetupDisplayCalendarDepart}>
            <div className = "w-[11rem] h-[1rem] text-left absolute left-[2rem] top-[3.5rem] flex medium:w-[16vw] small:w-[35vw]" style = {{borderBottom: "1px solid black"}}>
                <span className = " absolute bottom-[0.3rem] left-[0.2rem]" style = {{fontSize: "16px"}}>{selectedDateDepart}</span>
                <span><FaCalendarAlt className = "w-[1.3rem] h-[1.3rem] absolute left-[9.5rem] bottom-[0.3rem] medium:left-[13vw] small:left-[32vw]" style = {{color: "gray"}}/></span>
                <span className = "absolute text-gray-500 top-[1.2rem]" style = {{fontSize: "13px"}}>(DD/MM/YYYY)</span>
            </div>
        </div>
        
        {/* calendar return */}
        {flightOption === "roundTrip" && 
            <div className = "absolute top-[2.5rem] left-[46.2rem] hover:cursor-pointer medium:left-[68vw] small:top-[7rem] small:left-[45vw]" onClick = {handleSetupDisplayCalendarReturn}>
                <div className = "w-[11rem] h-[1rem] text-left absolute left-[2rem] top-[3.5rem] flex medium:w-[16vw] small:w-[35vw]" style = {{borderBottom: "1px solid black"}}>
                    <span className = " absolute bottom-[0.3rem] left-[0.2rem]" style = {{fontSize: "16px"}}>{selectedDateReturn}</span>
                    <span><FaCalendarAlt className = "w-[1.3rem] h-[1.3rem] absolute left-[9.5rem] bottom-[0.3rem] medium:left-[13vw] small:left-[32vw]" style = {{color: "gray"}}/></span>
                    <span className = "absolute text-gray-500 top-[1.2rem]" style = {{fontSize: "13px"}}>(DD/MM/YYYY)</span>
                </div>
            </div>
        }

        {/* passenger quantity */}
        <div className = "absolute top-[7rem] hover:cursor-pointer small:top-[13rem]" onClick = {handleSetupDisplayPassengerInfo}>
            <p className = " text-gray-500 absolute top-[1rem] left-[2.2rem]" style = {{fontSize: "12px"}}>Passenger</p>
            <div className = "w-[18rem] h-[1rem] text-left absolute left-[2rem] top-[3.5rem] flex" style = {{borderBottom: "1px solid black"}}>
                <span className = " absolute bottom-[0.3rem] left-[0.2rem]" style = {{fontSize: "16px"}}>{`${adultPassengerQuantity + childrenPassengerQuantity + infantPassengerQuantity} Passenger(s)`}</span>
                <span><RiExpandUpDownFill className = "w-[1.3rem] h-[1.3rem] absolute left-[16.5rem] bottom-[0.3rem]" style = {{color: "gray"}}/></span>
            </div>
        </div>

        {/* promotion code */}
        <div className = "absolute top-[10rem] left-[3rem] flex small:top-[16rem]">
            <FaGift className = "w-[1.7rem] h-[1.7rem] absolute left-[19rem] top-[0rem]" style = {{color: "#1A4532"}}/>
            <p className = "absolute left-[22rem] w-[10rem] top-[-0.7rem]  text-[#1A4532]" style = {{fontSize: "16px"}}>PROMOTION CODE</p>
        </div>

        {/* find flight button */}
        <div className = "absolute top-[12rem] right-[5rem] medium:right-[5vw] small:top-[20rem]">
            <button onClick={handleFindFlightClick} className = "w-[10rem] h-[2.5rem] cursor-pointer border-none hover:bg-golden-hover  font-bold bg-golden" style = {{fontSize: "15px", borderRadius: "10px"}}>FIND FLIGHT</button>
        </div>
    </div>
  )
}

export default BookingContentRoundTrip;