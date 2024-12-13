import React, { useEffect, useState } from 'react';

const RecommendationComponent = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    fetch('YOUR_API_GATEWAY_URL_HERE')  // Replace with your actual API URL
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setRecommendations(data);
        setLoading(false);  // Set loading to false after data is fetched
      })
      .catch(err => {
        setError('Error fetching recommendations: ' + err);
        setLoading(false);
      });
  }, []);  // Empty array means this runs only once after initial render

  if (loading) {
    return <div className="spinner">Loading...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Recommendations</h2>
      <ul>
        {recommendations.map((item) => (
          <li key={item.id}>{item.name}</li>  // Assuming your data has 'id' and 'name' properties
        ))}
      </ul>
    </div>
  );
};

export default RecommendationComponent;
