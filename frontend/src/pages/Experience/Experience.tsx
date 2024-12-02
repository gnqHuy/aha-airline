import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';

type Props = {};

const Experience = (props: Props) => {
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
      <div className="experience-page p-6 max-w-[70%] mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-8 text-center text-golden">Experience Our Airline</h1>

        {/* Cabin Classes */}
        <section id="cabin-classes" className="mb-10">
          <h2 className="text-3xl font-semibold mb-6">Cabin Classes</h2>
          <p className="text-lg text-gray-700 mb-4">
            Discover the unparalleled comfort and world-class service in our meticulously designed cabins:
          </p>
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li>
              <strong>Economy Class:</strong> Comfortable seating, complimentary meals, and access to a vast selection
              of in-flight entertainment.
            </li>
            <li>
              <strong>Premium Economy:</strong> Wider seats, extended legroom, and priority boarding for a seamless
              travel experience.
            </li>
            <li>
              <strong>Business Class:</strong> Flatbed seats, gourmet cuisine, and exclusive lounge access designed for
              business travelers.
            </li>
            <li>
              <strong>First Class:</strong> Experience ultimate luxury with private suites, personal attendants, and
              bespoke dining experiences.
            </li>
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="mb-10">
          <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
          <p className="text-lg text-gray-700 mb-4">
            Whether you're flying for business or leisure, our services are crafted to ensure your journey is
            extraordinary:
          </p>
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li>State-of-the-art in-flight entertainment systems with the latest movies, TV shows, and music.</li>
            <li>Complimentary Wi-Fi for Business and First Class passengers.</li>
            <li>
              A variety of dining options, including special meals for dietary requirements such as vegan, halal, or
              gluten-free.
            </li>
            <li>Dedicated customer service and support for any travel-related concerns.</li>
            <li>Seamless baggage handling, priority boarding, and expedited check-in services.</li>
          </ul>
        </section>

        {/* Privacy Policy */}
        <section id="privacy-policy" className="mb-10">
          <h2 className="text-3xl font-semibold mb-6">Privacy Policy</h2>
          <p className="text-lg text-gray-700 mb-4">
            Your privacy is of utmost importance to us. We are committed to protecting your personal information and
            ensuring a secure and transparent relationship with you. This policy explains how we collect, use, and
            protect your data:
          </p>

          <h3 className="text-2xl font-semibold mb-4">1. Information We Collect</h3>
          <p className="text-lg text-gray-700 mb-4">
            We collect personal information that you provide when booking tickets, creating accounts, or subscribing to
            our services. This includes:
          </p>
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li>Full name, email address, phone number, and passport information.</li>
            <li>Payment information for ticket purchases.</li>
            <li>Travel preferences and special service requests.</li>
            <li>Feedback or inquiries submitted via our website or app.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h3>
          <p className="text-lg text-gray-700 mb-4">
            Your data is used to improve our services and provide you with a seamless travel experience. This includes:
          </p>
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li>Processing bookings and managing travel itineraries.</li>
            <li>Offering personalized services, such as meal preferences or seat selection.</li>
            <li>Communicating important travel updates and promotional offers.</li>
            <li>Enhancing our services based on your feedback and preferences.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">3. Data Security</h3>
          <p className="text-lg text-gray-700 mb-4">
            We employ advanced security measures to protect your data against unauthorized access. These include
            encryption technologies and secure servers.
          </p>
        </section>

        {/* Terms and Conditions */}
        <section id="terms-and-conditions" className="mb-10">
          <h2 className="text-3xl font-semibold mb-6">Terms and Conditions</h2>
          <p className="text-lg text-gray-700 mb-4">
            By using our services, you agree to abide by the following terms and conditions. Please read them carefully:
          </p>

          <h3 className="text-2xl font-semibold mb-4">1. Booking Policy</h3>
          <p className="text-lg text-gray-700 mb-4">
            All bookings are subject to availability. Once confirmed, tickets are non-transferable. Refunds and
            cancellations are governed by our cancellation policy.
          </p>

          <h3 className="text-2xl font-semibold mb-4">2. Baggage Policy</h3>
          <p className="text-lg text-gray-700 mb-4">
            Passengers are responsible for adhering to baggage allowances specified during booking. Excess baggage
            charges may apply.
          </p>

          <h3 className="text-2xl font-semibold mb-4">3. In-Flight Conduct</h3>
          <p className="text-lg text-gray-700 mb-4">
            To ensure a safe and enjoyable journey for all passengers, you must follow the instructions of the cabin
            crew at all times. Disruptive behavior will not be tolerated.
          </p>

          <h3 className="text-2xl font-semibold mb-4">4. Website and App Use</h3>
          <p className="text-lg text-gray-700 mb-4">
            Unauthorized use of our website or app, including attempts to gain unauthorized access, is prohibited and
            will result in legal action.
          </p>

          <p className="text-lg text-gray-700 mt-4">
            If you have any questions about these terms, please contact our customer service team for clarification.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Experience;
