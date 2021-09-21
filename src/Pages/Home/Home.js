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

      <div className="landing-desktop-menu">
        <ShowDesktopMenu />
      </div>
      <div className="landing-mobile-menu" onClick={menuUp}>
        <ShowMobileMenu />
      </div>

      <div className="menu_button_parent">
        <div className="menu_button" onClick={menuDown}>
          <div className="menu_button_line" />
          <div className="menu_button_line" />
        </div>
      </div>

      <div className="home">
        <div className="home_content">
          <div className="fontsize5" style={{color:"#C86400"}}>SEA&OTTER</div>
          <div className="fontsize1" style={{color:"#646464"}}>ecommerce fashion specialists</div>
        </div>
      </div>

    </div>
  );
}

export default Home;
