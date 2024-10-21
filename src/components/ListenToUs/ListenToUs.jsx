import React from "react";
import "./ListenToUs.css";
import luud001 from "../../assets/video_cover_ifk9af3uzf8.png";
import luud002 from "../../assets/video_cover_alewjhthy2c.png";
import luud003 from "../../assets/luud003cover.png";
import luud004 from "../../assets/luud004cover.png";
import luud005 from "../../assets/luud005cover.png";
import luud006 from "../../assets/luud006cover.png";
import luud007 from "../../assets/luud007cover.png";

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
        <div className="tracklist">
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
        <div className="tracklist">
          A1 - Luvless - Misunderstood
          <br />
          A2 - Luvless - Slightly Different
          <br />
          B1 - Luvless - Happiness
          <br />
          B2 - Luvless - Easy & Fun
        </div>
      </div>

      <div className="release">
        <div className="release-name">
          LÜÜD003
          <br />
          Luvless - Misunderstood EP
        </div>
        <img src={luud003} alt="luud003 cover" className="release-cover" />
        <div className="tracklist">
          A1 - Javonntte - Rock With It
          <br />
          A2 - Javonntte - Jmix
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
        <div className="tracklist">
          A1 - Cosmonection - Bir Hakeim
          <br />
          A2 - Dj Performance - RER A.cid
          <br />
          B1 - Lastvuska - Crimée
          <br />
          B2 - Mjog - Pantruche Beurrée
        </div>
      </div>

      <div className="release">
        <div className="release-name">
          LÜÜD005
          <br />
          Armless Kid & AES - Share the Wax EP
        </div>
        <img src={luud005} alt="luud003 cover" className="release-cover" />
        <div className="tracklist">
          A1 - AES - Jhonedo
          <br />
          A2 - AES - WAYD
          <br />
          B1 - Armless Kid - 603
          <br />
          B2 - Armless Kid - 604
        </div>
      </div>

      <div className="release">
        <div className="release-name">
          LÜÜD006
          <br />
          Bwi-Bwi - Canto Soulèu EP
        </div>
        <img src={luud006} alt="luud003 cover" className="release-cover" />
        <div className="tracklist">
          A1 - Bwi-Bwi - Canto Soulèu
          <br />
          A2 - Bwi-Bwi - Canto Soulèu (A.M. Mix)
          <br />
          B1 - Bwi-Bwi - The Truth Is Out There
          <br />
          B2 - Bwi-Bwi - Retool
        </div>
      </div>

      <div className="release">
        <div className="release-name">
          LÜÜD007
          <br />
          Black Rings Under My Eyes - GAMBLER EP
        </div>
        <img src={luud007} alt="luud003 cover" className="release-cover" />
        <div className="tracklist">
          A1 - B.R.U.M.E - Badman
          <br />
          A2 - B.R.U.M.E - Gambler
          <br />
          A3 - B.R.U.M.E - Roll Em Up
          <br />
          A4 - B.R.U.M.E - Doomed
          <br />
          B1 - B.R.U.M.E - Kord Punch
          <br />
          B2 - B.R.U.M.E - Gambler (Fluctuosa Remix)
          <br />
          B3 - B.R.U.M.E - Gambler (François Ier Remix)
        </div>
      </div>
    </div>
  );
};

export default ListenToUs;
