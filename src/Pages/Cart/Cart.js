import './Cart.scss';
import {esi} from '../Eshopitems/Eshopitems.js';
import SectionHeading from '../../Components/SectionHeading/SectionHeading.js';

/*
function ShowCartItems() {
  for (var i = 0; i < esi.length; i++) {
    if (esi[i].quantity > 0) {
      return (
        <div>
          <img src={esi[i].image} className="incart_img" />
          <div className="incart_itemname">{esi[i].name}</div>
          <div className="incart_itemquantity">{"x" + esi[i].quantity}</div>
        </div>
      );
    }
  }
}
*/



function Cart() {
  return (
    <div className="cart" id="cart">
      <SectionHeading word1="Cart" />

        <div className="cart_cartitemscontainer">

          <div className="i1" id="i1">
            <div className="smallfont">
              <img src="" className="incart_itemimg" id="ii1" />
              <div className="incart_itemname" id="in1" />
              <div className="incart_itemquantity" id="iq1" />
              <div className="incart_add1" onClick={function() {
                esi[0].quantity += 1;
                document.getElementById('iq1').innerHTML = "$" + esi[0].price + " x" + esi[0].quantity;
              }}>+1</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="incart_subtract1" onClick={function() {
                esi[0].quantity -= 1;
                document.getElementById('iq1').innerHTML = "$" + esi[0].price + " x" + esi[0].quantity;
                if (esi[0].quantity == 0) {
                  document.getElementById('i1').style.display = "none";
                }
              }}>-1</div><br/>
              <div className="incart_removeall" onClick={function() {
                esi[0].quantity = 0;
                document.getElementById('i1').style.display = "none";
              }}>Remove All</div><br/>
            </div>
          </div>
          <div className="i2" id="i2">
            <div className="smallfont">
              <img src="" className="incart_itemimg" id="ii2" />
              <div className="incart_itemname" id="in2" />
              <div className="incart_itemquantity" id="iq2" />
              <div className="incart_add1" onClick={function() {
                esi[1].quantity += 1;
                document.getElementById('iq2').innerHTML = "$" + esi[1].price + " x" + esi[1].quantity;
              }}>+1</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="incart_subtract1" onClick={function() {
                esi[1].quantity -= 1;
                document.getElementById('iq2').innerHTML = "$" + esi[1].price + " x" + esi[1].quantity;
                if (esi[1].quantity == 0) {
                  document.getElementById('i2').style.display = "none";
                }
              }}>-1</div><br/>
              <div className="incart_removeall" onClick={function() {
                esi[1].quantity = 0;
                document.getElementById('i2').style.display = "none";
              }}>Remove All</div><br/>
            </div>
          </div>
          <div className="i3" id="i3">
            <div className="smallfont">
              <img src="" className="incart_itemimg" id="ii3" />
              <div className="incart_itemname" id="in3" />
              <div className="incart_itemquantity" id="iq3" />
              <div className="incart_add1" onClick={function() {
                esi[2].quantity += 1;
                document.getElementById('iq3').innerHTML = "$" + esi[2].price + " x" + esi[2].quantity;
              }}>+1</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="incart_subtract1" onClick={function() {
                esi[2].quantity -= 1;
                document.getElementById('iq3').innerHTML = "$" + esi[2].price + " x" + esi[2].quantity;
                if (esi[2].quantity == 0) {
                  document.getElementById('i3').style.display = "none";
                }
              }}>-1</div><br/>
              <div className="incart_removeall" onClick={function() {
                esi[2].quantity = 0;
                document.getElementById('i3').style.display = "none";
              }}>Remove All</div><br/>
            </div>
          </div>
          <div className="i4" id="i4">
            <div className="smallfont">
              <img src="" className="incart_itemimg" id="ii4" />
              <div className="incart_itemname" id="in4" />
              <div className="incart_itemquantity" id="iq4" />
              <div className="incart_add1" onClick={function() {
                esi[3].quantity += 1;
                document.getElementById('iq4').innerHTML = "$" + esi[3].price + " x" + esi[3].quantity;
              }}>+1</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="incart_subtract1" onClick={function() {
                esi[3].quantity -= 1;
                document.getElementById('iq4').innerHTML = "$" + esi[3].price + " x" + esi[3].quantity;
                if (esi[3].quantity == 0) {
                  document.getElementById('i4').style.display = "none";
                }
              }}>-1</div><br/>
              <div className="incart_removeall" onClick={function() {
                esi[3].quantity = 0;
                document.getElementById('i4').style.display = "none";
              }}>Remove All</div><br/>
            </div>
          </div>
          <div className="i5" id="i5">
            <div className="smallfont">
              <img src="" className="incart_itemimg" id="ii5" />
              <div className="incart_itemname" id="in5" />
              <div className="incart_itemquantity" id="iq5" />
              <div className="incart_add1" onClick={function() {
                esi[4].quantity += 1;
                document.getElementById('iq5').innerHTML = "$" + esi[4].price + " x" + esi[4].quantity;
              }}>+1</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="incart_subtract1" onClick={function() {
                esi[4].quantity -= 1;
                document.getElementById('iq5').innerHTML = "$" + esi[4].price + " x" + esi[4].quantity;
                if (esi[4].quantity == 0) {
                  document.getElementById('i5').style.display = "none";
                }
              }}>-1</div><br/>
              <div className="incart_removeall" onClick={function() {
                esi[4].quantity = 0;
                document.getElementById('i5').style.display = "none";
              }}>Remove All</div><br/>
            </div>
          </div>
          <div className="i6" id="i6">
            <div className="smallfont">
              <img src="" className="incart_itemimg" id="ii6" />
              <div className="incart_itemname" id="in6" />
              <div className="incart_itemquantity" id="iq6" />
              <div className="incart_add1" onClick={function() {
                esi[5].quantity += 1;
                document.getElementById('iq6').innerHTML = "$" + esi[5].price + " x" + esi[5].quantity;
              }}>+1</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="incart_subtract1" onClick={function() {
                esi[5].quantity -= 1;
                document.getElementById('iq6').innerHTML = "$" + esi[5].price + " x" + esi[5].quantity;
                if (esi[5].quantity == 0) {
                  document.getElementById('i6').style.display = "none";
                }
              }}>-1</div><br/>
              <div className="incart_removeall" onClick={function() {
                esi[5].quantity = 0;
                document.getElementById('i6').style.display = "none";
              }}>Remove All</div><br/>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Cart;












/*
import './Cart.scss';
import {esi} from '../Eshopitems/Eshopitems.js';
import SectionHeading from '../../Components/SectionHeading/SectionHeading.js';



function ShowCartItems() {
  var alerted = false;
  for (var i = 0; i < esi.length; i++) {
    if (esi[i].quantity > 0) {
      alerted=true; alert(esi[i].quantity + " item(s) of " + esi[i].name);
    }
  }
  if (alerted == false) {
    alert("No items in cart");
  }
}
function ShowBalance() {
  var total = 0.00;
  for (var i = 0; i < esi.length; i++) {
    total += esi[i].price * esi[i].quantity;
  }
  alert("The current balance is $" + total);
}
function EmptyCart() {
  for (var i = 0; i < esi.length; i++) {
    esi[i].quantity = 0;
  }
  alert("Cart emptied");
}

function Cart() {
  return (
    <div className="cart" id="cart">
      <SectionHeading word1="Cart" />
      <div className="smallfont-bigger">
        <div onClick={ShowCartItems} className="cart_showcartitemsbutton">Show cart items</div>
        <div onClick={ShowBalance} className="cart_showcurrentbalancebutton">Show current balance</div>
        <div onClick={EmptyCart} className="cart_emptycartbutton">Empty the cart</div>
      </div>
    </div>
  )
}

export default Cart;
*/
