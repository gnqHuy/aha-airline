import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Layout from "../../layout/Layout";
import citiesData from "../../assets-test/Json/cities.json";
import FlightTable from "../../components/FlightTable/FlightTable";
import CurrencyExchange from "../../components/CurrencyExchange/CurrencyExchange";
import GenericCard from "../../components/GenericCard/GenericCard";

type City = {
  name: string;
  country: string;
  airport: string;
  iata: string;
  description: string;
};

// Hàm tạo link ảnh từ S3
const getCityImageUrl = (name: string) =>
  `https://aha-airline.s3.ap-southeast-2.amazonaws.com/${name.toLowerCase().replace(/ /g, "-")}.jpg`;

const CityInfo: React.FC = () => {
  const { nameCity } = useParams<{ nameCity: string }>();
  const location = useLocation(); 
  const [cityInfo, setCityInfo] = useState<City | undefined>();
  const [randomCities, setRandomCities] = useState<City[]>([]);

  useEffect(() => {
    const city = citiesData.find((city: { name: string }) =>
      city.name.toLowerCase() === nameCity?.toLowerCase()
    );
    setCityInfo(city);

    const filteredCities = citiesData.filter(
      (c: City) => c.name.toLowerCase() !== nameCity?.toLowerCase()
    );
    const shuffledCities = filteredCities.sort(() => 0.5 - Math.random());
    setRandomCities(shuffledCities.slice(0, 3));
  }, [nameCity]);

  const generateLink = (cityName: string) =>
    location.pathname.replace(nameCity || "", cityName.toLowerCase());

  return (
    <Layout>
      <div className="w-[70%] mx-auto pt-10 pb-16">
        {cityInfo ? (
          <>
            <p className="text-4xl font-bold text-center text-ahaAmber-2 capitalize">
              {cityInfo.name}
            </p>
            {/* <img
              src={getCityImageUrl(cityInfo.name)}
              alt={cityInfo.name}
              className="w-full mt-6 rounded-2xl shadow-md max-h-[480px] object-cover"
            /> */}
            <p className="mt-6 text-lg text-gray-700">{cityInfo.description}</p>
            <FlightTable nameCity={cityInfo.name} iata={cityInfo.iata} />
          </>
        ) : (
          <p className="text-center text-red-500 text-lg">
            Sorry, we couldn't find any information about this city.
          </p>
        )}
        <CurrencyExchange />
        <div>
          <p className="text-3xl font-semibold m-0 mb-4 text-ahaAmber-2">More Destination</p>
          <div className="flex items-center gap-5 mt-4">
            {randomCities.map((city) => (
              <GenericCard
                key={city.name}
                image={getCityImageUrl(city.name)}
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
