'use strict';


function qustBTN(x) {
  switch (x) {
  case '1': {
    let ans1 = prompt('Qusai AGE is 24 ? (YES,Y) , (NO,N)').toUpperCase();
    if (ans1 == 'Y') 
    { document.getElementById('one').innerHTML = 'correct';
    }
    else if (ans1 == 'YES') {
      document.getElementById('one').innerHTML = 'correct';
    }
    else{
      document.getElementById('one').innerHTML = 'wrong';
    }
    break;
  }
  case '2':
  {
    let ans1 = prompt('The capital of jordan is Irbid ? (YES,Y) , (NO,N)').toUpperCase();
    if (ans1 == 'N') {
      document.getElementById('two').innerHTML = 'correct';
    }
    else if (ans1 == 'NO') {
      document.getElementById('two').innerHTML = 'correct';
    }
    else{
      document.getElementById('two').innerHTML = 'wrong';
    }
    break;

  }

  case '3':
  {
    let ans1 = prompt('Quasi graduated from a university located in alsalt ? (YES,Y) , (NO,N) ').toUpperCase();
    if (ans1 == 'Y') {
      document.getElementById('three').innerHTML = 'correct';
    }
    else if (ans1 == 'YES') {
      document.getElementById('three').innerHTML = 'correct';
    }
    else{
      document.getElementById('three').innerHTML = 'wrong';
    }
    break;

  }

  case '4':
  {
    let ans1 = prompt('He gradueated at Covid-19 year ? (YES,Y) , (NO,N)').toUpperCase();
    if (ans1 == 'Y') {
      document.getElementById('four').innerHTML = 'correct';
    }
    else if (ans1 == 'YES') {
      document.getElementById('four').innerHTML = 'correct';
    }
    else{
      document.getElementById('four').innerHTML = 'wrong';
    }
    break;

  }

  case '5':
  {
    let ans1 = prompt('Android use JAVA and KOTLIN ? (YES,Y) ,(NO,N) ').toUpperCase();
    if (ans1 == 'Y') {
      document.getElementById('five').innerHTML = 'correct';
    }
    else if (ans1 == 'YES') {
      document.getElementById('five').innerHTML = 'correct';
    }
    else{
      document.getElementById('five').innerHTML = 'wrong';
    }
    break;

  }

  }
}



