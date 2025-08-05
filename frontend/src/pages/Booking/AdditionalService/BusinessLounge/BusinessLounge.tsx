const airports = ['Ha Noi (HAN)', 'Ho Chi Minh city (SGN)', 'Quy Nhon (UIH)', 'Da Lat (DLI)', 'Nha Trang (CXR)'];

const BusinessLounge = () => {
  return (
    <div className="w-full max-w-[75vw] mx-auto space-y-6">
      <h1 className="text-3xl text-[#1A4532] font-bold">Business Lounge</h1>

      <p className="text-lg">
        Tired of spending hours and hours waiting at the airport, eating cold meals? Why not relax on our comfy green
        armchairs, experience the quintessence of Vietnam’s traditional cuisine, read newspapers in the delicate and
        elegant space of AHA Airlines’ Business Lounge?
      </p>
      <p className="text-lg">
        AHA Airlines offers all passengers business lounge access (Voucher C-lounge) before departure at the airport.
      </p>
      <p className="text-lg">
        Especially from August 15, 2024 to March 31, 2025, AHA Airlines offers First Lounge at Noi Bai airport promotion
        with prices from only 360,000 VND/ticket (VAT included).
      </p>

      <h2 className="text-xl font-bold">List of airports with available Bamboo Airways’ business lounge</h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="flex text-sm">
          {/* Header row */}
          <Cell label="Departure airport" bg="bg-[#ebc94e]" />
          {airports.map((airport) => (
            <Cell key={airport} label={airport} bg="bg-[#ebc94e]" />
          ))}
        </div>

        <Row
          label="Lounge"
          values={[
            'First Lounge by AHA Airlines',
            'Le Saigonnais',
            'Phu Bai Business Lounge',
            'Mimosa Business Lounge',
            'CIAS Lounge',
          ]}
          bg="bg-[#1A4532]"
        />

        <Row label="Adult" values={['360,000VND', '490,000VND', '400,000VND', '400,000VND', '450,000VND']} bg="bg-[#2e8599]" />

        <Row label="Child (from 2 to 12 years of age)" values={['180,000VND', '490,000VND', '200,000VND', '200,000VND', '225,000VND']} bg="bg-[#1A4532]" />

        {/* Infant Row with multiline */}
        <div className="flex text-sm">
          <Cell label="Infant (under 2 years of age)" bg="bg-[#2e8599]" height="h-[5rem]" />

          {[
            ['02 infants: free', 'From the 3rd infant: 180,000VND'],
            ['01 infant: free', 'From the 2nd infant: 490,000VND'],
            ['02 infants: free', 'From the 3rd infant: 200,000VND'],
            ['02 infants: free', 'From the 3rd infant: 200,000VND'],
            ['01 infant: free', 'From the 2nd infant: 225,000VND'],
          ].map((lines, idx) => (
            <div
              key={idx}
              className="w-[11vw] h-[5rem] bg-[#2e8599] text-[#ebc94e] text-center border border-white flex flex-col items-center justify-center px-1 text-xs"
            >
              {lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Cell = ({
  label,
  bg,
  height = 'h-[3rem]',
}: {
  label: string;
  bg: string;
  height?: string;
}) => (
  <div
    className={`w-[11vw] ${height} ${bg} text-center border border-white font-bold flex items-center justify-center px-1 text-[13px]`}
  >
    <p className="break-words">{label}</p>
  </div>
);

const Row = ({
  label,
  values,
  bg,
}: {
  label: string;
  values: string[];
  bg: string;
}) => (
  <div className="flex text-sm">
    <Cell label={label} bg={bg} height="h-[4rem]" />
    {values.map((value, idx) => (
      <Cell key={idx} label={value} bg={bg} height="h-[4rem]" />
    ))}
  </div>
);

export default BusinessLounge;
