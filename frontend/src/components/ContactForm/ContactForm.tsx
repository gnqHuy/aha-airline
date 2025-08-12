import React, { useState } from "react";

type ContactInfoProps = {
  onContactInfoSubmit: (data: { email: string; phoneNumber: string }) => void;
};

const ContactInfo: React.FC<ContactInfoProps> = ({ onContactInfoSubmit }) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onContactInfoSubmit({ email, phoneNumber });
  };

  return (
    <div className="w-[50%] mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-ahaAmber-2 text-center mb-6">
        Contact Information
      </h2>
      <p className="text-sm text-gray-600 text-center mb-8">
        This contact info will be used to process and store this booking
      </p>
      <form className="space-y-6 mr-6" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
        <div className="w-full text-center">
          <button
            type="submit"
            className="btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactInfo;
