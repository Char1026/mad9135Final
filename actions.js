import axios from "axios";

export const FETCH_REQUEST = "FETCH_REQUEST";
export const GOBACK_ACTION = "GOBACK_ACTION";
export const FETCH_DATA_SUCESS = "FETCH_DATA_SUCESS";
export const SELECT_RESTAURANT = "SELECT_RESTAURANT";
export const GET_LOCATION = "GET_LOCATION";
export const SHOW_DETAIL = "SHOW_DETAIL";

const ACCESS_TOKEN="ucu6ycBIRGz-jmkuzdRxyXM6a5XOsmamHpuysOrj-rabLk2lq2J0zUVNv0SHTQJxU7U5zEibex7c6AZivq9RMgOORDOTs88MVxh-_KrkDFBrXpKbcSKroQ-TeEJXWnYx";

export function selectRestaurant(data) {
    return {
		type: SELECT_RESTAURANT,
		payload:data
    };
}

export function showDetailRestaurant() {
    return {
		type: SHOW_DETAIL,
    };
}

export function goBack(){
	return{
		type:GOBACK_ACTION,
	}
}

export function fetchRequest() {
    return {
        type: FETCH_REQUEST
    };
}

export function fetchDataSuccess(data){
	return {
		type: FETCH_DATA_SUCESS,
		data:data
	};
}

export function getLocation(){
	return (dispatch) =>{
		var options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
		  };
		const geolocation = navigator.geolocation;
		geolocation.getCurrentPosition((
			position) => {
            dispatch( fetchData(position.coords));
		},
		()=>{return},
		options);
	}
}
export function fetchData(postion){
	return(dispatch)=> {

		let place = "latitude="+postion.latitude+"&longitude="+postion.longitude;
		let url = "https://api.yelp.com/v3/businesses/search?" + place;
		
		dispatch(fetchRequest());
		axios.get(url,{
			headers: {
			"Authorization": "Bearer "+ ACCESS_TOKEN,
		  }}
		).then((response) =>{
			/* eslint no-debugger: 0 */
			// debugger;
			return response;
		}).then((response)=> {
			let restaurantdata = response.data;
			dispatch(fetchDataSuccess(restaurantdata));
		}).catch(function (error) {
			console.log(error);
        });;
    };

}