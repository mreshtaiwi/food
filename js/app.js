// // // alert('hello');
// // // console.log('this is from js file');
// // /* this is

// //  a comment */
// // var userName = 'ethar'; //string
// // var age = 35; //number
// // var loveCoding = true; //boolean

// // var age = '35'; //string

// // var titleName = '<h1> Food Lovers </h1>';
// // var salary = 500 + 500;
// // // console.log(salary);

// // // alert('welcome ' - salary);

// // // what if the salary is less that 1000 
// // // thank you 
// // // what if the salary is more than 1000 
// // // amazing

// // //conditions
// // // if(salary < 1000 )
// // // {
// // //   console.log('thank you');
// // // }else if(salary > 1000)
// // // {
// // //   console.log('amazing');
// // // }else if(salary = 1000){
// // //   console.log('cool');
// // // }

// // // if(salary == 1000 )
// // // {
// // //   console.log('thank you');
// // // }
// // // else if(salary >= 1000)
// // // {
// // //   console.log('amazing');
// // // }
// // // else if(salary <= 1000){
// // //   console.log('cool');
// // // }

// // // 3 > 3 false 3 >= 3 true
// // // 3 < 3 false 3 <= 3 true


// // // logical operators
// // //&& and
// // //|| or
// // //! not

// // //f && t >> f
// // //t && f >> f
// // //f && f >> f
// // //t && t >> t


// // //t || t >> t
// // //t || f >> t
// // //f || t >> t 
// // //f || f >> f

// // //f && f >>> f

// // //t || f >>> t
// // // if(salary === 1000 || userName === 'shihab'){
// // //   // console.log('true');
// // //   alert('true');
// // // }else{
// // //   console.log('false');
// // // }

// // //1000 !== 1000
// // // if(salary !== 1000){
// // //   console.log('true');
// // // }else{
// // //   console.log('false');
// // // }
// // //ask the user to enter his/her age

// // // var userAge = prompt('please enter your age?');
// // // console.log('user age ' + userAge);

// // var x = prompt('please enter your name');
// // var x;
// // console.log(x);

// // //ask the user a type of food ( mansaf , shawarmah).
// // // if the user enter mansaf print a mansaf image

// // //if the user enter shawarmah print a shawarmah image

// var foodType = prompt('please enter a food type (mansaf , shawarmah)?');

// while (foodType !== 'mansaf' && foodType !== 'shawarmah') {
//   foodType = prompt('please enter a food type (mansaf , shawarmah)?');
// }
// console.log(foodType);
// // // console.log('foodType datatype ' 
// // // + typeof foodType);
// var mealsNumber = prompt('how many meals do you want to order?');

// for (var i = 1; i <= mealsNumber; i++) {

//   if (foodType == 'mansaf') {
//     var image = '<img src="https://www.experiencejordan.com/wp-content/uploads/2016/10/Blog-Headers2-1.jpg" alt= "mansaf"/>';
//     //create mansaf image
//     document.write(image);

//   } else if (foodType == 'shawarmah') {
//     //create shawarmah image
//     var image2 = '<img src="img/shawarmah.jpg" alt= "shawarmah"/>';
//     document.write(image2);
//   }
// }


// // var mealsNumber = prompt('please enter how many meals do you want to order?');

// // if(mealsNumber === 3){
// //   console.log('ok i can do that');
// // }else {
// //   console.log("sorry we can't do that");
// // }

// // var num = Number(prompt('please enter the number for the iterations ?'));

// // var startPoint = Number(prompt('please enter a start point'));

// //num = 100
// //startPoint = 1
// //t
// //i inside the loop 1
// //0
// //i inside the loop 0
// //-1
// //i inside the loop -1
// //-2

// // for(var i= startPoint;i<=num;i--){
// //   console.log('i inside the loop ',i);
// // }
// // // console.log('i outside the loop ',i)

// // alert('hello');
// // console.log('this is from js file');
// /* this is

//  a comment */
// var userName = 'ethar'; //string
// var age = 35; //number
// var loveCoding = true; //boolean

// var age = '35'; //string

// var titleName = '<h1> Food Lovers </h1>';
// var salary = 500 + 500;
// // console.log(salary);

// // alert('welcome ' - salary);

// // what if the salary is less that 1000 
// // thank you 
// // what if the salary is more than 1000 
// // amazing

// //conditions
// // if(salary < 1000 )
// // {
// //   console.log('thank you');
// // }else if(salary > 1000)
// // {
// //   console.log('amazing');
// // }else if(salary = 1000){
// //   console.log('cool');
// // }

// // if(salary == 1000 )
// // {
// //   console.log('thank you');
// // }
// // else if(salary >= 1000)
// // {
// //   console.log('amazing');
// // }
// // else if(salary <= 1000){
// //   console.log('cool');
// // }

// // 3 > 3 false 3 >= 3 true
// // 3 < 3 false 3 <= 3 true


// // logical operators
// //&& and
// //|| or
// //! not

// //f && t >> f
// //t && f >> f
// //f && f >> f
// //t && t >> t


// //t || t >> t
// //t || f >> t
// //f || t >> t 
// //f || f >> f

// // if(salary === 10000 && userName == 'shihab'){
// //   console.log('true');
// // }else{
// //   console.log('false');
// // }

// //1000 !== 1000
// if(salary !== 1000){
//   console.log('true');
// }else{
//   console.log('false');
// }
// //ask the user to enter his/her age

// // var userAge = prompt('please enter your age?');
// // console.log('user age ' + userAge);

// // var x = alert('please enter your name');
// // var x;
// // console.log(x);

// //ask the user a type of food ( mansaf , shawarmah).
// // if the user enter mansaf print a mansaf image

// //if the user enter shawarmah print a shawarmah image

// var foodType = prompt('please enter a food type (mansaf , shawarmah)?')

// if(foodType =='mansaf')
// {
//   var image = '<img src="https://www.experiencejordan.com/wp-content/uploads/2016/10/Blog-Headers2-1.jpg" alt= "mansaf"/>';
//   //create mansaf image
//   document.write(image);

// }else if(foodType =='shawarmah'){
//   //create shawarmah image
//   var image2 = '<img src="img/shawarmah.jpg" alt= "shawarmah"/>';
//   document.write(image2);
// }



//functions 
// var ask1 = prompt('do you like javascript?');

// while(ask1 !== 'yes'){
//   ask1 = prompt('do you like javascript?');
// }

// response();

// // console.log('i outside the loop ',i)
// alert('hello');
// console.log('this is from js file');
/* this is


// var ask2 = prompt('do you like python?');

// while(ask2 !== 'yes'){
//   ask2 = prompt('do you like python?');
// }


//function decleration 

// function response(){
// alert('i knew that');
// alert('do you know that it is a heigh level language');
// alert('the best place to learn it is ASAC');
// }

// var ask1 = prompt('do you like javascript ?');

// var ask2 = prompt('do you like python ?');


// var answer1 = askUser('java');
// console.log(answer1);

// function askUser(pLanguage){
//   var ask = prompt('do you like ' + pLanguage + '?');
//   return ask;
// }


// askUser('python');


// function expression
var askUser = function (pLanguage) {
  var q = prompt('do you like ' + pLanguage + '?');
  return ask;
}


// askUser('javascript');
// askUser('python');



function sum(num1,num2){
  var result = num1+ num2;
  console.log(result);
  return result;
}

function extra(){
  var extraGrades = 5 + sum(5,8);
  console.log(extraGrades);
}

extra();

*/