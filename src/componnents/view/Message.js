import React from 'react';
import { View,StyleSheet,Image,Text } from 'react-native'


const Message = props =>{
    console.log(JSON.stringify(props))
    const style = [];
    style.push(styles.message)
    if(props.last){
        style.push({borderBottomWidth: StyleSheet.hairlineWidth});
    }
    return(
        <View style={style}>
            <Text>
                {props.toUser}
            </Text>
            <Text>
                {props.fromUser}
            </Text>
            <Text>
                {props.message}
            </Text>
            <Text>
                {props.dateTime}
            </Text>
        </View>

    );
};

const styles = StyleSheet.create({
    message: {
      
            width:100+"%",
            borderColor: "rgb(64,64,64)",
            borderTopWidth: StyleSheet.hairlineWidth
        }
   
})


export default Message