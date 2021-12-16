import { createSlice } from "@reduxjs/toolkit";

const cartSlide = createSlice({
    name: 'cart',
    initialState:{
        showMiniCart: false,
        cartItem:[],
    },
    reducers:{
       showMinicart(state){
           return state.showMiniCart = true;
       },
        hideMiniCart(state){
            return state.showMiniCart= false;
        },
        addtoCart(state , action){
            // newItem{id,product,quantity}
            const newItem = action.payload

            //check if product is avaiable in cart
            const index = state.cartItem.findIndex(x=>x.id === newItem.id);

            if(index >=0){
                //increase quantity
                state.cartItem[index].quantity+=newItem.quantity;
            }else{
                // add to cart
                state.cartItem.push(newItem)

            }

        },
        setQuantity(state,action){
            const {id,quantity} = action.payload;
            //check if product is avaiable in cart
            const index = state.cartItem.findIndex(x => x.id ===id);
            if(index >=0){
                state.cartItem[index].quantity= quantity;
            }
        },
        removeFormCart(state, action){
            const idRemove = action.payload;
            state.cartItem=state.cartItem.filter(x => x.id !== idRemove )
        }
    }
});


const {actions,reducer} = cartSlide;
export const {showMinicart,hideMiniCart,addtoCart,setQuantity,removeFormCart}= actions; //name export
export default reducer; //default export
