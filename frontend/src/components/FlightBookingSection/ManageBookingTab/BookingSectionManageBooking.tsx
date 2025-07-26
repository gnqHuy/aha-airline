import React, { useEffect, useState } from 'react';
import ManageBookingInfo from './ManageBookingInfo';
import { GetByReservationOrTicketCode } from '../../../api/ticket';
import { useFlightContext } from '../../../context/FlightContext/FlightContext';
import { FormInput, ActionButton } from '../shared';

const BookingSectionManageBooking = () => {
    const [isFocusReservation, setIsFocusReservation] = useState<boolean>(false);
    const [reservationCode, setReservationCode] = useState<string>("");
    const [displayInfo, setDisplayInfo] = useState<boolean>(false);
    const [storeReservationCode, setStoreReservationCode] = useState<string>("");
    const [storeLastname, setStoreLastname] = useState<string>("");
    const [reservations, setReservations] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    
    const { setManageBookingReservationCode } = useFlightContext();

    const handleSearch = async () => {
        if (reservationCode.length === 0) {
            setError("Please enter a reservation code or ticket number");
            return;
        }

        setIsLoading(true);
        setError("");
        
        try {
            await fetchData();
            setDisplayInfo(true);
            setStoreReservationCode(reservationCode);
            setManageBookingReservationCode(reservationCode);
            localStorage.setItem("manageBookingReservationCode", reservationCode);
            setReservationCode("");
            setIsFocusReservation(false);
        } catch (err) {
            setError("Failed to get your information! Check your reservation code!");
            console.error("Search error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDisplayInfo = () => {
        setDisplayInfo(!displayInfo);
        setError("");
    };

    const fetchData = async () => {
        try {
            const response = await GetByReservationOrTicketCode(reservationCode);
            setReservations(response.data);
            console.log("Data reservation:", response.data);
        } catch (err) {
            throw err;
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="w-full h-full flex flex-col">
            {/* Search Section */}
            <div className="flex-shrink-0 p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-2xl mx-2 mb-4">
                <div className="space-y-4">
                    {/* Title */}
                    <div className="text-center">
                        <h2 className="text-lg md:text-xl font-bold text-ahaGreen-1 mb-2">
                            Manage Your Booking
                        </h2>
                        <p className="text-sm text-gray-600">
                            Enter your reservation code or ticket number to manage your booking
                        </p>
                    </div>

                    {/* Search Form */}
                    <div className="flex flex-col sm:flex-row gap-4 items-end">
                        <div className="flex-1 min-w-0">
                            <FormInput
                                id="reservation-code"
                                label="Reservation Code / Ticket Number"
                                value={reservationCode}
                                onChange={(e) => setReservationCode(e.target.value.toUpperCase())}
                                isFocused={isFocusReservation}
                                setFocused={setIsFocusReservation}
                                required
                                placeholder="e.g. ABC123 or 123-4567890123"
                                onKeyDown={handleKeyPress}
                            />
                        </div>
                        
                        <div className="w-full sm:w-auto">
                            <ActionButton
                                onClick={handleSearch}
                                variant="accent"
                                size="md"
                                loading={isLoading}
                                disabled={!reservationCode.trim()}
                                fullWidth
                                className="sm:w-auto sm:min-w-[120px]"
                            >
                                {isLoading ? 'Searching...' : 'Search'}
                            </ActionButton>
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mt-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                            {error}
                        </div>
                    )}
                </div>
            </div>

            {/* Results Section */}
            {displayInfo && (
                <div className="flex-1 min-h-0 overflow-y-auto px-2">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                        <ManageBookingInfo
                            handleDisplayInfo={handleDisplayInfo}
                            reservations={reservations}
                            storeReservationCode={storeReservationCode}
                        />
                    </div>
                </div>
            )}

            {/* Empty State */}
            {!displayInfo && !error && (
                <div className="flex-1 flex items-center justify-center p-8">
                    <div className="text-center text-gray-500">
                        <div className="text-4xl mb-4">✈️</div>
                        <p className="text-lg font-medium mb-2">No bookings found</p>
                        <p className="text-sm">Enter your reservation code above to manage your booking</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingSectionManageBooking;