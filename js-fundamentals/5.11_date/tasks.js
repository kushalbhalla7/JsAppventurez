"use strict";


// // Task 1: create a date

// let date1 = new Date("Febuary 20, 2012 03:12:00");
// console.log(date1);

// // let date = new Date();
// // date.setFullYear(2012, 1, 19, 3, 12)

// console.log(date);


// // Task 2: show a weekday
// let date = new Date(2012, 0, 3);

// const getWeekDay = date => {
//     let weekDays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

//     return weekDays[date.getDay()];
// }

// console.log(getWeekDay(date));



// // Task 3: european weekday
// // European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.

// let date = new Date(2012, 0, 3);

// const getLocalDay = (date) => {
//     // weekdays are starting from monday
//     let weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    
//     //return day 7 if day from date is 0
//     let day = date.getDay() == 0 ? 7 : date.getDay();
//     return `Day is ${weekDays[day-1]} and day number is ${day}`;
// }
// console.log( getLocalDay(date) );


// // Task 4: Which day of moth was many days ago
// // Create a function getDateAgo(date, days) to return the day of month days ago from the date.

// let date = new Date(2015, 0, 2);

// //function to calculate the date by doing minus days from provided date
// const getDateAgo = (date, days) => {
    
//     //calculate date by their time
//     let calculatedDate = new Date(date.getTime() - days * 24 * 3600 * 1000);
//     return calculatedDate.getDate();
// }

// // passing params to the function and getting result
// console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)


// // Task 5: Last day of month?
// // Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

// const getLastDayOfMonth = (year, month) => {

//     //checks for leap year
//     if ((year % 4 === 0 && year % 400 && year %100) && month == 1) {
//         return 29;
//     }
    
//     // Array for days count in every month
//     let days = [31, 28, 31, 30, 31, 30, 31, 30, 30, 31, 30, 31];
//     // return last day of the month
//     return days[month];
    
// }

// //passing params to function to find last of the month
// console.log(getLastDayOfMonth(2020, 1));
// console.log(getLastDayOfMonth(2021, 5));
// console.log(getLastDayOfMonth(2021, 1));



// // Task 6: How manu seconds have passed today?
// // Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

// //function that give total number of count of passed second today
// const getSecondsToday = () => {
//     // fetch today date
//     let today = new Date();
//     //return passed second today
//     return ((today.getHours() * 60) + today.getMinutes()) * 60;
// }

// //passing params to function to get passed seconds today
// console.log(getSecondsToday());


// // Task 7: How many seconds till tomorrow
// // Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

// // function that returns seconds till tomorrow
// const getSecondsToTomorrow = () => {

//     //get todays date
//     let today = new Date();

//     // return remaining seconds till tomorrow
//     return (24 * 60 * 60)
//         - ((today.getHours() * 60) + today.getMinutes()) * 60;
// }
// // passing params to function
// console.log(getSecondsToTomorrow());


// Task 8: format the relative date
// Write a function formatDate(date) that should format date as follows:

// If since date passed less than 1 second, then "right now".
// Otherwise, if since date passed less than 1 minute, then "n sec. ago".
// Otherwise, if less than an hour, then "m min. ago".
// Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.


//function that calculate and give formated result
const formatDate = (date) => {

    // difference time between now and given date
    let differenceTime = Date.now() - date.getTime();

    if (differenceTime < 1000) { // checks for differcence 1
        return 'right now';
    } else if (differenceTime < 60000) { // checks its under seconds
        return `${(differenceTime / 1000)} seconds ago`
    } else if (differenceTime < 3600000) { // checks its under minutes
        return `${(differenceTime / 60000)} minutes ago`
    } else if (differenceTime < 86400000) { // checks its under minutes
        return `${(differenceTime / 3600000)} hourse ago`
    } else {  //calculate date 
        let resultDate = new Date(new Date() - differenceTime)
        return `${'0'+resultDate.getDate()}.` +
                `${'0'+ (resultDate.getMonth() + 1)}.` + 
                `${resultDate.getFullYear()} ` +
                `${resultDate.getHours() + ":" + resultDate.getMinutes()}`
    }
}
// passing params to function 
console.log( formatDate(new Date(new Date - 5)) ); // "right now"
console.log( formatDate(new Date(new Date - 59 * 1000)) ); // "30 sec. ago"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"
console.log( formatDate(new Date(new Date - 6 * 60 * 60 * 1000)) ); // "5 hourse. ago"
// yesterday's date like 31.12.16 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );