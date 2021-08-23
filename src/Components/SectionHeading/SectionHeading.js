import React from 'react';
import './SectionHeading.scss';
/*import Icons from '../Icons/Icons.js';*/


/* 'c' is 'container' */

function SectionHeading(props) {
  return (
    <div className="sectionheading">
      <div className="sectionheading-c">
        <div className="fontsize2" style={{color:props.color}}>
          <b>{props.text}</b>
        </div>
      </div>
    </div>
  );
}

export default SectionHeading;
