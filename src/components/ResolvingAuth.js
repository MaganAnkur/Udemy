import React, { useEffect, useContext } from 'react';
import {View} from 'react-native';
import {Context as authContext} from '../context/AuthContext';
import {Context as locContext} from '../context/LocationContext';

const ResolvingAuth = ({navigation}) => {

    const {tryLocalLogin} = useContext(authContext);

    useEffect(()=>{
        tryLocalLogin();
    },[])

    return <View></View>

}

export default ResolvingAuth;