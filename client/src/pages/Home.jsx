import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-700 flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-extrabold tracking-wide mb-4">
        Welcome to <span className="text-yellow-300">StudyNotion</span>
      </h1>
      <p className="text-lg text-gray-200 max-w-lg text-center mb-6">
        Your ultimate platform for learning and knowledge sharing. Join now and
        start your journey towards excellence.
      </p>
      <div className="space-x-4">
        <Link
          to="/register"
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-yellow-500 transition duration-300"
        >
          Get Started
        </Link>
        <Link
          to="/login"
          className="border-2 border-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
