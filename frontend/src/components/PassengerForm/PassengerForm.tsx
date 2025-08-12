import React, { useState } from "react";
import { PassengerTitle } from "../../object/enum/PassengerTitle";

type Props = {
  passengerType: "adult" | "child" | "infant";
  onPassengerChange: (passenger: {
    title: PassengerTitle | undefined;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    phone: string;
  }) => void;
};

const PassengerForm: React.FC<Props> = ({ passengerType, onPassengerChange }) => {
  const [dob, setDob] = useState("");
  const [title, setTitle] = useState<PassengerTitle>();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredDate = e.target.value;
    const enteredDateObj = new Date(enteredDate);
    const today = new Date();
    const yearEntered = enteredDateObj.getFullYear();
    const age = today.getFullYear() - yearEntered;

    const isBirthdayPassedThisYear =
      today.getMonth() > enteredDateObj.getMonth() ||
      (today.getMonth() === enteredDateObj.getMonth() && today.getDate() >= enteredDateObj.getDate());

    const exactAge = isBirthdayPassedThisYear ? age : age - 1;

    if (yearEntered >= 2025 || yearEntered <= 1905) {
      setErrorMessage("The year of birth is invalid");
      setDob(enteredDate);
      return;
    }

    setDob(enteredDate);
    setErrorMessage("");

    if (passengerType === "adult" && exactAge < 12) {
      setErrorMessage("Adults must be at least 12 years old.");
    } else if (passengerType === "child" && (exactAge < 2 || exactAge >= 12)) {
      setErrorMessage("Children must be between 2 and 11 years old.");
    } else if (passengerType === "infant" && exactAge >= 2) {
      setErrorMessage("Infants must be under 2 years old.");
    } else {
      setErrorMessage("");
    }

    onPassengerChange({ title, firstName, lastName, dateOfBirth: enteredDate, email, phone: phoneNumber });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10) as PassengerTitle;
    setTitle(value);
    onPassengerChange({
      title: value,
      firstName,
      lastName,
      dateOfBirth: dob,
      email,
      phone: phoneNumber,
    });
  };
  

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFirstName(value);
    onPassengerChange({ title, firstName: value, lastName, dateOfBirth: dob, email, phone: phoneNumber });
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLastName(value);
    onPassengerChange({ title, firstName, lastName: value, dateOfBirth: dob, email, phone: phoneNumber });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    onPassengerChange({ title, firstName, lastName, dateOfBirth: dob, email: value, phone: phoneNumber });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);
    onPassengerChange({ title, firstName, lastName, dateOfBirth: dob, email, phone: value });
  };

  return (
    <div className="w-[80%] mx-auto p-8 bg-white rounded-lg shadow-lg my-6">
      <h2 className="text-xl font-semibold text-ahaAmber-2 text-center mb-8">
        1 {passengerType.charAt(0).toUpperCase() + passengerType.slice(1)} ({passengerType})
      </h2>
      <form className="space-y-8 w-full">
        <div className="flex flex-col space-y-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title<span className="text-red-500">*</span>
          </label>
          <select
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            className="bg-transparent border border-gray-300 rounded-md p-2 w-full text-gray-700 text-base focus:ring-2 focus:ring-ahaAmber-4 focus:outline-none"
          >
            <option value="">Select title</option>
            {Object.keys(PassengerTitle)
              .filter((key) => isNaN(Number(key)))
              .map((key) => {
                const enumKey = key as keyof typeof PassengerTitle;
                const enumValue = PassengerTitle[enumKey];
                
                if (passengerType === "adult" && (enumValue === PassengerTitle.Mr || enumValue === PassengerTitle.Ms || enumValue === PassengerTitle.Mrs)) {
                  return (
                    <option key={enumValue} value={enumValue}>
                      {enumKey}
                    </option>
                  );
                }

                if (passengerType !== "adult" && (enumValue === PassengerTitle.MSTR || enumValue === PassengerTitle.MISS)) {
                  return (
                    <option key={enumValue} value={enumValue}>
                      {enumKey}
                    </option>
                  );
                }

                return null; 
              })}
          </select>

        </div>

        <div className="flex flex-col space-y-2 mr-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            Middle name and First/given name (as in ID/passport)
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="Enter first name"
            className="bg-transparent border border-gray-300 rounded-md p-2 w-full text-gray-700 text-base focus:ring-2 focus:ring-ahaAmber-4 focus:outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2 mr-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last/Family name (as in passport)<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Enter last name"
            className="bg-transparent border border-gray-300 rounded-md p-2 w-full text-gray-700 text-base focus:ring-2 focus:ring-ahaAmber-4 focus:outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2 mr-4">
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
            Date of birth<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={dob}
            onChange={handleDobChange}
            className="bg-transparent border border-gray-300 rounded-md p-2 w-full text-gray-700 text-base focus:ring-2 focus:ring-ahaAmber-4 focus:outline-none"
          />
          <p className="mt-1 text-sm text-gray-500">The format is Month / Day / Year</p>
          {errorMessage && <p className="mt-2 text-sm text-red-500">{errorMessage}</p>}
        </div>

        <h2 className="text-xl font-semibold text-ahaAmber-2 text-center mb-8">
          Contact
        </h2>

        <div className="flex flex-col space-y-2 mr-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="bg-transparent border border-gray-300 rounded-md p-2 w-full text-gray-700 text-base focus:ring-2 focus:ring-ahaAmber-4 focus:outline-none"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className="flex flex-col space-y-2 mr-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            Phone number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            className="bg-transparent border border-gray-300 rounded-md p-2 w-full text-gray-700 text-base focus:ring-2 focus:ring-ahaAmber-4 focus:outline-none"
            value={phoneNumber}
            onChange={handlePhoneChange}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default PassengerForm;
