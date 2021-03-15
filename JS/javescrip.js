'use strict';


function qustBTN(x) {
  switch (x) {
  case '1': {
   let ans1 = prompt('Guess the age of Qusai ? *hint');
    if (ans1 == '24') 
    { document.getElementById('one').innerHTML = 'correct';
    }
    else{
      document.getElementById('one').innerHTML = 'wrong';
    }
    break;
  }
  case '2': 
  {
    let ans1 = prompt('what is the capital city of jordan').toUpperCase();
 if (ans1 == 'AMMAN') {
  document.getElementById('two').innerHTML = 'correct';
     }
     else{
      document.getElementById('two').innerHTML = 'wrong';
    }
    break;
  
    }

    case '3': 
    {
      let ans1 = prompt('Quasi graduated from : 1.Albalqaa   2.alahlyeh');
   if (ans1 == '1') {
    document.getElementById('three').innerHTML = 'correct';
       }
       else{
        document.getElementById('three').innerHTML = 'wrong';
      }
      break;
    
      }

      case '4': 
      {
        let ans1 = prompt('when qusai was graduated');
     if (ans1 == '2020') {
      document.getElementById('four').innerHTML = 'correct';
         }
         else{
          document.getElementById('four').innerHTML = 'wrong';
        }
        break;
      
        }

        case '5': 
        {
          let ans1 = prompt('what language android uses').toUpperCase();
       if (ans1 == 'JAVA'|| ans1=='KOTLIN') {
        document.getElementById('five').innerHTML = 'correct';
           }
           else{
            document.getElementById('five').innerHTML = 'wrong';
          }
          break;
        
          }

  }
}


