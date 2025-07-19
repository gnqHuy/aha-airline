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
                        imageUrl: ""
                    },
                },
                toAirport: {
                    iata: toInput.iata,
                    name: "",
                    city: {
                        name: toInput.cityName,
                        country: toInput.country,
                        imageUrl: ""
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
    <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-4 items-end">
            <div onClick={handleSetupDisplaySuggestion} className="flex-1 cursor-pointer">
                <label className="text-gray-500 text-sm">From</label>
                {displaySuggestion ? (
                    <div className="relative border-b border-black">
                    <input
                        type="text"
                        className="w-full bg-transparent outline-none"
                        autoFocus
                        onChange={(e) => handleChangeSearchingAirport(e.target.value)}
                    />
                    <RiExpandUpDownFill className="absolute right-1 bottom-1 text-gray-500" />
                    </div>
                ) : (
                    <div className="relative border-b border-black py-1">
                    <span className="text-sm">{selectedAirport}</span>
                    <RiExpandUpDownFill className="absolute right-1 bottom-1 text-gray-500" />
                    </div>
                )}
                </div>

                <div className="self-center">
                {flightOption === "roundTrip" ? (
                    <FaArrowRightArrowLeft className="text-ahaGreen" />
                ) : (
                    <FaArrowRight className="text-ahaGreen" />
                )}
            </div>

            {/* To */}
            <div onClick={handleSetupDisplaySuggestionTo} className="flex-1 cursor-pointer">
                <label className="text-gray-500 text-sm">To</label>
                {displaySuggestionTo ? (
                    <div className="relative border-b border-black">
                    <input
                        type="text"
                        className="w-full bg-transparent outline-none"
                        autoFocus
                        onChange={(e) => handleChangeSearchingAirportTo(e.target.value)}
                    />
                    <RiExpandUpDownFill className="absolute right-1 bottom-1 text-gray-500" />
                    </div>
                ) : (
                    <div className="relative border-b border-black py-1">
                    <span className="text-sm">{selectedAirportTo}</span>
                    <RiExpandUpDownFill className="absolute right-1 bottom-1 text-gray-500" />
                    </div>
                )}
            </div>
        </div>

        <div className="flex flex-wrap gap-4">
            <div onClick={handleSetupDisplayCalendarDepart} className="flex-1 cursor-pointer">
            <label className="text-gray-500 text-sm">Departure Date</label>
            <div className="relative border-b border-black py-1">
                <span>{selectedDateDepart}</span>
                <FaCalendarAlt className="absolute right-1 bottom-1 text-gray-500" />
            </div>
            <p className="text-xs text-gray-500 mt-1">(DD/MM/YYYY)</p>
            </div>

            {flightOption === "roundTrip" && (
            <div onClick={handleSetupDisplayCalendarReturn} className="flex-1 cursor-pointer">
                <label className="text-gray-500 text-sm">Return Date</label>
                <div className="relative border-b border-black py-1">
                <span>{selectedDateReturn}</span>
                <FaCalendarAlt className="absolute right-1 bottom-1 text-gray-500" />
                </div>
                <p className="text-xs text-gray-500 mt-1">(DD/MM/YYYY)</p>
            </div>
            )}
        </div>

        <div onClick={handleSetupDisplayPassengerInfo} className="cursor-pointer">
            <label className="text-gray-500 text-sm">Passenger</label>
            <div className="relative border-b border-black py-1 w-full">
            <span>{`${adultPassengerQuantity + childrenPassengerQuantity + infantPassengerQuantity} Passenger(s)`}</span>
            <RiExpandUpDownFill className="absolute right-1 bottom-1 text-gray-500" />
            </div>
        </div>

        <div className="text-right">
            <button
            onClick={handleFindFlightClick}
            className="bg-ahaAmber-2 hover:bg-ahaAmber-4 px-6 py-2 rounded-lg font-bold"
            >
            FIND FLIGHT
            </button>
        </div>
    </div>

  )
}

export default BookingContentRoundTrip;