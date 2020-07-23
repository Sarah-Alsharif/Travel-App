/* get the Latitude and longitude from Geonames*/
const Get_Lat_Lng_Con = async (CityName)=> {

    const city = CityName.value;
    const response = await fetch(`http://api.geonames.org/searchJSON?q=${city}&username=sarah_n`);

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

  const API_Key = '152157fee84045f9a23ad35ac9b2a511';
  const cureent = `http://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${API_Key}`;
  const forset = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${API_Key}`;
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
  const myKey = `17531871-7f617e09bf1e893c9d519b756`

  const response = await fetch(`https://pixabay.com/api/?key=${myKey}&q=${CityName}`);

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


export {Get_Lat_Lng_Con}
export {getWeather}
export {getPhoto}

