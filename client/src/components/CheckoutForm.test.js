import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App"

// Write up the two tests here and make sure they are testing what the title shows


test("form header renders", () => {
    const container = render(<App />);
    // console.log(container)
   container.queryByLabelText('input[name="firstName"]')
   container.queryByLabelText('input[name="address"]')
   container.queryByLabelText('input[name="city"]')
   container.queryByLabelText('input[name="zip"]')
   container.queryByLabelText('input[name="State"]')
   container.queryByLabelText(/h2/i)
  
  
   });

test("form shows success message on submit with form details", () => {
    const final = render(<App />);
    final.queryByLabelText(/button/i)
});
