import './Cart.scss';
import {esi} from '../Eshopitems/Eshopitems.js';
import SectionHeading from '../../Components/SectionHeading/SectionHeading.js';


function CartItems() {
  return (
    <div className="cart_parent" id="cart">
      <div className="cart">
        <SectionHeading text="CART" />
        <div className="cart_cards_container">
          {esi.map(i => (
            <div className={"cart_item" + i.itemnumber} id={"cart_item" + i.itemnumber}>
              <div className="cart_cards_contents">
                <div className="fontsize1">


                  <img className="cart_item_image" id={"cart_item" + i.itemnumber + "_image"} />
                  <div className="cart_item_name" id={"cart_item" + i.itemnumber + "_name"} />
                  <div className="cart_item_quantity" id={"cart_item" + i.itemnumber + "_quantity"} />
                  <div className="cart_item_add1" id={"cart_item" + i.itemnumber + "_add1"} onClick={function() {
                    i.quantity += 1;
                    document.getElementById('cart_item' + i.itemnumber + '_quantity').innerHTML = "$" + i.price + "\xa0\xa0·\xa0\xa0x" + i.quantity + "\xa0\xa0·\xa0\xa0" + "$" + i.price*i.quantity;
                  }}>{"ADD\xa0\xa0"}</div><span style={{color:'#646464'}}>{"·\xa0\xa0"}</span>
                  <div className="cart_item_subtract1" id={"cart_item" + i.itemnumber + "_subtract1"} onClick={function() {
                    i.quantity -= 1;
                    document.getElementById('cart_item' + i.itemnumber + '_quantity').innerHTML = "$" + i.price + "\xa0\xa0·\xa0\xa0x" + i.quantity + "\xa0\xa0·\xa0\xa0" + "$" + i.price*i.quantity;
                    if (i.quantity == 0) {
                      document.getElementById('cart_item' + i.itemnumber).style.display = "none";
                    }
                  }}>{"SUBTRACT"}</div><br/>
                  <div className="cart_item_removeall" id={"cart_item" + i.itemnumber + "_removeall"} onClick={function() {
                    i.quantity = 0;
                    document.getElementById('cart_item' + i.itemnumber).style.display = "none";
                  }}>REMOVE ALL</div>


                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


function Cart() {
  return (
    <CartItems />
  );
}

export default Cart;
