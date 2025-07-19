import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import offersData from "../../assets-test/Json/offers.json";

const Offer: React.FC = () => {
  const firstColumnOffers = offersData.slice(0, 5);
  const secondColumnOffers = offersData.slice(5, 10);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const div = document.querySelector(hash); 
      if (div) {
        div.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
      }
    }
  }, []);

  return (
    <Layout>
      <div className="w-[70%] mx-auto pt-4">
        <h1 className="text-4xl text-center font-semibold text-ahaAmber-2 mb-6">Offers</h1>

        <div className="grid grid-cols-2 gap-10">
          <div>
            <ul>
              {firstColumnOffers.map((offer) => (
                <li id={offer.code} key={offer.id} className="mb-6 list-none">
                  <h2 className="text-lg font-bold">{offer.title}</h2>
                  <p>{offer.description}</p>
                  <p>
                    <strong>Valid Until:</strong> {offer.validUntil}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ul>
              {secondColumnOffers.map((offer) => (
                <li id={offer.code} key={offer.id} className="mb-6 list-none">
                  <h2 className="text-lg font-bold">{offer.title}</h2>
                  <p>{offer.description}</p>
                  <p>
                    <strong>Valid Until:</strong> {offer.validUntil}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Offer;
