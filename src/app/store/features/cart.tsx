import { Cart } from '@/app/utils/type';
import { createSlice } from '@reduxjs/toolkit'

// Define the initial state using that type
const initialState: Cart [] = [];

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Add to cart functionality
    addToCart(state,action){
      let uuid = Math.floor(1000+Math.random()*9000)
      let newObj = {...action.payload, uuid}
      state.push (newObj);
    }, 
    // Delete from Cart
    delItem(state, {payload}) {
      return state.filter((val) => val.uuid !==payload)
    },
    // Addition of Item
    addCart(state, action) {
      let obj = state.find(
        (val)=> val.id == action.payload.id && 
        val.color == action.payload.color && 
        val.size == action.payload.size
      );
      
      if (obj) {
        ++obj.qty;
        let newstate = state.filter((val)=>val.id !== obj?.id)
        state = [...newstate , obj];
        return;
      }
    },
    // Subtraction of Item
    subtractCart(state, action) {
      let obj = state.find(
        (val)=> val.id == action.payload.id && 
        val.color == action.payload.color && 
        val.size == action.payload.size
      );
      if (obj !== undefined) {
        if (obj.qty<=1) {
          return state.filter((val) => val.uuid !== obj?.uuid)
        }
        --obj.qty;
        let newstate = state.filter((val)=> val.uuid == obj?.uuid)
        state = [...newstate, obj];
        return;
      }
    }

  },
});

export const {addToCart, delItem, addCart, subtractCart} = cartSlice.actions;

export default cartSlice.reducer;