import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="grid grid-cols-3 pl-12 p-4 medium:relative medium:left-[5vw] medium:grid-cols-3 small:relative small:grid-cols-3 small:left-[50vw]">
      {/* Check-In */}
      <div className = "medium:relative medium:left-[20vw]">
        <h2 className="mb-5 text-sm font-semibold uppercase">
          <a
            href="/travel-info/check-in"
            className="text-ahaAmber-2 no-underline hover:opacity-80 transition-opacity"
          >
            Check-In
          </a>
        </h2>
        <ul className="font-medium text-sm list-none p-0 leading-relaxed">
          <li className="mb-4">
            <a
              href="/travel-info/check-in#online"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Online Check-In
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/travel-info/check-in#airport"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Airport Check-In
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/travel-info/check-in#cancel"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Cancel Check-In
            </a>
          </li>
        </ul>
      </div>

      {/* Baggage Info */}
      <div className = "medium:relative medium:left-[13vw] small:relative small:right-[20vw]">
        <h2 className="mb-5 text-sm font-semibold uppercase">
          <a
            href="/travel-info/baggage-info"
            className="text-ahaAmber-2 no-underline hover:opacity-80 transition-opacity"
          >
            Baggage Info
          </a>
        </h2>
        <ul className="font-medium text-sm list-none p-0 leading-relaxed">
          <li className="mb-4">
            <a
              href="/travel-info/baggage-info#carry-on"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Carry-On Baggage
            </a>
          </li>
          <li className="mb-4">
            <Link
              to="/travel-info/baggage-info#excess"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Excess Baggage
            </Link>
          </li>
          <li>
            <Link
              to="/travel-info/baggage-info#special"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Special Baggage
            </Link>
          </li>
        </ul>
      </div>

      {/* Travel Document */}
      <div className = "medium:relative medium:left-[10vw] small:relative small:right-[40vw]">
        <h2 className="mb-5 text-sm font-semibold uppercase">
          <a
            href="/travel-info/travel-document"
            className="text-ahaAmber-2 no-underline hover:opacity-80 transition-opacity"
          >
            Travel Document
          </a>
        </h2>
        <ul className="font-medium text-sm list-none p-0 leading-relaxed">
          <li className="mb-4">
            <Link
              to="/travel-info/travel-document#passport"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Passport Requirements
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/travel-info/travel-document#visa"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Visa Information
            </Link>
          </li>
          <li>
            <Link
              to="/travel-info/travel-document#health-vaccination"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Health & Vaccination
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Explore;
