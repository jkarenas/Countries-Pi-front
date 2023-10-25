import { GET_COUNTRIES, GET_BY_NAME, GET_BY_ID , GET_ACTIVITIES} from "../actions"


let initialState = {allCountries:[],countriesCopy:[],detail:[],getActivitiesInCountries:[]}      

function rootReducer(state = initialState,action){                     //state parameter represents the current state of the app
    switch(action.type){                                               //action parameter represents the action being dispatch 

        case GET_COUNTRIES:
        return{
            ...state,                                         
            allCountries: action.payload,
            countriesCopy: action.payload
        };

        case GET_BY_NAME:
        return {
            ...state,
            allCountries:action.payload,
        };

        case GET_BY_ID:
        return {
            ...state,
            detail:action.payload,
        }

        case GET_ACTIVITIES:
            return {
                ...state,
                getActivitiesInCountries:action.payload,
            }


        default:
            return state
    }
}

export default rootReducer