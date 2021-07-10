

var localdata = localStorage.getItem("store")
localdata = JSON.parse(localdata)
const initialState = localdata ? localdata : {
    total: 0
}
const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD": {
            localStorage.setItem("store", JSON.stringify({
                ...state,
                total: state.total + 1
            }))
            return {
                ...state,
                total: state.total + 1
            };
        }
        case "REMOVE": {
            localStorage.setItem("store", JSON.stringify({
                ...state,
                total: state.total + 1
            }))
            return {
                ...state,
                total: state.total - 1
            };
        }
        default:
            return state;
    }

};
export default countReducer;