import createDataContext from './createDataContext';

const locationReducer = (state,action) =>{
    switch (action.type){
        case 'addCurrentLocation':
            return {...state, currentLocation : action.payload}

        default :
        return state;
    }
};


const startRecording = (dispatch)=>{};
const stopRecording = (dispatch)=>{};
const addLocation = (dispatch)=>{

    return (location)=>{
        dispatch({type : 'addCurrentLocation', payload :location})
    }
};


 export const {Context, Provider} = createDataContext(
    locationReducer, 
    {startRecording : startRecording,stopRecording : stopRecording, addLocation : addLocation}, 
    {recording : false, locations : [], currentLocation : null});