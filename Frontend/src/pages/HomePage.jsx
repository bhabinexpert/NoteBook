import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUi from '../components/RateLimitedUi';
import axios from 'axios';

function HomePage() {
  // const [isRateLimited, setIsRateLimited] = useState(false);
  const[notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const fetchNotes = async()=>{
      try {
        const res = await axios.get("http://localhost:8080/api/notes");
        console.log(res.data);
      } catch (error) {
        console.log("Error fetching the Notes!", error)
      }
    };
    fetchNotes();
    }, []);
  return (
    <div className='min-h-screen'>
      <Navbar />

      {/* {isRateLimited && <RateLimitedUi/>} */}
    </div>
  )
}

export default HomePage
