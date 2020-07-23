
    function getData(){

        const date = new Date();
        const DepartingDate = new Date(document.getElementById('Departing-date').value);
        const ArrivingDate = new Date(document.getElementById('Arriving-date').value);
        const CityName= document.getElementById('City');

        /* check if the user enter a city name */
    if(CityName.value == ''){
        alert('you should enter a city name')
      
    }
  
    else{
        Client.Get_Lat_Lng_Con(CityName)
        .then(function(data){
    
            const Latitude = data.geonames[0].lat;
            const longitude = data.geonames[0].lng;
            const country = data.geonames[0].countryName;

            Client.getWeather( Latitude , longitude, date , DepartingDate) 
            .then(function(data){
               Client.UpdateUI(data , date ,  DepartingDate , ArrivingDate, country)  
            })

            Client.getPhoto(CityName); 
     
        }); 
    
    }
        }    

/* clear the form */
const clearForm = async () => {

    document.getElementById('City').value = '';
    
    document.getElementById('Departing-date').value = '';
    
    document.getElementById('Arriving-date').value = '';
}


export {getData}
export {clearForm}
