import React from 'react'
import Layout from '../../../components/Layout/Layout'

type Props = {}

const TravelDocument = (props: Props) => {
  return (
    <Layout>
        <div className = "relative h-[210rem] overflow-x-clip font-space-grotesk">
            <p className="text-3xl text-golden font-bold relative left-[15rem] top-[0rem]">Travel Document</p>
            {/* identification documents */}
            <div className = "relative left-[15rem] top-[0rem] w-[70rem]">
                <p className = "text-3xl text-Green font-bold">Identification Documents and Visa</p>
                <p className = "text-lg relative bottom-[1rem]">Passengers are required to to present forms of identifications documents at check-in.</p>
                <p className = "text-lg relative bottom-[2rem]">(Pursuant to Appendix VII - Personal information when traveling by air; Identification documents, tickets, boarding passes, issued together with Circular 42/2023/TT-BGTVT dated December 29, 2023 of the Minister of Transport).</p>
                <p className = "text-2xl font-bold text-Green relative bottom-[1rem]">1. Passenger travelling on international flights must have the following identification types:</p>
                <p className = "text-lg relative bottom-[2rem]">- A valid passport, or </p>
                <p className = "text-lg relative bottom-[3rem]">- A valid travel document, or </p>
                <p className = "text-lg relative bottom-[4rem]">- Other documents that are valid for entry and exit as prescribed by law such as separate visa, permanent residence card, temporary residence card, citizen’s identity card (if Vietnam and the relevant country sign the treaty or international agreement allowed citizens of a signatory country to use citizenship identification cards instead of using passports in each other’s territories) </p>
                <p className = "text-lg relative bottom-[5rem]">- Children and infants without a passport: full names, date of birth and portrait picture with stamp have to be available in the travel document of the legal representative (father, mother, adoptive father, adoptive mother or guardian) </p>

                <p className = "text-2xl font-bold text-Green relative bottom-[3rem]">2. Passengers under 14 years old (Children/Infants) without a passport or with a parent’s passport when checking in for domestic flights need one of the following identification types:</p>
                <p className = "text-xl font-bold relative bottom-[3rem]">2.1. Vietnamese nationals</p>
                <p className = "text-lg relative bottom-[3rem]">– Passport or Travel Document, separate visa, permanent residence card, temporary residence card, identity card, citizen’s identity card;</p>
                <p className = "text-lg relative bottom-[3rem]">– Identity cards and certificates of the People's Public Security, People's Army; Identity cards and certificates of the People's Public Security are specified in the Government's Decree No. 59/2008/ND-CP of May 8, 2008; Circular No. 13/2008/TT-BCA dated August 29, 2008 of the Ministry of Public Security such as: Identity card of the People's Public Security issued to the People's Public Security officers and non-commissioned officers who are on active service in the public force people's security according to professional regime; Limited-term certificates for non-commissioned officers and soldiers; workers, employees; Temporary recruiting staff who are serving in the People's Public Security force. Identification and certification of the People's Army is specified in Decree No. 130/2008/ND-CP dated December 19, 2008; Decree No. 59/2016/ND-CP dated July 1, 2016 of the Government, Circular No. 218/2016/TT-BQP dated December 27, 2016 of the Ministry of National Defense such as: People's Army officer card; Proof of professional servicemen, workers and defense officers; Cards of non-commissioned officers and soldiers in active service; Reserve officer card; Professional military service cards, non-commissioned officers and reserve soldier. </p>
                <p className = "text-lg relative bottom-[3rem]">– Nation Assembly deputies card </p>
                <p className = "text-lg relative bottom-[3rem]">- Communist Party of Vietnam membership card; </p>
                <p className = "text-lg relative bottom-[3rem]">– Journalist Card issued by the Ministry of Information and Communication is regulated in Circular No. 49/2016/TT-BTTTT date December 26, 2016 of the Ministry of Information and Communications </p>
                <p className = "text-lg relative bottom-[3rem]">– Car, motorbike driving license issued by Vietnam; Note that IDP license issued by Vietnam is not valid for domestic use according to the provision of Circular No. 29/2015/TT-BGTVT dated July 6, 2015 issued by the Ministry of Transport.  </p>
                <p className = "text-lg relative bottom-[3rem]">– Aviation Security control card with long-term use  </p>
                <p className = "text-xl font-bold relative bottom-[3rem]">2.2. Vietnamese passengers aged 14 to 20 days over 14 years old can use the same types of travel documents as passengers under 14 years old.</p>
                <p className = "text-xl font-bold relative bottom-[3rem]">2.3. Non – Vietnamese nationalities </p>
                <p className = "text-lg relative bottom-[3rem]">– Passport (with the most recent entry verification stamp) or international travel documents (with the most recent entry verification stamp) and documents related to residence in Vietnam (visa, permanent residence card, temporary residence card, APEC Business Travel Card), except for cases exempted from visa requirements; <br/>– Diplomatic identification card issued by the Ministry of Foreign Affairs to members of diplomatic, consular offices and representative offices of international organizations;  <br/>– Driving license (car, motorbike) of Vietnam. In case of using a foreign driving license, you have to carry an international driving permit (IDP) and a national driving license issued to the passenger in compliance with the provision of Circular No. 29/2015 / TT -BGTVT dated 6/7/2015 by the Ministry of Transport.  <br/>– Aviation Security control card with long-term use <br/>– AHA Airlines Identity card;  <br/>– Level 2 electronic identification account of the passenger <br/>– In case passport loss, a diplomatic note from the diplomatic mission or consulate of the host country bearing the nationality or official letter of the foreign affairs or police office of the locality where the loss of personal identity and Passport with portrait pictures and stamp is required. Diplomatic note is valid within 30 days since the date of confirmation. </p>

                <p className = "text-2xl font-bold text-Green relative bottom-[1rem]">3. Passengers under 14 years of age when checking in for domestic flights need one of the following identification types: </p>
                <p className = "text-lg relative bottom-[1rem]">– Birth Certificate, civil status extract; birth certificate extract (birth information extract); civil status information confirmation document; Birth Certifying Form (for infants under 02 months old without a birth certificate); Level 2 electronic identification account of the passenger; passenger’s personal information in the Level 2 electronic identification account of the accompanying parent or guardian on the same flight. <br/>– Certifying form by a social organization for children under the patronage of that organization. This certifying form shall be valid within 6 months since the date of confirmation.  <br/>– Identity confirmation document certified by the police (the confirmation document must include the following information: certifying authority, certifying person; date of certification; full name, date of birth, gender, permanent residence of the certified person; reason for certification. The confirmation document is valid for 30 days from the date of certification). <br/>– Citizen’s identity card, identity card, passport (separate passport or included in the parent's passport). <br/>– In case a child does not have a separate passport: accept the passport of the legal representative (father, mother, adoptive father, adoptive mother or guardian) of that child containing the following information: child’s name, date of birth and photo. There is no need for a legal representative to accompany the child to check-in. </p>

                <p className = "text-2xl font-bold text-Green relative top-[1rem]">4. Passengers who are criminals, suspects, being relocated, extradited or expelled at processing the flight procedures only need documents issued by the competent authority to prove as the escort; The escort passenger presents the documents specified in section 1 and 2.  </p>
            </div>

            {/* health */}
            <div className = "left-[15rem] w-[70rem] relative top-[8rem]">
                <p className = "text-3xl text-Green font-bold">Health status confirmation requirements</p>
                <div>
                    <div className = "flex bg-golden">
                        <div className = "w-[15rem] border-white border-solid border-x-[1px] border-y-[1px] text-center font-bold">
                            <p className = "relative">Health Condition</p>
                        </div>
                        <div className = "w-[15rem] border-white border-solid border-x-[1px] border-y-[1px] text-center font-bold">
                            <p className = "relative">You can fly if:</p>
                        </div>
                        <div className = "w-[40rem] border-white border-solid border-x-[1px] border-y-[1px] text-center font-bold">
                            <p className = "relative">Recommendation</p>
                        </div>
                    </div>

                    <div className = "flex bg-[#1A4532] text-golden h-[7rem]">
                        <div className = "w-[15rem] border-white border-solid border-x-[1px] border-y-[1px] text-center font-bold">
                            <p className = "relative top-[1rem]">Asthma, Bronchitis, and Chest-related Conditions </p>
                        </div>
                        <div className = "w-[15rem] border-white border-solid border-x-[1px] border-y-[1px] text-center font-bold">
                            <p className = "relative top-[1rem]">The condition is well-controlled</p>
                        </div>
                        <div className = "w-[40rem] border-white border-solid border-x-[1px] border-y-[1px] font-bold">
                            <p className = "relative left-[0.5rem] bottom-[0.2rem]">Carry your usual inhaler.<br/>Seek medical advice if you experience wheezing before flying.<br/>Consult your doctor if you have difficulty breathing even at rest, cannot walk 50 meters, or climb two flights of stairs without experiencing shortness of breath.</p>
                        </div>
                    </div>

                    <div className = "flex bg-[#2e8599] text-golden h-[8rem]">
                        <div className = "w-[15rem] border-white border-solid border-x-[1px] border-y-[1px] text-center font-bold">
                            <p className = "relative top-[2.5rem]">Heart Conditions </p>
                        </div>
                        <div className = "w-[15rem] border-white border-solid border-x-[1px] border-y-[1px] text-center font-bold">
                            <p className = "relative top-[0.5rem]">You can climb two flights of stairs without any issues.<br/>High blood pressure is well-controlled.</p>
                        </div>
                        <div className = "w-[40rem] border-white border-solid border-x-[1px] border-y-[1px] font-bold">
                            <p className = "relative left-[0.5rem] bottom-[0.3rem]">You have recently experienced a heart attack.<br/>If you frequently experience chest pain (typically characterized by chest discomfort) during flights, you are at twice the risk of experiencing high-altitude chest pain compared to being on the ground. Consult a doctor before flying and ensure you have enough medication to relieve chest pain.</p>
                        </div>
                    </div>

                    <div className = "flex bg-[#1A4532] text-golden h-[10rem]">
                        <div className = "w-[15rem] border-white border-solid border-x-[1px] border-y-[1px] text-center font-bold">
                            <p className = "relative top-[3.5rem]">Diabetes Management</p>
                        </div>
                        <div className = "w-[15rem] border-white border-solid border-x-[1px] border-y-[1px] text-center font-bold">
                            <p className = "relative top-[3.5rem]">The disease is well controlled.</p>
                        </div>
                        <div className = "w-[40rem] border-white border-solid border-x-[1px] border-y-[1px] font-bold">
                            <p className = "relative left-[0.5rem] bottom-[-0.2rem]">Order special meals when booking your ticket.<br/>Take insulin and eat on time.<br/>People with diabetes often struggle to adapt to meal schedules and medication across multiple time zones. It is advisable to maintain your routine like at home throughout your journey and only adjust it to local time when you arrive at your destination.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default TravelDocument