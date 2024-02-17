import { createAction, props } from '@ngrx/store';
import { Order } from '../api/order';

export const create_order = createAction("[Order] Create Order", props< {order : Order}>());
export const delete_order = createAction("[Order] Delete Order",props<{orderId :string}>());
export const update_order = createAction("[Order] Update Order" , props<{orderId : string  ,order :  Partial<Order>}>())
export const delete_order_by_food_ID = createAction ("[Order] delete Order By Food Id" , props<{foodId : string}>())
export const reset_order = createAction('[Order] Reset Order');