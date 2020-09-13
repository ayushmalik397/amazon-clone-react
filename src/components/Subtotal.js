import React from "react";
import "./assets/Subtotal.css";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format";
import { getSubtotal } from "../reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal-box">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" />
              <span className="gift-text">This order contains a gift</span>
            </small>
          </>
        )}
        decimalScale={2}
        value={getSubtotal(basket)}
        displayType={"text"}
        prefix={"$"}
      />
      <button
        onClick={(e) => history.push("/payment")}
        className="proceed-checkout"
      >
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
