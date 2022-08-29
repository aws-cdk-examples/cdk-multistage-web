import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState();


  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    // @ts-ignore
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

    return (
      <div>
        <p>api url: {process.env.REACT_APP_API_URL}</p>
        <pre>{JSON.stringify(items,undefined, 2)}</pre>
      </div>

    );
  }
}

export default App;
