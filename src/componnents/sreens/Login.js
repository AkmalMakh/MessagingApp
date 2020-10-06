import React, {Component} from 'react'
import {View,Text ,StyleSheet , ActivityIndicator, TextInput} from 'react-native'
import { Message } from '../view';
import config from '../../config'

 
class Login extends Component{
  constructor(){
    super()
     
  }
//     componentDidMount(){

//     return fetch(`${config.baseUrl}api/message`,{
//       method: "GET", 
//       headers:{
//         Accept: "application/json",
//         "Content-type": "application/json"
//       }
//     })
//     .then((response)=>{
//       console.log(response);
//       return response.json();
//     })
//     .then((responseJson)=>{
//        this.setState({messages: responseJson.data, showActivityIndicator: false});
//     })
//     .catch(err =>{
//       console.log(err.message);
//       this.setState({ showActivityIndicator: false})
//     });
//   }
    render(){
      

      
       return(
            <View style={style.container}>
             
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

export default Login