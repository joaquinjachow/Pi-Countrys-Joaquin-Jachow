import rootReducer from "./reducer";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
//thun se usa para hacer pedidos asincronos, como un pedido a nuestro back por ejemplo, sin el thunk no seria posible
export default store 