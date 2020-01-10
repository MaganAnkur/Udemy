import React from 'react';
import {Text, StyleSheet,Button} from 'react-native';
import {SafeAreaView} from 'react-navigation';


const TrackListScreen = ({navigation})=>{

    return <SafeAreaView forceInset={{ top: 'always' }}>
        <Text style = {{fontSize : 40}}>TrackListScreen</Text>
       <Button title = "Go to Track Detail" onPress = {()=> {
           navigation.navigate('TrackDetail')
       }}></Button>
    </SafeAreaView>
}

const styles = StyleSheet.create({

});

TrackListScreen.navigationOptions = ()=>{
    return {
        header : null,
    }
}

export default TrackListScreen;