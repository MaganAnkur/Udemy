import '../_mockLocation';
import React, {useEffect, useState, useContext} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Map from '../components/Map';
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location';
import {Context as LocationContext} from '../context/LocationContext';



const TrackCreateScreen = ()=>{

    //const location = useContext(LocationContext);
   // console.log(location);

    const [err, setErr] = useState(null);
    const startWatching = async ()=>{
        try {
            
            await requestPermissionsAsync();
            await watchPositionAsync({
                accuracy : Accuracy.BestForNavigation,
                timeInterval : 1000,
                distanceInterval : 10
            },(location)=>{
                //addLocation(location);
            })
        } catch (error) {
            setErr(error);
        }
    }

    useEffect(()=>{
        startWatching();
    },[]);
    

    return <SafeAreaView forceInset={{ top: 'always' }}>
        <Text style = {{fontSize : 40}}>TrackCreateScreen</Text>
        <Map></Map>
        {err ? <Text>Please enable the location</Text> : null}
    </SafeAreaView>
}

const styles = StyleSheet.create({

});

export default TrackCreateScreen;