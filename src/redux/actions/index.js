import axios from "axios"

export const GET_COUNTRIES = "GET_COUNTRIES"
export const GET_BY_NAME = "GET_BY_NAME"
export const GET_BY_ID = "GET_BY_ID"
export const GET_ACTIVITIES = "GET_ACTIVITIES"

export function getCountries(){
    return async function(dispatch){
        const response = await axios("http://localhost:3001/countries")   //revisar
    
        return dispatch({
            type:"GET_COUNTRIES",     //tipo de accion
            payload: response.data,
        });
    }
}

export function getByName(name){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/countries/?name=${name}`);   //revisar
    
        return dispatch({
            type:"GET_BY_NAME",     //tipo de accion
            payload: response.data,
        });
    }
}

export function getById(id){
    return async function(dispatch){
        try{
            const response = await axios(`http://localhost:3001/countries/${id}`);   //revisar
    
        return dispatch({
            type:"GET_BY_ID",     //tipo de accion
            payload: response.data,
        });
        }catch (error){
            console.error("Error fetching country by ID:", error)
        }
        
    }
}

export function postActivities(payload) {
    return async function (dispatch) {
      try {
        console.log("Payload:", payload);

        const response = await axios.post("http://localhost:3001/activity", payload);
        console.log(response);
        return response;
      } catch (error) {
        console.error(error);
        // Handle the error appropriately
      }
    };
  }


  export function getActivitiesInCountries() {
    return async function (dispatch) {
      try {
        const response = await axios.get("http://localhost:3001/activity");
  
        const activities = response.data.map((activity) => ({
          // sanitize and validate the response data
          id: activity.id,
          name: activity.name,
          difficulty:activity.difficulty,
          duration:activity.duration,
          season:activity.season,
        


          // add other necessary properties
        }));
  
        console.log("Response from action:", activities);
  
        return dispatch({
          type: GET_ACTIVITIES,
          payload: activities,
        });
      } catch (error) {
        console.error("Error fetching activities:", error);
        // Handle the error appropriately
      }
    };
  }
  