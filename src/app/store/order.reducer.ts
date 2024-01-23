import { createReducer, on } from '@ngrx/store';
import { create_order, delete_order, reset_order, update_order } from './order.actions';
import { Order } from '../api/order';

export interface OrderState{
    orders : Order[]
}

export const initialState :OrderState= {
    orders : []
};

export const orderReducer = createReducer(
  initialState,
  on(create_order, (state,{order}) => ({...state, orders : [...state.orders , order]})),
  on(delete_order, (state,{ orderId }) =>({...state , orders : state.orders.filter((value) => value._id !== orderId)})),
  on(update_order,(
    state , 
    {orderId , order})=>({...state , orders : state.orders.map((value)=>value._id === orderId ? {...value , ...order} : value)})
    ),
  on(reset_order, (state) => initialState)
);