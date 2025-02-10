import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom';

// function ErrorPage() {
//   return (
//     <div>ErrorPage</div>
//   )
// }

const { useEffect, useState } = React;

const generateStars = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1, // 1-3px
    top: `${Math.random() * 50}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 3 + 4,
    delay: Math.random() * 4,
    direction: Math.random() > 0.5 ? "topLeft" : "topRight"
  }));
};

function ErrorPage() {
    const routeError = useRouteError()
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(generateStars(30));

    const interval = setInterval(() => {
      setStars((prev) => [...prev.slice(-20), ...generateStars(10)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-space"></div>

      {/* Falling Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`absolute ${
              star.direction === "topLeft"
                ? "animate-fall-topLeft"
                : "animate-fall-topRight"
            }`}
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`
            }}
          >
            <div className="h-full w-full rounded-full bg-white opacity-80" />
          </div>
        ))}
      </div>

      {/* UFO */}
      <div className="ufo">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8794272-p5k6GdbD8O2RIat5GWtUGJGkDgXoxf.png"
          alt="UFO"
          width={300}
          height={150}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-2 text-5xl font-bold text-white"> Oops! Looks like this page got lost in space</h1>
        
        {routeError && <p className="mb-8 text-xl text-gray-300">
         {routeError.data}
        </p>}
        <NavLink to={"/world-info"}>
        <a
          href="/"
          className="px-6 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700"
        >
          Return Home
        </a>
        </NavLink>
      </div>
    </div>
  );
}


export default ErrorPage