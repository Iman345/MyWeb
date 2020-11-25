

fetch('https://api.covid19tracking.narrativa.com/api/2020-03-22/country/southafrica')
.then(function(response) {
  console.log(`status: ${response.status}`);
  console.dir(response.body);
  return response.json() 
})
.then(function(myJson) {
 console.log(
    `Date: ${myJson.total.date} 
    Total Deaths: ${myJson.total.today_deaths} 
    Recovered: ${myJson.total.today_new_recovered} 
    New Cases: ${myJson.total.today_new_confirmed}`
  );
  let dates=myJson.total.date;
  return myJson
})
.then(console.log(dates))

