import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    Container, 
    Header,
    Content,
    List, 
    ListItem, 
    Button, 
    Left, 
    Right, 
    Body, 
    Icon, 
    Text,
    Footer,
    FooterTab,
    Spinner} from 'native-base';
import Restaurant from './Restaurant';
import RestaurantDetail from './RestaurantDetail';
import * as actions from "../actions";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.buttonPress = this.buttonPress.bind(this);
  }
  
  buttonPress() {
    this.props.navigation.navigate('RestaurantDetail');
  }
    

  renderButton(){
    if(this.props.isFetching) {
      return <Spinner color='black' />
  }
    else{
        return(
            <Button full onPress={this.props.fetchAddress} >
            <Text>Find Restaurants</Text>
        </Button>
        )
    }
}
  renderListItem() {
    let count = 0;
    if(!this.props.businesses) 
        return;
    else if(this.props.showDetail!=true){
        return this.props.businesses.map((item) => {
        return <Restaurant key={count++} restaurant = {item} />
        }) 
    }
  };
  renderFooter(){
    return (
        <Footer>
            <FooterTab>
                <Button full>
                    <Text>Tyler Charlebois (char1026)</Text>
                </Button>
            </FooterTab>
        </Footer>      
    )
}

render() {
   
    if(!this.props.showDetail){
        return(
            <Container>
                <Header>
                    <Body>
                        <Text>Restaurant List</Text>
                    </Body>    
                </Header>
                <Content>
                    {this.renderButton()}
                    {this.renderListItem()}
                </Content>
                {this.renderFooter()}
            </Container>
        );
    } else {
        return(
            <Container>
                <Header>
                    <Body>
                        <Text>Restaurant List</Text>
                    </Body>
                </Header>
                <Content>
                    <Button full onPress = {this.props.goBack}>
                        <Left>
                            <Icon name='arrow-back' onPress = {this.props.goBack}/>
                        </Left>
                        <Text onPress = {this.props.goBack}>Back to List</Text>
                    </Button>
                <RestaurantDetail />
                </Content>
                {this.renderFooter()}
            </Container>
            );
        }
    }
}

const mapStateToProps = (state) => {
  console.log(state);

  return {
      businesses: state.businesses,
      isFetching: state.isFetching,
      showDetail: state.showDetail,
      restaurant: state.restaurant,
  };
};
const mapDispatchToProps = (dispatch,ownPros) => {
  return {
      fetchAddress: ()=> {dispatch(actions.getLocation())},
      goBack: ()=> dispatch(actions.goBack())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main); 