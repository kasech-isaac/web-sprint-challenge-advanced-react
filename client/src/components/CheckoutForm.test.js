import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App"

// Write up the two tests here and make sure they are testing what the title shows


test("form header renders", () => {
    const {getByText}=render(<CheckoutForm/>)
    const formHeader=getByText('Checkout Form')
    expect(formHeader).toBeInTheDocument()
 });

test("form shows success message on submit with form details", () => {
    const  container=render(<CheckoutForm/>)
    container.querySelector('input[name="firstName"]')
    container.querySelector('input[name="address"]')
    container.querySelector('input[name="city"]')
    container.querySelector('input[name="state"]')
    container.querySelector('input[name="zip"]')
});
