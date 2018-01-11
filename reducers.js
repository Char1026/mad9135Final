import { 
    GOBACK_ACTION,
    FETCH_REQUEST,
    FETCH_DATA_SUCESS,
    SELECT_RESTAURANT,
    SHOW_DETAIL } from "./actions";

export default function reducers(state, action) {
    let modifiedState = Object.assign({}, state);

    switch(action.type) {
        case FETCH_REQUEST:
            modifiedState.isFetching = true;
            console.log("Fetch Request");
            break;
        case GOBACK_ACTION:
            modifiedState.isFetching=false;
            modifiedState.showDetail = false;
            console.log("GO BACK");
            break;
        case FETCH_DATA_SUCESS:
            modifiedState.isFetching=false;
            modifiedState.showDetail = false;
            action.data.businesses.sort((a,b)=>{
				if(a.distance < b.distance) return -1;
				else if(a.distance > b.distance) return 1;
				return 0;
			});
            modifiedState.restaurants = Object.assign({},action.data);
            modifiedState.businesses = [...modifiedState.restaurants.businesses];
            modifiedState.locatoin = "List";
            console.log(modifiedState.businesses);
            break;
        case SELECT_RESTAURANT:
            modifiedState.showDetail = true;
            modifiedState.restaurant = action.payload;
            console.log("SELECT RESTAURANT");
            break;
        case SHOW_DETAIL:
            modifiedState.showDetail = true;
            console.log("SHOW DETAIL");
            break;
        default:
            return state;
    }
    return modifiedState;
}