import './Cart.scss';
import {esi} from '../Eshopitems/Eshopitems.js';
import Pencil_img from '../../Components/Images/pencil_img.jpg';
import Eraser_img from '../../Components/Images/eraser_img.jpg';
import Notebook_img from '../../Components/Images/notebook_img.jpeg';
import Backpack_img from '../../Components/Images/backpack_img.jpg';
import Pencilpouch_img from '../../Components/Images/pencilpouch_img.jpg';
import Calculator_img from '../../Components/Images/calculator_img.jpeg';
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
