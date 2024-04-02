 export const checkValidity =(date) =>{
    let date1 = Date.now();
    date1 = new Date(date1);
    let date2 =new Date(date);
  
    if(date1<=date2)return true;

    //condition when today's date and deadline(todos) date are same
   if(date1.getDate()===date2.getDate()&&date1.getMonth()===date2.getMonth()&&date1.getFullYear()===date2.getFullYear())return true;
    return false;
    
   }
 