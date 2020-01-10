import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import Spacer from './Spacer';


const SignInUpForm = ({Heading, onClickButton, errorData, buttonTitle})=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <>
        <Spacer>
            <Text h3>{Heading}</Text>
        </Spacer>
        <Input 
            label = 'Email'
            onChangeText = {(newEmail)=> {setEmail(newEmail);}}
            value = {email}
            autoCapitalize = "none"
            autoCorrect = {false}
        ></Input>
        <Spacer/>
        <Input 
            secureTextEntry
            label = 'Password'
            onChangeText = {(newPassword)=> {setPassword(newPassword);}}
            value = {password}
        ></Input>
        {errorData ? <Text style = { styles.errorText}>{errorData}</Text> : null}
        <Spacer>
            <Button title = {buttonTitle} onPress = {()=> {
                onClickButton(email, password)
                
            }}></Button>
        </Spacer>        
    </>
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        marginBottom: 200
    },
    errorText: {
        fontSize : 16,
        marginTop : 15,
        color : 'red'
    }
});


export default SignInUpForm;