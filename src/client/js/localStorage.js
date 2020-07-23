
let  DataSave = [];
let list = [];
window.onload = function(){

   if(JSON.parse(localStorage.getItem('values')) != null && JSON.parse(localStorage.getItem('list')) != null){
      DataSave = JSON.parse(localStorage.getItem('values'))
      list = JSON.parse(localStorage.getItem('list'))
      disply()
      displayList()
   }
 
};

/*Challenge:  Use Local Storage to save the data so that when they close, then revisit the page, their information is still there*/ 
const saveLocal = ()=>{

  const DepartingDate = new Date(document.getElementById('Departing-date').value);
  const ArrivingDate = new Date(document.getElementById('Arriving-date').value);
  const fullDepart =`${DepartingDate.getDate()}/${DepartingDate.getMonth()+1}/${DepartingDate.getFullYear()}`;
  const fullArrivie = `${ArrivingDate.getDate()}/${ArrivingDate.getMonth()+1}/${ArrivingDate.getFullYear()}`;
  const name = document.getElementById('City').value;
    const obj = {
       city: name,
       startD: fullDepart,
       endD: fullArrivie
    }
   
    DataSave.push(obj)
     if(localStorage.getItem('values')== null){
        localStorage.setItem('values', JSON.stringify(DataSave))
     }
     else{
      localStorage.setItem('values', JSON.stringify(DataSave))
     }

    disply()
    alert('your trip saved successfully')
      
   }

   /* print data in the browser*/
   const disply = ()=>{
    const table = document.getElementById('table-body');
    table.innerHTML="";
    for(let i=0; i<DataSave.length; i++){
      table.innerHTML+=
      `<tr>
      <td class="Tbody">${DataSave[i].city}</td>
      <td class="Tbody">${DataSave[i].startD}</td>
      <td class="Tbody">${DataSave[i].endD}</td>
      <td class="Tbody"><button type="button" class="btn btn-danger delteteItem" onclick="return Client.removeItem(${i})">delete</button></td>
      </tr>`
    }
    }

    /* remove data from local storage and browser*/
   const removeItem = (index)=>{
      DataSave.splice(index, 1);
      if(localStorage.getItem('values')== null){
         localStorage.setItem('values', JSON.stringify(DataSave))
      }
      else{
       localStorage.setItem('values', JSON.stringify(DataSave))
      }
      disply()
      alert('your trip delete successfully')

   }

/* Challenge: Allow the user to add a todo list and/or packing list for their trip. */
const AddToDo = ()=> {
   
   const inputField = document.getElementById('list-field').value;
   if(inputField == '')
   {
       alert("Enter a text")
   }

   else{
       list.push(inputField);
       if(localStorage.getItem("list") == null){
           localStorage.setItem('list', JSON.stringify(list))
        }
        else{
         localStorage.setItem('list', JSON.stringify(list))
        }
       displayList()
   }
}

const displayList = ()=>{
   const lists = document.getElementById('list');
   lists.innerHTML="";
   for(let i=0; i<list.length; i++){
       lists.innerHTML+=
       `<center>
       <div class="list-Content black-T">${list[i]}
       <a id="done" onclick="return Client.check(${i})">
       <i class='fas fa-check'></i></>
       <a id="trash" onclick="return Client.trash(${i})">
       <i class='fas fa-trash-alt'></i></>
       </div>
       </center>`
   }
}

/* delete toDo item from local storage and browser*/
const trash = (index)=>{
   console.log("trash")
   list.splice(index, 1)
   if(localStorage.getItem("list") == null){
       localStorage.setItem('list', JSON.stringify(list))
    }
    else{
     localStorage.setItem('list', JSON.stringify(list))
    }
   displayList();
}

/* make check if the item complete*/
const check = (index)=>{
   if(list[index].includes("<del>")){
   list[index] = list[index].replace("<del>","")
   list[index] = list[index].replace("</del>","")
   }

   else{
       list[index] = "<del>"+list[index]+"</del>"
   }
   if(localStorage.getItem("list") == null){
       localStorage.setItem('list', JSON.stringify(list))
    }
    else{
     localStorage.setItem('list', JSON.stringify(list))
    }

   displayList()
}

export {saveLocal}
export {removeItem}
export {AddToDo}
export {trash}
export {check}