import React, {Component} from 'react'
import {View,Text ,StyleSheet , ActivityIndicator} from 'react-native'
import { Message } from '../view';
import config from '../../config'


class Home extends Component{
  constructor(){
    super()
      this.state= {
        showActivityIndicator: true,
        messages: []
      };
  }
    componentDidMount(){

    return fetch(`${config.baseUrl}api/message`,{
      method: "GET", 
      headers:{
        Accept: "application/json",
        "Content-type": "application/json"
      }
    })
    .then((response)=>{
      console.log(response);
      return response.json();
    })
    .then((responseJson)=>{
       this.setState({messages: responseJson.data, showActivityIndicator: false});
    })
    .catch(err =>{
      console.log(err.message);
      this.setState({ showActivityIndicator: false})
    });
  }
    render(){
      

      const { messages } = this.state;

        const lastIndex = messages.length - 1;
       return(
            <View style={style.container}>
             {this.state.ActivityIndicator ?( <ActivityIndicator animating size="large" />) : null
             }
               {
                   messages.map((messages, i)=>{
                       const last = (i === lastIndex);
                       return <Message last={last} {...messages}/>
                   })
               }
            </View>
        )
    }

}

const style ={
    container: {
        width: 100+"%",
        height: 100+"%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    }
}

export default Home