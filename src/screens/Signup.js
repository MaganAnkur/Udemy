import React, {useContext } from 'react';
import {View,StyleSheet} from 'react-native';
import {Context as authContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {NavigationEvents} from 'react-navigation';

const SignupScreen = ({navigation})=>{

    const {data, signup, clearErrorMessage} = useContext(authContext);
   
       
    return  (
        
            <View style = {styles.container}>
                <NavigationEvents
                    onWillBlur = {()=> {clearErrorMessage()}}
                />
                <AuthForm 
                    Heading = 'SignUp for Tracker'    
                    onClickButton = {(email, password)=> {signup(email, password)}}
                    errorData = {data.errorMessage}
                    linkText = 'Already have an account? Login Instead.'
                    buttonTitle = 'Sign Up'
                >
                </AuthForm>
                <NavLink
                    text = 'Already have an account? Login Instead!'
                    routeName = 'SignIn'
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

SignupScreen.navigationOptions = ()=>{
    return {
        header : null,
    }
}

export default SignupScreen;