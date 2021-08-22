import './Eshopitems.scss';
import Placeholder_img from '../../Components/Images/placeholder_img.jpg';
import SectionHeading from '../../Components/SectionHeading/SectionHeading.js';
import C from '../Cart/Cart.js';

var addtocart = "Add to cart";
export const esi = [
  {
    itemnumber:1,
    quantity:0,
    image:Placeholder_img,
    name:"Hawai'ian Shirt",
    price:20.00,
    addtocartbutton:addtocart,
  },
  {
    itemnumber:2,
    quantity:0,
    image:Placeholder_img,
    name:"Summer Shorts",
    price:15.00,
    addtocartbutton:addtocart,
  },
  {
    itemnumber:3,
    quantity:0,
    image:Placeholder_img,
    name:"Polarized Black Sunglasses",
    price:40.00,
    addtocartbutton:addtocart,
  },
  {
    itemnumber:4,
    quantity:0,
    image:Placeholder_img,
    name:"Polarized Brown Sunglasses",
    price:40.00,
    addtocartbutton:addtocart,
  },
  {
    itemnumber:5,
    quantity:0,
    image:Placeholder_img,
    name:"Sandals",
    price:10.00,
    addtocartbutton:addtocart,
  },
  {
    itemnumber:6,
    quantity:0,
    image:Placeholder_img,
    name:"Cap",
    price:10.00,
    addtocartbutton:addtocart,
  },
];


function Eshopitems() {
  return (
    <div className="eshopitems" id="shop">
      <SectionHeading word1="Item" word2="Library" />
      <div className="eshopitems_cards_container">
        {esi.map(i => (
          <div className="eshopitems_cards">
            <div className="eshopitems_cards_contents">
              <span>
                <div className="eshopitems_cards_contents_padding" />
                <img src={i.image} className="eshopitems_cards_contents_image" />
                <div className="eshopitems_cards_contents_name"><span className="smallfont">{i.name}</span></div>
                <div className="eshopitems_cards_contents_price"><span className="smallfont" style={{color:'#646464'}}>{"$" + i.price}</span></div>
                <div className="smallfont">
                  <span className="eshopitems_cards_contents_addtocartbutton" onClick={function() {
                    esi[i.itemnumber-1].quantity+=1;
                    document.getElementById('i' + i.itemnumber).style.display = "block";
                    document.getElementById('ii' + i.itemnumber).src = i.image;
                    document.getElementById('in' + i.itemnumber).innerHTML = i.name;
                    document.getElementById('iq' + i.itemnumber).innerHTML = "$" + i.price +  " x" + i.quantity;
                  }}>
                    {i.addtocartbutton}
                  </span>
                </div>
                <div className="eshopitems_cards_contents_padding" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default Eshopitems;



/*
<div className="eshopitems_cards_contents_description"><span className="smallfont">{i.description}</span></div>
*/
