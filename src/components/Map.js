import React, {useState, useEffect, useContext} from 'react';
import MapView, { Polyline } from 'react-native-maps';
import {StyleSheet} from 'react-native';
import * as Location from 'expo-location';
import {Context as LocationContext} from '../context/LocationContext';


const Map = ()=>{

//const data = useContext(LocationContext);
//console.log(data);

    return (
    <MapView style = {styles.map} initialRegion = {{
        latitude : 37.33233,
        longitude : -122.03121,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01}}>
       


    </MapView>);
}

const styles = StyleSheet.create({
    map : {
        height : 500
    }
});

export default Map;