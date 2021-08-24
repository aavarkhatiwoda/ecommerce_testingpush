import './Home.scss';


function menuUp() {
  document.querySelector(".landing-mobile-menu").classList.toggle("toggleMenuChange");
}

function menuDown() {
  document.querySelector(".landing-mobile-menu").classList.toggle("toggleMenuChange");
}

function ShowDesktopMenu() {
  const menulist = [
    {name:"HOME",id:"#"},{},
    {name:"SHOP",id:"#shop"},{},
    {name:"CART",id:"#cart"},{},
    {name:"LOG IN",id:"#login"},
  ];
  return (
    <div className="landing-menu-parent">
      {menulist.map(item => (
        <a className="landing-menu-links" href={item.id}>
          <span className="fontsize1">{item.name}</span></a>
      ))}
    </div>
  );
}
function ShowMobileMenu() {
  const menulist = [
    {},
    {name:"HOME",id:"#"},
    {name:"SHOP",id:"#shop"},
    {name:"CART",id:"#cart"},
    {name:"LOG IN",id:"#login"},
    {},
  ];
  return (
    <div className="landing-mobile-menu-parent">
      {menulist.map(item => (
        <span className="fontsize2">
          <a className="landing-mobile-menu-links" href={item.id}>{item.name}</a></span>
      ))}
    </div>
  );
}

function Home() {
  return (
    <div className="landing-parent">

    <div className="menu_button_parent">
      <div className="menu_button" onClick={menuDown}>
        <div className="menu_button_line" />
        <div className="menu_button_line" />
      </div>
    </div>

      <div className="landing-desktop-menu">
        <ShowDesktopMenu />
      </div>
      <div className="landing-mobile-menu" onClick={menuUp}>
        <ShowMobileMenu />
      </div>

      <div className="home">
        <div className="home_content">
          <div className="fontsize5" style={{color:"#c86400"}}>SEA&OTTER</div>
          <div className="fontsize1" style={{color:"#646464"}}>ecommerce fashion specialists</div>
        </div>
      </div>

    </div>
  );
}

export default Home;





/*
import './Home.scss';

function menuUp() {
  document.querySelector(".mobile_header").classList.toggle("toggleMenuChange");
}
function menuDown() {
  document.querySelector(".mobile_header").classList.toggle("toggleMenuChange");
}

function ShowDesktopLinks() {
  const menulist = [
    {name:"Home",id:"#"},{},
    {name:"Shop",id:"#shop"},{},
    {name:"Cart",id:"#cart"},{},
    {name:"Log in",id:"#login"},
  ];
  return (
    <div className="desktoplinks">
      <div className="desktoplinks_content">
        {menulist.map(item => (
          <span className="fontsize2">
            <a className="desktoplinks_content_items" href={item.id}>{item.name}</a>
          </span>
        ))}
      </div>
    </div>
  );

}
function ShowMobileLinks() {
  const menulist = [
    {},
    {name:"Home",id:"#"},
    {name:"Shop",id:"#shop"},
    {name:"Cart",id:"#cart"},
    {name:"Log in",id:"#login"},
    {},
  ];
  return (
    <div className="mobilelinks">
      <div className="mobilelinks_content">
        {menulist.map(item => (
          <span className="fontsize3">
            <a className="mobilelinks_content_items" href={item.id}>{item.name}</a>
          </span>
        ))}
      </div>
    </div>
  );

}

function Home() {
  return (
    <div className="home_parent">

      <div className="menu_button_parent">
        <div className="menu_button" onClick={menuDown}>
          <div className="menu_button_line" />
          <div className="menu_button_line" />
        </div>
      </div>

      <div className="desktop_header"><ShowDesktopLinks /></div>
      <div className="mobile_header" onClick={menuUp}><ShowMobileLinks /></div>


      <div className="home">
        <div className="home_content">
          <div className="fontsize5" style={{color:"#c86400"}}>Apparel Badger</div>
          <div className="fontsize1" style={{color:"#646464"}}>ecommerce fashion specialists</div>
        </div>
      </div>

    </div>
  );
}

export default Home;
*/








/*
function menuUp() {
  document.querySelector(".landing_mobile_menu").classList.toggle("toggleMenuChange");
}
function menuDown() {
  document.querySelector(".landing_mobile_menu").classList.toggle("toggleMenuChange");
}
function ShowDesktopMenu() {
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
    <div className="header">
      <div className="header_content">
        {menulist.map(item => (
          <span className="fontsize2">
            <a className="header_content_items" href={item.id}>{item.name}</a>
          </span>
        ))}
      </div>
    </div>
  );
}
function ShowMobileMenu() {
  const menulist = [
    {name:"Home",id:"#"},
    {name:"Shop",id:"#shop"},
    {name:"Cart",id:"#cart"},
    {name:"Log in",id:"#login"},
  ];
  return (
    <div className="header">
      <div className="header_content">
        {menulist.map(item => (
          <span className="fontsize3">
            <a className="header_content_items" href={item.id}>{item.name}</a>
          </span>
        ))}
      </div>
    </div>
  );
}


function Home() {
  return (
    <div className="home_parent">

      <div className="menu_button" onClick={menuDown}>
        <div className="menu_button_line" />
        <div className="menu_button_line" />
      </div>

      <div className="landing_desktop_menu"><ShowDesktopMenu /></div>
      <div className="landing_mobile_menu" onClick={menuUp}><ShowMobileMenu /></div>


      <div className="home">
        <div className="home_content">
          <div className="fontsize5" style={{color:"#c86400"}}>Apparel Badger</div>
          <div className="fontsize1" style={{color:"#646464"}}>ecommerce fashion specialists</div>
        </div>
      </div>



    </div>
  )
}

export default Home;
*/















/*
import './Home.scss';


function menuUp() {
  document.querySelector(".landing-mobile-menu").classList.toggle("toggleMenuChange");
}

function menuDown() {
  document.querySelector(".landing-mobile-menu").classList.toggle("toggleMenuChange");
}

function ShowHeaderDesktop() {
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
    <div className="header">
      <div className="header_content">
        {menulist.map(item => (
          <span className="fontsize2">
            <a className="header_content_items" href={item.id}>{item.name}</a>
          </span>
        ))}
      </div>
    </div>
  );
}
function ShowHeaderMobile() {
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
    <div className="header">
      <div className="header_content">
        {menulist.map(item => (
          <span className="fontsize2">
            <a className="header_content_items" href={item.id}>{item.name}</a>
          </span>
        ))}
      </div>
    </div>
  );
}


function Home() {
  return (
    <div className="home_parent">


      <div className="menu-btn" onClick={menuDown}>
        <div className="menu-btn-line" />
        <div className="menu-btn-line" />
      </div>

      <div className="headerlinks_desktop">
        <ShowHeaderDesktop />
      </div>

      <div className="headerlinks_mobile">
        <ShowHeaderMobile />
      </div>




      <div className="home">
        <div className="home_content">
          <div className="fontsize5" style={{color:"#c86400"}}>Apparel Badger</div>
          <div className="fontsize1" style={{color:"#646464"}}>ecommerce fashion specialists</div>
        </div>
      </div>
    </div>
  )
}

export default Home;
*/

/*
<div className="home_fontsizetest">
  <div className="fontsize1">Font size 1</div>
  <div className="fontsize2">Font size 2</div>
  <div className="fontsize3">Font size 3</div>
  <div className="fontsize4">Font size 4</div>
  <div className="fontsize5">Font size 5</div>
</div>
*/
