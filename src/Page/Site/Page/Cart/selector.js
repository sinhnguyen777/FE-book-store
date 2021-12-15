import { createSelector } from "@reduxjs/toolkit";

const cartItemSelector = (state) => state.cart.cartItem;

// count number of product in cart

export const cartItemCountSelector = createSelector(cartItemSelector, cartItem => cartItem.reduce((count,item)=>count + item.quantity ,0))


// Calc total of cart 

export const cartItemTotalSelector = createSelector(cartItemSelector, cartItem => cartItem.reduce((total,item)=>total + (item.productDetail.price * item.quantity) ,0))
