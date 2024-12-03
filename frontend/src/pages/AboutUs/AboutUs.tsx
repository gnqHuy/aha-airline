import React from 'react';
import Layout from '../../components/Layout/Layout';

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <Layout>
      <div className="max-w-screen-lg mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-golden mb-8">About Us</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-golden mb-4">Welcome to AHA Airline</h2>
          <p className="text-gray-700 leading-relaxed">We are thrilled to present <strong>AHA Airline</strong>, a brand dedicated to connecting the world and igniting dreams. 
            Our slogan, <strong>"Flying Without Wings,"</strong> encapsulates our commitment to not merely transporting you from one destination to another but rather guiding you toward new horizons filled with opportunities and extraordinary experiences.
             This concept of "flying without wings" represents the boundless determination and aspirations inherent in humanity. 
             Even in the absence of wings, distances can be conquered, and barriers can be overcome. 
             At <strong>AHA Airline</strong>, we strive to be your invisible wings bringing you closer to your dreams and adventures. With our exceptional services, a devoted team, and unwavering commitment to safety and comfort, we are prepared to accompany you on every journey, whether grand or intimate. 
             Together, we can craft new stories and explore uncharted territories because with <strong>AHA Airline</strong>, your journey is limitless.

        </p>
          <p className="text-gray-700 leading-relaxed">
            At <strong>AHA Airline</strong>, we believe in making travel a delightful experience. As a customer-focused airline, we connect you to destinations across the globe with unparalleled comfort, safety, and service. 
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            This website is designed to make booking, exploring, and managing your journeys seamless. With features like easy-to-use flight searches, personalized travel recommendations, and the latest updates on travel policies, we aim to make every aspect of your journey smooth and stress-free.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-golden mb-4">Meet the Development Team</h2>
          <p className="text-gray-700 leading-relaxed">
            The <strong>AHA Airline</strong> website is proudly developed by a team of three dedicated members:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4">
            <li><strong>Dao Duc Anh</strong></li>
            <li><strong>Nguyen Duc Anh</strong></li>
            <li><strong>Me Quang Huy</strong></li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            This project was developed as part of our Web Application Development course in the first semester of our third year at university. It showcases our dedication to creating practical, user-friendly web solutions for real-world applications.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-golden mb-4">Why Fly with AHA Airline?</h2>
          <p className="text-gray-700 leading-relaxed">
            Our airline stands out for its exceptional services and innovative approach to air travel. Here’s what you can expect when you choose AHA Airline:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4">
            <li><strong>Extensive Network:</strong> Fly to over 150 destinations worldwide, connecting you to major cities, hidden gems, and everything in between.</li>
            <li><strong>Modern Fleet:</strong> Travel in comfort and safety with our state-of-the-art aircraft, designed to meet the highest standards.</li>
            <li><strong>Exceptional Service:</strong> Our crew is dedicated to providing top-notch service, ensuring every flight is a pleasant experience.</li>
            <li><strong>Sustainability:</strong> Committed to reducing our carbon footprint, we are integrating green technologies into our operations.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-golden mb-4">Our Vision and Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At AHA Airline, our vision is to be the preferred choice for travelers worldwide, delivering excellence in every aspect of air travel. Our mission is to connect people and cultures through safe, reliable, and innovative air transportation services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-golden mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            Have questions or need assistance? Feel free to reach out to us:
          </p>
          <ul className="list-none text-gray-700 leading-relaxed mt-4">
            <li><strong>Email:</strong> 22021145@vnu.edu.vn</li>
            <li><strong>Phone:</strong> 0941562004</li>
            <li><strong>Office:</strong> 144 Xuan Thuy, Cau Giay, Hanoi</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default AboutUs;
