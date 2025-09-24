import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spacing from '../../Spacing';

import CenterStyle from '../../Team/CenterStyle';

let debounceTimer;

export default function CenterListStyle() {
  const [filteredData, setFilteredData] = useState([]); // Centers data
  const [userLocation, setUserLocation] = useState(null); // User's geolocation
  const [searchTerm, setSearchTerm] = useState(''); // Search term
  const [suggestions, setSuggestions] = useState([]); // Google Places suggestions
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // const BASE_URL = 'http://localhost:7000/api/centres';
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  // Fetch all centers
  const fetchAllCenters = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}/api/get-all-centres`);
      console.log(response.data.centres)
      setFilteredData(Array.isArray(response.data.centres) ? response.data.centres : []);
      setSearchTerm(''); // Reset search term
      setSuggestions([]); // Clear suggestions
    } catch (err) {
      console.error('Error fetching all centers:', err.message);
      setError('Unable to fetch all centers. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch nearby centers using geolocation
  const fetchNearbyCenters = async (latitude, longitude) => {
    setLoading(true);
    setError(null);
    console.log('Fetching nearby centers with coords:', { latitude, longitude }); // Debug log
    try {
      const response = await axios.get(`${BASE_URL}/api/centres`, {
        params: { lat: latitude, lng: longitude },
      });
      console.log('API Response (Nearby Centers):', response.data); // Debug log
      setFilteredData(Array.isArray(response.data.centers) ? response.data.centers : []);
    } catch (err) {
      console.error('Error fetching nearby centers:', err.message);
      setError('Unable to fetch nearby centers. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch suggestions for Google Places input
  const fetchSuggestions = async (input) => {
    if (!input) return;
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}/api/centres`, { params: { input } });
      setSuggestions(response.data.suggestions || []);
    } catch (err) {
      console.error('Error fetching suggestions:', err.message);
      setError('Unable to fetch suggestions. Please try again.');
    }
  };

  // Fetch centers for selected Google Place ID
  const fetchCentersByPlaceId = async (placeId) => {
    if (!placeId) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}/api/centres`, { params: { selectedPlaceId: placeId } });
      console.log('Centers fetched by Place ID:', response.data.centers); // Debug log
      setFilteredData(Array.isArray(response.data.centers) ? response.data.centers : []);
    } catch (err) {
      console.error('Error fetching centers by Place ID:', err.message);
      setError('Unable to fetch centers for the selected location. Please try again.');
    } finally {
      setLoading(false);
      setSuggestions([]); // Clear suggestions after selection
    }
  };
  
  // Handle geolocation on component mount
 // Handle geolocation on component mount
useEffect(() => {
  const requestLocation = () => {
    if (navigator.geolocation) {
      // Request location permission
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          fetchNearbyCenters(latitude, longitude); // Fetch nearby centers with the approved location
        },
        (error) => {
          // Handle errors gracefully
          console.error('Error fetching geolocation:', error.message);
          if (error.code === error.PERMISSION_DENIED) {
            setError('Location access denied. Fetching all centers instead.');
          } else {
            setError('Unable to fetch geolocation. Fetching all centers instead.');
          }
          fetchAllCenters(); // Fallback to fetching all centers
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
      fetchAllCenters();
    }
  };

  // Trigger location request on component mount
  requestLocation();
}, []);


  // Closing when clicked outside

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.search-container')) {
        setSuggestions([]);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);


  // Handle search input
  const handleSearchInput = (e) => {
    const input = e.target.value;
    setSearchTerm(input);

    // Clear the previous timer
    clearTimeout(debounceTimer);

    // Set a new debounce timer
    debounceTimer = setTimeout(() => {
      if (input.length > 2) {
        fetchSuggestions(input.trim());
        setSuggestions([]); 
      }
    }, 1000); 
  };


  console.log('Filtered data', filteredData)
  console.log("filtered data", filteredData.length)
  // Filter displayed data by search term
  const displayedData = filteredData.filter((center) => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  
    // If the search term is empty, show all centers
    if (!normalizedSearchTerm) return true;
  
    // Split the search term into keywords (handle multiple separators like ',' or space)
    const keywords = normalizedSearchTerm.split(/[,\s]+/).map((word) => word.trim());
  
    // Normalize center fields
    const name = (center.name_of_centre || '').toLowerCase();
    const city = (center.city || '').toLowerCase();
    const state = (center.state || '').toLowerCase();
  
    // Check if any keyword matches the center name, city, or state
    const matches = keywords.some((keyword) =>
      name.includes(keyword) || city.includes(keyword) || state.includes(keyword)
    );
  
    // Debug logs
    console.log('Center:', center);
    console.log('Keywords:', keywords);
    console.log('Match:', matches);
  
    return matches;
  });
  
  
  
  console.log("displayed data", displayedData)
  

  return (
    <div className="container">
      {/* Search and All Centers */}
      <div className="cs_doctors_heading">
        <div className="cs_isotop_filter cs_style1" style={{ width: '80%' }}>
          <ul className="cs_mp0">
            <li>
              {/* Trigger fetchAllCenters on click */}
              <span onClick={fetchAllCenters} style={{ cursor: 'pointer' }}>
                All
              </span>
            </li>
          </ul>
          <div className="search-container" style={{ width: '100%' }}>
            <div className="col-lg-6 d-flex align-items-center">
              <input
                type="text"
                className="cs_form_field"
                placeholder="Search by center city, or state"
                value={searchTerm}
                onChange={handleSearchInput}
              />
              {suggestions.length > 0 && (
                <ul className="suggestions-list">
                  {suggestions.map((suggestion) => (
                    <li
                      key={suggestion.place_id}
                      onClick={() => {
                        setSearchTerm(suggestion.description); // Fill the input with the selected suggestion
                        setSuggestions([]); // Clear suggestions
                        fetchCentersByPlaceId(suggestion.place_id); // Fetch centers by Place ID
                      }}
                    >
                      {suggestion.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

        </div>
      </div>

      <Spacing md="65" />

      {/* Center Grid */}
      <div className="cs_team_grid">
        {loading && <p>Loading centers...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!loading && !error && displayedData.length === 0 && (
          <p>No centers found for your query.</p>
        )}
        {!loading &&
          !error &&
          displayedData.map((item, index) => (
            <CenterStyle
              key={item._id || index}
              id={item._id || index}
              imgUrl="/images/placeholder.png"
              name={item.name_of_centre|| 'No Name Provided'}
              address={item.address_of_centre || 'No Address Available'}
              phone={item.phone || 'No Phone Available'}
              state={item.state || 'Unknown'}
              city={item.city || 'Unknown'}
              // pinCode={ item.pin_code || 'No Pin Code'}
              mapLocation={ item.map_location || 'Unable to fecth Location'}
              distance={item.distance}
            />
          ))}
      </div>

      <Spacing md="90" />
      {/* <Pagination /> */}
    </div>
  );
}
