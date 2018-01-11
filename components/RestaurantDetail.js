import React,{Component} from 'react';
import {Text,Content} from 'native-base'
import {connect} from 'react-redux'

export class RestaurantDetail extends Component{

    render(){
        return(
            <Content>
                <Text>Name: {this.props.restaurant.name}</Text>
                <Text>Phone: {this.props.restaurant.phone}</Text>
                <Text>Distance: {Number(this.props.restaurant.distance).toFixed(0)+" Metres"}</Text>
                <Text>Price: {this.props.restaurant.price}</Text>
                <Text>Rating: {this.props.restaurant.rating}</Text>
            </Content>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        restaurant: state.restaurant
    };
}

export default connect(mapStateToProps)(RestaurantDetail);