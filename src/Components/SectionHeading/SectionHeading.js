import React from 'react';
import './SectionHeading.scss';
/*import Icons from '../Icons/Icons.js';*/


/* 'c' is 'container' */

function SectionHeading(props) {
  return (
    <div className="sectionheading">
      <div className="sectionheading-c">
        <div className="mediumfont" style={{color:props.color}}>
          {props.word1}
        </div>
        <div className="mediumfont" style={{color:props.color}}>
          {props.word2}
        </div>
      </div>
    </div>
  );
}

export default SectionHeading;
