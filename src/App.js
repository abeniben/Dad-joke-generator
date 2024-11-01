import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
    const [joke, setJoke] = useState('')
    const fetchDadJoke = async () => {
      try {
        const response = await axios.get('https://icanhazdadjoke.com/', {
          headers: {
            Accept: 'application/json',
          },
        });
        console.log(response.data);
        setJoke(response.data.joke);
      } catch (error) {
        console.error('Error fetching dad joke:', error.response);
      }
    };

  useEffect(() => {
   
    fetchDadJoke();
  }, []);

    
  return (
    <div className='app'>
       <div className='card'>
         <p className='joke'> {joke}</p>
         <br/> 
         <button className='generateBtn' onClick={fetchDadJoke}>Give me some Dad Joke</button>
        </div>
       
    </div>
  )
};


    
export default App