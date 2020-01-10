import React, {useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import {Context as authContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {NavigationEvents} from 'react-navigation';

const SigninScreen = ({navigation})=>{

    const {data, signin, clearErrorMessage} = useContext(authContext);
    return  (
        <View style = {styles.container}>
            <NavigationEvents
                    onWillBlur = {()=> {clearErrorMessage()}}
            />
            <AuthForm 
            Heading = 'SignIn for Tracker'    
            onClickButton = {(email, password)=> {signin(email, password)}}
            errorData = {data.errorMessage}
            buttonTitle = 'Sign In'
            ></AuthForm>
            <NavLink
                text = 'Do not have an account? Go To Sign Up.'
                routeName = 'SignUp'
            ></NavLink>
         </View>)
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        marginBottom: 200
    }
});

SigninScreen.navigationOptions = ()=>{
    return {
        header : null,
    }
}

export default SigninScreen;