import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import citiesData from "../../assets-test/Json/cities.json";
import image6 from '../../assets-test/Images/cities/beijing.jpg';
import image5 from '../../assets-test/Images/cities/hanoi.jpg';
import FlightTable from "../../components/FlightTable/FlightTable";
import CurrencyExchange from "../../components/CurrencyExchange/CurrencyExchange";
import GenericCard from "../../components/GenericCard/GenericCard";
import image1 from '../../assets-test/Images/cities/melbourne.jpg';
import image2 from '../../assets-test/Images/cities/istanbul.webp';
import image3 from '../../assets-test/Images/cities/san-francisco.jpg';

const images = [
  image1, image2, image3,
]
type City = {
  name: string;
  country: string,
  airport: string,
  iata: string,
  description: string;
};

const CityInfo: React.FC = () => {
  const { nameCity } = useParams<{ nameCity: string }>();
  const location = useLocation(); 
  const [cityInfo, setCityInfo] = useState<City | undefined>();
  const [randomCities, setRandomCities] = useState<City[]>([]);

  useEffect(() => {
    const city = citiesData.find((city: { name: string }) => city.name.toLowerCase() === nameCity?.toLowerCase());
    console.log(nameCity)
    setCityInfo(city);

    const filteredCities = citiesData.filter((c: City) => c.name.toLowerCase() !== nameCity?.toLowerCase());
    const shuffledCities = filteredCities.sort(() => 0.5 - Math.random());
    setRandomCities(shuffledCities.slice(0, 3));
  }, [nameCity]);

  const generateLink = (cityName: string) => {
    return location.pathname.replace(nameCity || "", cityName.toLowerCase());
  };

  return (
    <Layout>
      <div className="w-[70%] mx-auto pt-10 pb-16">
        {cityInfo ? (
          <>
            <p className="text-4xl font-bold text-center text-golden capitalize">{cityInfo.name}</p>
            <p className="mt-4 text-lg text-gray-700">{cityInfo.description}</p>
            <FlightTable nameCity={cityInfo.name} iata={cityInfo.iata}/>
          </>
        ) : (
          <p className="text-center text-red-500 text-lg">
            Sorry, we couldn't find any information about this city.
          </p>
        )}
        <CurrencyExchange />
        <div>
          <p className="text-3xl font-semibold m-0 mb-4 text-golden">More Destination</p>
          <div className="flex items-center gap-5 mt-4">
            {randomCities.map((city, index) => (
              <GenericCard
                key={city.name}
                image={images[index]} 
                title={city.name}
                link={generateLink(city.name)} 
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