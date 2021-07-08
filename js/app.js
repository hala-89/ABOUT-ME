
  'use strict' 

let userName=prompt('what\'s your name?');

console.log( 'hello' , userName);

alert('welcom '+ userName + ' lets go  play my game' );
 
let score=0;

////////////////////////////


function question1()
{
  let firstone=prompt('is im  amum?');


 firstone=firstone.toLowerCase();

if (firstone=="yes" || firstone=="y" ) {

  console.log( firstone+" that true");

     alert( userName + "YOUR answer is yes");
      score++;
 } else{
   
    console.log(' oh thats wrong');
   
      alert( userName + "YOUR answer is false");

 }
}
question1()
  




//////////////////////////////////


function question2()
{
   let secandone=prompt('is am  like ice?');

secandone=secandone.toLowerCase();

if (secandone=="yes" || secandone=="y" ) {

  console.log( secandone+"  that true");

     alert( userName + "YOUR answer is yes");
        score++;
 } else{
   
    console.log(' oh thas wrong');
   
      alert( userName + "YOUR answer is false");

 }
}
 question2();

   
 


//////////////////////////////////



function question3()
{
  let third=prompt('is am   have car ?');

third=third.toLowerCase();

if (third=="yes" || third=="y" ) {

  console.log( third+"  that true");

     alert( userName + "YOUR answer is yes");
              score++; 
    } else{
   
    console.log( ' oh thas wrong');
   
   alert( userName + 'YOUR answer is false') ;}

}question3()
 

   ///////////////////////

   
function question4(){
  let foure=prompt('is am  like read book?');

foure=foure.toLowerCase();

if (foure=="yes" || foure=="y" ) {

  console.log( foure+"  that true");

     alert( userName + "YOUR answer is yes");
        score++;
    } else{
   
    console.log(' oh thas wrong');
   
      alert( userName + "YOUR answer is false");}
}question4();
   



      /////////////////////////////
    
    
    
function question5()
{
  let five=prompt('is am live in acity ?');

      five=five.toLowerCase();

if (five=="yes" || five=="y" ) {

  console.log( five+"  that true");

     alert( userName + "YOUR answer is yes");
      score++;
    } else{
   
    console.log(' oh thas wrong');
   
      alert( userName + "YOUR answer is false");}
}question5();
    
     

      ////////////////////////


function question6()
{
  let guessNumber=Number( prompt('pleas guse anumber between one and 8 you have 4 entries'));

     
          var i;
         for(i=0;i<4;i++){

          if (guessNumber >5 ) {
          
            alert ('too high');
          
          guessNumber=Number (prompt('pleas guse anumber between one and 8 you have 4 entries '));
             
        } else if (guessNumber < 5 ) {
          
            alert ('too low');
            guessNumber=Number (prompt('pleas guse anumber between one and 8 you have 4 entries '));
          }
         else if (guessNumber==5){  

          alert  ('your answer is true');
          score++;
          break;
         }
           else {
                

             alert (' plz  try  agein ');

             guessNumber=Number (prompt('pleas guse anumber between one and 8 you have 4entries '));


           }     }
}
question6()
      
          

 //////////////////////

function question7()
{
  let books=[ 'math',  'islamic ',' software ', 'english'];
   
 let favbooks;


for(let i=0; i<6; i++){
  
  favbooks=prompt('what is my faviorte books? ');
      favbooks=favbooks.toLowerCase();
     
      
      for (let j = 0; j <books.length ; j++) {
           

        if (favbooks===books[j])
        {

                    alert('thanks your answer is true ' +books );
            score++;

            i=7;  }

}  if (i!=7){
    alert(' sorry your answer is wrong  try again');
}
}
}
question7();
  


 //////////
alert(`you have a score of ${score} /7`);
alert('thanks for plaing ' + userName);

//hello