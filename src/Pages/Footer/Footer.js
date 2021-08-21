import React from 'react';
import './Footer.scss';
import SectionHeading from '../../Components/SectionHeading/SectionHeading.js';

function Footer() {
  return (
    <div className="footer">

      <br/><br/>
      <div className="footer-name">
        <span className="mediumfont-smaller">
          Apparel Badger
        </span>
      </div>
      <span className="smallfont"><br/>
        Apparel Badger © 2021<br/><br/>
        Est. 2021 | Fairfax, VA<br/><br/>
        Thank you, please come again!<br/><br/><br/>
      </span>

    </div>
  );
}

export default Footer;
