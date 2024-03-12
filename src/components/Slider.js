import React from 'react';

function Slider() {
  return (
    <div className="wrap">
      <div className="slider">
        {/* Slider content goes here */}
        <img src="images/slider1.jpg" data-thumb="images/slider1.jpg" alt="" />
      
      </div>
      <div id="htmlcaption" className="nivo-html-caption">
        <strong>This</strong> is an example of a <em>HTML</em> caption with <a href="#">a link</a>. 
      </div>
    </div>
  );
}

export default Slider;
