import React, { useContext } from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = ({navigation})=>{
    const {signout} = useContext(AuthContext);
    return <SafeAreaView forceInset={{ top: 'always' }}> 
        <Text style = {{fontSize : 40}}>AccountScreen</Text>
        <Spacer>
            <Button 
            title = "Sign Out"
            onPress = {()=> {signout(()=>{navigation.navigate('SignUp')})}}
            />
        </Spacer>
    </SafeAreaView>
}

const styles = StyleSheet.create({

});

export default AccountScreen;