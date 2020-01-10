import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {navigate} from '../navigationRef';




const authReducer = (state,action)=> {
    switch(action.type){
        case 'addError':
            return {...state, errorMessage : action.payload}

        case 'signin':
            return {token : action.payload, errorMessage : ''}
        
        case 'clearErrorMessage':
            return {...state, errorMessage : ''}

        case 'signout':
            return {token : null, errorMessage : ''}

        default:
            return state;


    }
}

const tryLocalLogin = (dispatch) => {
    return async ()=>{
        const token = await AsyncStorage.getItem('token');
        if(token){
            dispatch({type : 'signin', payload : token});
            navigate('TrackList');
        }
        else{
            navigate('SignUp');
        }
    }
}
const clearErrorMessage = (dispatch)=> {
    return ()=> {
        dispatch({type : 'clearErrorMessage'})
    }
}

const signup = (dispatch)=> {
    
    return async (email, password)=> {
        try{
            const response = await trackerApi.post('/signup',{email, password});
            //console.log('response.data.token')
            await AsyncStorage.setItem('token', response.data.token);

            dispatch({type : 'signin', payload : response.data.token});
            navigate('TrackList');
           
           
        }catch(err){
            console.log(err.message);
            dispatch({type : 'addError',payload : 'Something Went Wrong!'});
        }
    }
};

const signin = (dispatch)=> {
    return async (email, password)=> { 
        try{

            const response = await trackerApi.post('/signin',{email, password});
            //console.log('response.data.token')
            await AsyncStorage.setItem('token', response.data.token);

            dispatch({type : 'signin', payload : response.data.token});

            navigate('TrackList');

        }catch(err){
            dispatch({type : 'addError',payload : 'Something Went Wrong!'});
        }

    }
};

const signout = (dispatch)=> {
    return async (callback)=> {
        await AsyncStorage.removeItem('token');
        dispatch({type : 'signout'});
        if(callback){
            callback();
        }
    }
};


export const {Context, Provider} = createDataContext(
    authReducer, 
    {signin : signin, signout :signout, signup : signup, clearErrorMessage : clearErrorMessage, tryLocalLogin : tryLocalLogin}, 
    {token : '', errorMessage : ''});

