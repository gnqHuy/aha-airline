import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleSwitchForm = () => setIsLogin(!isLogin);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url("https://aha-airline.s3.ap-southeast-2.amazonaws.com/sunset4.jpg")`}}
    >
      <div className="w-[90%] max-w-4xl bg-[#FCF9F2] rounded-2xl shadow-md p-6 pb-10 flex flex-col items-end">
        <Link to="/" className="mb-4 self-end">
          <div className="flex items-center px-4 py-2 bg-gray-400 bg-opacity-50 text-gray-950 rounded-full hover:bg-opacity-60 hover:text-white transition-all">
            <p className="text-sm">Back to website</p>
            <FaLongArrowAltRight className="ml-2" />
          </div>
        </Link>

        <div className="w-full flex justify-center flex-grow">
          {isLogin ? (
            <LoginForm />
          ) : (
            <RegisterForm handleSwitchForm={handleSwitchForm}/>
          )}
        </div>

        <div className="self-center text-sm text-gray-600">
          {isLogin ? (
            <>
              Don’t have an account?{' '}
              <button
                onClick={handleSwitchForm}
                className="text-ahaAmber-2 hover:underline"
              >
                Register here
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={handleSwitchForm}
                className="text-ahaAmber-2 hover:underline"
              >
                Login here
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
