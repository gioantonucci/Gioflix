import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../requests";
import "../styles/Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]); 

  useEffect(() => {
      async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
        return request;
      }
      fetchData();
    }, []);

    function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

  return (
    
          <header className= 'banner'
      style= {{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg")`,
          backdropPosition: "center center",
      }
      } >
          <div className= 'banner_contents'>
              <div className="banner_title"> 
              {"Fight Club"}
              </div>
              <h1 className = 'banner_description'>
                 {truncate("A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.", 200)}
              </h1>
            
                  <div className='banner_button'>
                      <button className='banner_btn'>Play</button>
                     
                  </div>
            
          </div>
          <div className="banner--fadeBottom" />
      </header>
    
  )
}

export default Banner
