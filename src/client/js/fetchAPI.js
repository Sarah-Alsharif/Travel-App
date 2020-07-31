import Axios from "axios";

/* get the Latitude and longitude from Geonames*/
const Get_Lat_Lng_Con = async (CityName)=> {

  const {User_Name} = await get_Keys();
  console.log(User_Name)
    const city = CityName.value;
    const response = await fetch(`http://api.geonames.org/searchJSON?q=${city}&username=${User_Name}`);

    try {
           const data = await response.json();
            return data;
        }
          catch(error){
          console.log("error" , error)
          }
}

/* get the weather from Weatherbit API */
const getWeather = async (lat , lng , date, DepartingDate)=> {

 const {Weatherbit_Key} = await get_Keys();
  const cureent = `http://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${Weatherbit_Key}`;
  const forset = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${Weatherbit_Key}`;
  let response =  await fetch(cureent);

  if(DepartingDate.getDate() <= date.getDate() +6 )
  {
        console.log('in the week');
        response = await fetch(cureent)
  }

  else{ 
      console.log('after the week');
       response = await fetch(forset)
  };

  try {
      const data = await response.json();
      console.log(data);
      return data;
  }

  catch(error){
      console.log("error" , error)
  }
}


/* get the image from API */
const getPhoto = async (city )=> {
  const CityName = city.value;
  const {Pixabay_Key} = await get_Keys();
  const response = await fetch(`https://pixabay.com/api/?key=${Pixabay_Key}&q=${CityName}`);

  try {
         const data = await response.json();
         /* check if the image found ? */
         if(data.hits.length == 0){
          alert("the city not found")
          document.getElementById('photoR').alt ='sorry the image not found';
          document.getElementById('photoR').src = "";
         }

         else{
          document.getElementById('photoR').src = data.hits[0].webformatURL;
         }
         
      }
        catch(error){
        console.log("error" , error)
        }

}

/* get the keys from server*/
async function get_Keys() {
	try {
    
    const My_keys = await Axios.get('http://localhost:3001/Keys');
    const {User_Name , Weatherbit_Key , Pixabay_Key} = My_keys.data;
    return {
      User_Name , 
      Weatherbit_Key , 
      Pixabay_Key

    }
  
	} catch (error) {
		console.log(error)	
	}
}



export {get_Keys}
export {Get_Lat_Lng_Con}
export {getWeather}
export {getPhoto}

