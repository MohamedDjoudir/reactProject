import {createStore} from 'redux';
import rootReducer from './reducers';


const initialState = {
    auth: {
        isLoggedin: false,
        token: '',
        user: {}
    }
}

let persistedState = LoadFromLocalStorge();
const store = createStore(rootReducer, initialState);
store.subscribe(() => saveToLocalStorge(store.getState()))
export default store;