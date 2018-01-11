import React, { Component } from 'react'
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import * as actions from "../actions"
import {ListItem,Left,Right,Icon,Text} from 'native-base';


export class Restaurant extends Component{
    makeUnit(){
        return this.props.restaurant.name +" ("+ Number(this.props.restaurant.distance / 1000).toFixed(2)+ "km)";
    };
    render(){
        return (
            <ListItem key={this.props.restaurant.name} onPress={this.props.selectRestaurant}>
                <Left>
                    <Text>{this.makeUnit()}</Text>
                </Left>
                <Right>
                    <Icon name="arrow-forward" />
                </Right> 
            </ListItem>
        )
    };
};

Restaurant.protoTypes ={
    restaurant: PropTypes.object
};

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        selectRestaurant: () => dispatch(actions.selectRestaurant(ownProps.restaurant)),
    };
  };
export default connect(null,mapDispatchToProps)(Restaurant);