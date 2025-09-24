
import { useState, useEffect } from 'react';
import Lottie from 'react-lottie';


const GlobalLoader = ({ isLoading }) => {
    const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the Lottie JSON file
    fetch('/images/loader.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error('Error loading Lottie animation:', error));
  }, []);

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, // Use fetched data
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  if (!isLoading) return null;

  return (
    <div className="global-loader">
      <Lottie options={lottieOptions} loop autoplay style={{ height: 200, width: 200 }} />
    </div>
  );
};
export default GlobalLoader