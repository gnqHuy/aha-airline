import LayoutDefault from '../../../layout/LayoutDefault';

const TravelDocument = () => {
  return (
    <LayoutDefault>
      <div className="overflow-x-clip overflow-y-auto bg-slate-50 pb-20">
        <div className="w-[75vw] mx-auto mt-10">
          <h1 className="text-3xl text-ahaAmber-2 font-bold mb-10">Travel Document</h1>

          {/* Identification Documents */}
          <section id="identification-documents" className="mb-20">
            <h2 className="text-3xl text-ahaGreen-0 font-bold mb-4">Identification Documents and Visa</h2>
            <p className="text-lg mb-2">
              Passengers are required to present forms of identifications documents at check-in.
            </p>
            <p className="text-lg mb-6">
              (Pursuant to Appendix VII - Personal information when traveling by air; Identification documents, tickets, boarding passes, issued together with Circular 42/2023/TT-BGTVT dated December 29, 2023 of the Minister of Transport).
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-ahaGreen-0">1. International Flights</h3>
                <ul className="list-disc pl-5 text-lg">
                  <li>A valid passport</li>
                  <li>A valid travel document</li>
                  <li>Other documents valid for entry/exit like visa, residence card, or citizen ID if allowed</li>
                  <li>Children/infants: must be listed with photo in the passport of their legal representative</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-ahaGreen-0 mt-8">2. Domestic Flights</h3>

                <h4 className="text-xl font-bold mt-4">2.1. Vietnamese Nationals (Under 14 years old)</h4>
                <ul className="list-disc pl-5 text-lg">
                  <li>Passport, visa, ID card, residence card</li>
                  <li>Police/army ID cards</li>
                  <li>National Assembly or Communist Party membership card</li>
                  <li>Journalist card, driving license</li>
                  <li>Airport security ID card</li>
                </ul>

                <h4 className="text-xl font-bold mt-4">2.2. Vietnamese from 14 to 20 days over 14</h4>
                <p className="text-lg">Same as above</p>

                <h4 className="text-xl font-bold mt-4">2.3. Foreign Nationals</h4>
                <ul className="list-disc pl-5 text-lg space-y-2">
                  <li>Passport with recent entry stamp</li>
                  <li>Diplomatic card from Ministry of Foreign Affairs</li>
                  <li>Vietnamese driving license (or international license + national one)</li>
                  <li>Airport security card</li>
                  <li>AHA Airlines identity card</li>
                  <li>Level 2 electronic identification account</li>
                  <li>
                    In case of passport loss: diplomatic note or police confirmation with photo and stamp (valid for 30 days)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-ahaGreen-0 mt-8">3. Domestic Flights for Under 14s</h3>
                <ul className="list-disc pl-5 text-lg space-y-2">
                  <li>Birth certificate, civil status extract, Level 2 e-ID</li>
                  <li>Certifying form from social organization (valid within 6 months)</li>
                  <li>Police confirmation letter (valid 30 days)</li>
                  <li>ID card, passport (separate or with parent)</li>
                  <li>
                    If included in parent’s passport: must show child’s name, date of birth, and photo (no need for parent to accompany)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-ahaGreen-0 mt-8">4. Criminals/Suspects</h3>
                <p className="text-lg">
                  Required: document proving escort status issued by competent authority. Escort must present identification in section 1 & 2.
                </p>
              </div>
            </div>
          </section>

          {/* Health Status */}
          <section id="health">
            <h2 className="text-3xl text-ahaGreen-0 font-bold mb-6">Health status confirmation requirements</h2>

            {/* Table Header */}
            <div className="flex bg-ahaAmber-2 font-bold text-center">
              <div className="w-[15rem] border border-white py-2">Health Condition</div>
              <div className="w-[15rem] border border-white py-2">You can fly if:</div>
              <div className="w-[40rem] border border-white py-2">Recommendation</div>
            </div>

            {/* Asthma */}
            <div className="flex bg-[#1A4532] text-ahaAmber-2 text-sm">
              <div className="w-[15rem] border border-white p-3 font-bold">
                Asthma, Bronchitis, and Chest-related Conditions
              </div>
              <div className="w-[15rem] border border-white p-3">
                The condition is well-controlled
              </div>
              <div className="w-[40rem] border border-white p-3">
                Carry your usual inhaler. Seek medical advice if wheezing. If breathless at rest, consult a doctor before flying.
              </div>
            </div>

            {/* Heart */}
            <div className="flex bg-[#2e8599] text-ahaAmber-2 text-sm">
              <div className="w-[15rem] border border-white p-3 font-bold">
                Heart Conditions
              </div>
              <div className="w-[15rem] border border-white p-3">
                Can climb stairs without issue. Blood pressure controlled.
              </div>
              <div className="w-[40rem] border border-white p-3">
                Recently had a heart attack or chest pain during flight? Consult a doctor and bring medications.
              </div>
            </div>

            {/* Diabetes */}
            <div className="flex bg-[#1A4532] text-ahaAmber-2 text-sm">
              <div className="w-[15rem] border border-white p-3 font-bold">
                Diabetes Management
              </div>
              <div className="w-[15rem] border border-white p-3">
                Condition is well-controlled.
              </div>
              <div className="w-[40rem] border border-white p-3">
                Order special meals. Maintain insulin and meal routine. Adjust schedule only upon destination arrival.
              </div>
            </div>
          </section>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default TravelDocument;
