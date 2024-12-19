import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import image6 from '../../assets-test/Images/paris.jpg';
import image5 from '../../assets-test/Images/hanoi.jpg';
import FlightTable from "../../components/FlightTable/FlightTable";
import CurrencyExchange from "../../components/CurrencyExchange/CurrencyExchange";
import GenericCard from "../../components/GenericCard/GenericCard";
import { getFlightPreview } from "../../api/flightAPI";
import { FlightPreviewType } from "../../object/flightPreview";

const cityNameMapping: { [key: string]: string } = {
  HAN: "Hanoi",
  SGN: "Ho Chi Minh City",
  PAR: "Paris",
  ROM: "Rome",
  NYC: "New York",
  LON: "London",
  MEX: "Mexico City",
  MEL: "Melbourne",
  SYD: "Sydney",
  CAI: "Cairo",
  SEW: "Seoul",
  ICN: "Seoul",
  SIN: "Singapore",
};

type City = {
  name: string;
  description: string;
  iata: string;
};

const CityInfo: React.FC = () => {
  const { city } = useParams<{ city: string | undefined }>();
  const [randomCities, setRandomCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const cityName = city ? cityNameMapping[city.toUpperCase()] || "Unknown City" : "Unknown City";

  const generateRandomCities = () => {
    const cities = Object.keys(cityNameMapping);
    const randomCities: City[] = [];
    const randomIndexes = new Set<number>();

    while (randomCities.length < 3) {
      const randomIndex = Math.floor(Math.random() * cities.length);
      if (!randomIndexes.has(randomIndex)) {
        const iataCode = cities[randomIndex];
        randomCities.push({
          name: cityNameMapping[iataCode],
          description: `Explore flights to ${cityNameMapping[iataCode]}.`,
          iata: iataCode,
        });
        randomIndexes.add(randomIndex);
      }
    }

    setRandomCities(randomCities);
  };

  useEffect(() => {
    generateRandomCities();
    setLoading(false);
  }, []);

  const generateLink = (cityName: string) => `/explore/destination/${cityName.toLowerCase()}`;

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">Error: {error}</div>;

  return (
    <Layout headerImage={image5}>
      <div className="w-[70%] mx-auto pt-4 pb-16">
        <p className="text-4xl font-bold text-center text-golden capitalize">{city}</p>
        <FlightTable iata1={city} />
        <CurrencyExchange />
        <div>
          <p className="text-3xl font-semibold m-0 mb-4 text-golden">More Destinations</p>
          <div className="flex items-center gap-5 mt-4">
            {randomCities.map((city) => (
              <GenericCard
                key={city.iata}
                image={image6}
                title={city.name}
                link={generateLink(city.name)} // Use city name for the link
                width="100%"
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CityInfo;
