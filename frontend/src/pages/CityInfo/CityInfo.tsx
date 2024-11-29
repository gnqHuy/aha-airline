import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import citiesData from "../../assets-test/cities.json";
import image6 from '../../assets-test/seoul.jpg';

type Flight = {
    from: string;
    to: string;
    day: string;
    ticketType: string;
    price: string;
    seen: string;
  }

type City = {
  name: string;
  description: string;
};

const CityInfo: React.FC = () => {
  const { nameCity } = useParams<{ nameCity: string }>();
  const [cityInfo, setCityInfo] = useState<City | null>(null);

  useEffect(() => {
    const city = citiesData.find((city: { name: string; }) => city.name.toLowerCase() === nameCity?.toLowerCase());
    setCityInfo(city || null);
  }, [nameCity]);

  const flights: Flight[] = [
    {
      from: 'Ho Chi Minh city (SGN)',
      to: 'Hanoi (HAN)',
      day: '10/02/2025',
      ticketType: 'One Way',
      price: 'from VND 767,000*',
      seen: 'Seen: 13 hour ago',
    },
    {
      from: 'Ho Chi Minh city (SGN)',
      to: 'Hanoi (HAN)',
      day: '10/02/2025',
      ticketType: 'One Way',
      price: 'from VND 767,000*',
      seen: 'Seen: 14 hour ago',
    },
    {
      from: 'Da Nang (DAD)',
      to: 'Hanoi (HAN)',
      day: '03/12/2024',
      ticketType: 'Round trip / Departure flight',
      price: 'from VND 1,079,500*',
      seen: 'Seen: 16 hour ago',
    },
    {
      from: 'Da Nang (DAD)',
      to: 'Hanoi (HAN)',
      day: '06/12/2024',
      ticketType: 'One Way',
      price: 'from VND 1,080,000*',
      seen: 'Seen: 9 hour ago',
    },
  ];

  return (
    <Layout headerImage={image6}>
      <div className="w-[70%] mx-auto mt-10">
        {cityInfo ? (
          <>
            <h1 className="text-3xl font-bold text-center text-golden capitalize">{cityInfo.name}</h1>
            <p className="mt-4 text-lg text-gray-700">{cityInfo.description}</p>
          </>
        ) : (
          <p className="text-center text-red-500 text-lg">
            Sorry, we couldn't find any information about this city.
          </p>
        )}
      </div>
    </Layout>
  );
};

export default CityInfo;
