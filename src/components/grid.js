import React, { useEffect, useState } from "react";
import Card from './card';
import axios from "axios";


export default function Grid() {
    const [apod, setApod] = useState([]);
    
  
    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=IWWfbBEsQsdqtCVpDDvD54ZiOd5HOQAjaOl0G6ZA`)
        .then(response => {
          const photos = response.data;
          console.log(photos);
          setApod(photos)
        })
        .catch(error => {
          console.log("The data was not returned", error);
        });
    }, []);
    return (
      <div className="apod-section">
        <Card 
        title={apod.title}
        copyright={apod.copyright}
        date={apod.date}
        media_type={apod.media_type}
        url={apod.url}
        explanation={apod.explanation}
        />
      </div>
    )
  }
  