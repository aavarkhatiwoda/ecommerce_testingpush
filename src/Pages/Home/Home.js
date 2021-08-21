import React from 'react';
import './Home.scss';


function ShowHeader() {
  const menulist = [
    {name:"Home",id:"#"},
    {},
    {name:"Shop",id:"#shop"},
    {},
    {name:"Cart",id:"#cart"},
    {},
    {name:"Log in",id:"#login"},
  ];
  return (
    <div className="header_content">
      {menulist.map(item => (
        <span className="smallfont">
          <a className="header_content_items" href={item.id}>{item.name}</a>
        </span>
      ))}
    </div>
  );
}

function Home() {
  return (
    <div className="home_parent" id="home">

      <div className="header">
        <ShowHeader />
      </div>

      <div className="home">
        <div className="home_content">
          <div>
            <span className="largefont" style={{color:"#c86400"}}>Apparel Badger</span><br/>
            <span className="smallfont" style={{color:"#646464"}}><br/>Apparel Badger is an online clothing<br/>
            retailer specializing in high-quality<br/>Summertime fashion<br/></span>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Home;


/*
JSX:
<a href="#google">click to go to google</a>
<a href="#facebook">click to go to facebook</a>
<div className="google" id="google">GOOGLE</div>
<div className="facebook" id="facebook">FACEBOOK</div>

CSS:
.google { height: 100vh; background: blue; }
.facebook { height: 100vh; background: red; }
*/
