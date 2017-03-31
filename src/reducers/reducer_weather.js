import {FETCH_WEATHER} from '../actions/index';

export default function(state=[], action){

    // don't mutate/manipulate the state.  return a new instance of state
    // ie doing state.push() would add a new entry to the existing state array
    switch (action.type){
        case FETCH_WEATHER:
            //return state.concat([ action.payload.data ]);
            return [action.payload.data, ...state];
    }
    return state;
}