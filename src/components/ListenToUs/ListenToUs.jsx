import React from "react";
import "./ListenToUs.css";
import luud001 from "../../assets/video_cover_ifk9af3uzf8.png";
import luud002 from "../../assets/video_cover_alewjhthy2c.png";
import luud003 from "../../assets/luud003cover.png";
import luud004 from "../../assets/luud004cover.png";


const ListenToUs = () => {
  return (
    <div className="listen-to-us">
      <div className="release">
        <div className="release-name">
          LÜÜD001
          <br />
          Various Artist - Southside Touch
        </div>
        <img src={luud001} alt="luud001 cover" className="release-cover" />
        <div className="tracklist" >
          A1 - Unknown Artist - Southside Touch 
          <br />
          A2 - Bwi-Bwi - Insight 
          <br />
          B1 - Mangabey - K129 
          <br />
          B2 - KHALK - Yu All MF
        </div>
      </div>

      <div className="release">
        <div className="release-name">
        LÜÜD002
        <br />
        Javonntte - From Paris to the World EP
        </div>
        <img src={luud002} alt="luud002 cover" className="release-cover" />
        <div className="tracklist" >
          A1 - Luvless - Misunderstood
          <br />
          A2 - Luvless -	Slightly Different
          <br />
          B1 - Luvless - Happiness
          <br />
          B2 - Luvless -	Easy & Fun
        </div>
      </div>

      <div className="release">
        <div className="release-name">
        LÜÜD003
        <br />
        Luvless -  Misunderstood EP
        </div>
        <img src={luud003} alt="luud003 cover" className="release-cover" />
        <div className="tracklist" >
        A1 - Javonntte - Rock With It
        <br />
        A2 - Javonntte -	Jmix
        <br />
        B1 - Javonntte - Romance
        <br />
        B2 - Javonntte - Rock With It (Bwi-Bwi Remix)
        </div>
      </div>

      <div className="release">
        <div className="release-name">
        LÜÜD004
        <br />
        Various Artist - 55 EP
        </div>
        <img src={luud004} alt="luud003 cover" className="release-cover" />
        <div className="tracklist" >
        A1 - Cosmonection -	Bir Hakeim
        <br />
        A2 - Dj Performance -	RER A.cid
        <br />
        B1 - Lastvuska -	Crimée
        <br />
        B2 - Mjog -	Pantruche Beurrée
        </div>
      </div>
    </div>
  );
};

export default ListenToUs;
