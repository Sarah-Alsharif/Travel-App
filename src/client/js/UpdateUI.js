
const UpdateUI = (data , date ,  DepartingDate , ArrivingDate , country) =>{

   const tatle = document.getElementById('trip-planner');
   const fullDepart =`${DepartingDate.getDate()}/${DepartingDate.getMonth()+1}/${DepartingDate.getFullYear()}`;
   const fullArrivie = `${ArrivingDate.getDate()}/${ArrivingDate.getMonth()+1}/${ArrivingDate.getFullYear()}`;
   const resultData =  document.getElementById('resultTitle');
   const trip = document.getElementById('trip');
   const temp =  document.getElementById('temp');
   const Departing = document.getElementById('Departing');
   const Arriving = document.getElementById('Arriving');
   const tripLenght = document.getElementById('tripLenght');
   const cloud =  document.getElementById('cloud');

   /* challenge :Add end date and display length of trip*/
   const lenght = ArrivingDate.getDate() - DepartingDate.getDate() + 1;
      
     tatle.innerHTML ="My trip planner"
 
     if(DepartingDate.getDate() <= date.getDate() + 6){
        
        resultData.innerHTML= "This is a Current date ";
        trip.innerHTML= `My trip to : <span class="style">${data.data[0].city_name},
        ${country}</span>`;
       temp.innerHTML= `The temprature is : <span class="style">${data.data[0].app_temp}</span>`;
      
     }
     else{
        resultData.innerHTML= "This is a forecast date";
        trip.innerHTML= `My Trip to : <span class="style">${data.city_name},${country}<span>`;
        temp.innerHTML= `The max temprature is : <span class="style"> ${data.data[0].app_max_temp}</span><br>
        The min temprature is : <span class="style"> ${data.data[0].app_min_temp}<span>`;
       
     }

     Departing.innerHTML= `Departing :<span class="style"> ${fullDepart}</span>`;
     Arriving.innerHTML= `Arriving : <span class="style"> ${fullArrivie}</span> `;
     tripLenght.innerHTML = `My trip lasts for : <span class="style">${lenght} days </span>`;
     cloud.innerHTML = `The clouds is : <span class="style">${data.data[0].clouds}, 
      ${data.data[0].weather.description}</span>`;

      document.getElementById('save-two').style.display = "block";
      document.getElementById('addTrip').style.display = "block";
      document.getElementById('addToDo').style.display = "block";
    
  }

  export {UpdateUI}