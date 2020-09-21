
/*let marg = 50;
let topmarg=10;
let vizArea=d3.select('#Viz');
let xScale=d3.scaleLinear().domain([0,100]).range([0,500]);
let yScale=d3.scaleLinear().domain([0,100]).range([500,0]);
let playdata=[
    {x:10, y:20},
    {x:40, y:90},
    {x:80, y:50},
]

vizArea
.append('g')
.attr("transform", 'translate(50,10)')
.call(d3.axisLeft(yScale));

vizArea
.append('g')
.attr("transform", 'translate(50,500)')
.call(d3.axisBottom(xScale));

vizArea
.selectAll('dots')
.data(playdata)
.enter()
.append("circle")
.attr("cx", function (d){
    return xScale(d.x);
})
.attr("r", 7);



/*vizArea
.append("circle")
.attr("cx", xScale(10))
.attr("cy", 100)
.attr("r", 40)
.style('fill', "pink");

vizArea
.append("circle")
.attr("cx", xScale(50))
.attr("cy", 100)
.attr("r", 40)
.style('fill', "pink");

vizArea
.append("circle")
.attr("cx", xScale(75))
.attr("cy", 100)
.attr("r", 40)
.style('fill', "pink");
*/


/*fetch('https://api.quotable.io/random')
.then(res => res.json())
.then(quote => {
  console.log(`${quote.content} —${quote.author}`)
  handlequote(quote)
})

const handlequote = (quoteDetails) => {
    document.querySelector("p").innerText = quoteDetails.content+"-"+ quoteDetails.author;
    };
*/
/*
const coinapi= 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05';
document.addEventListener("DOMContentLoaded", function(coins){
fetch(coinapi)

.then(function(response) {return response.json();})
then(function(coindata){
    var pData = parseData(coindata);
    linegraph(pData);
})
  .catch(function(err){console.log(error);})  
  console.log(coindata);
});



function parseData(coindata){
    var arr=[];
    for (var i in coindata.bpi ){
        arr.push({ date : new Date(i),
            value: +data.bpi[i]

        });
    }
    return arr
}

function linegraph(coindata){
   
 var margin={top:20, right:20, bottom:30, left:50};

var Width=600;

var Height=600;

var graphwidth = Width-margin.left-margin.right;
var graphheight = Height- margin.top-margin.bottom;

var vizArea=d3.select('#Viz');

vizArea
.attr("width", Width)
.attr("height", Height);
vizArea
.append(g)
.attr("transform", "translate("+ margin.left+","+margin.top+")");

var xScale=d3.scaleTime().rangeRound([0, graphwidth]);
var yScale=d3.scaleTime().rangeRound([graphheight, 0]);


let drawlines=d3.line()
.xScale(function(d){return xScale(d.date)})
.yScale(function(d){return yScale(d.value)})
xScale.domain(d3.extent(coindata, function(d){return d.date}));
yScale.domain(d3.extent(coindata, function(d){return d.value}));

g.append("g")
.attr("transform", "translate(0,"+ graphheight+")")
.call(d3.axisBotton(xScale))
.select(".domain")
.remove();

g.append("g")
.call(d3.axisLeft(yScale))
.append("text")
.attr("fill", "#000")
.attr("y", 6)
.attr("dy", "0.71em")
.attr("text-anchor", "end")
.text("Price (Dollars)");


g.append("path")
.datum(data)
.attr("stroke", "pink")
.attr ("fill", "none")
.attr("stroke-lingejoin","round")
.attr("stroke-linecap", "round")
.attr("stroke-width", 2)
.attr("d", line)
}
*/


/*const api= 'https://api.coindesk.com/v1/bpi/historical/close.json'

async function getBpi(){
    const response = await fetch(api);
    const coindata= await response.json();
    const {bpi}= coindata;
    console.log(bpi);
}
getBpi();
*/

/*fetch("https://api.covid19api.com/total/country/south-africa/status/confirmed")
  .then(response => response.text())
  .then(result => console.log(result))
  
  .catch(error => console.log('error', error));

  
  const api= "https://api.covid19api.com/total/country/south-africa/status/confirmed"

*/


/*fetch('https://api.apify.com/v2/datasets/FIbyK6uHUntt2kNy3/items?format=json&clean=1')
.then(res => res.json())
.then(data => {
  console.log(`${data.name} —${data.casesReported}`)
   console.log(data);
})*/

/*const frienddata = [
    { name: 'Iman', height: 5 },
    { name: 'Nadia', height: 5.7},
    { name: 'Tashalia', height: 5.3 },
    { name: 'Amber', height: 5.4 },
    { name: 'Mark', height: 5.9},
    { name: 'Johnny', score: 6},
    
  ];
  
  const width = 900;
  const height = 450;
  const margin = { top: 50, bottom: 50, left: 50, right: 50 };
  
  const viz = d3.select('#container')
    .append('viz')
    .attr('width', width - margin.left - margin.right)
    .attr('height', height - margin.top - margin.bottom)
    .attr("viewBox", [0, 0, width, height]);
  
  const xScale = d3.scaleBand()
    .domain(d3.range(frienddata.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)
  
  const yScale = d3.scaleLinear()
    .domain([4, 7])
    .range([height - margin.bottom, margin.top])
  
  svg
    .append("g")
    .attr("fill", 'pink')
    .selectAll("rect")
    .data(frienddata.sort((a, b) => d3.descending(a.height, b.height)))
    .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", d => y(d.height))
      .attr('title', (d) => d.height)
      .attr("class", "rect")
      .attr("height", d => y(0) - y(d.score))
      .attr("width", xScale.bandwidth());

      
function xAxis(g) {
    g.attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale).tickFormat(i => frienddata[i].name))
      .attr("font-size", '20px')
  }
  
  function yAxis(g) {
    g.attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale).ticks(null, frienddata.format))
      .attr("font-size", '20px')
  }
  

  
  svg.append("g").call(xAxis);
  svg.append("g").call(yAxis);
  svg.node();
  */

 var svg = d3.select("#Viz")
  .append("svg")
    .attr("width", 1200)
    .attr("height", 1000)
var y = d3.scaleLinear()
    .domain([5, 6])         
    .range([290, 10]);       
svg
  .append("g")
  .attr("transform", "translate(50,0)")     
   .call(d3.axisLeft(y));var x = d3.scaleBand()
    .domain(["Iman", "Tashalia", "Nadia", "Amber", "Lucas"])      
    .range([100, 500])                      
    
    .padding([0.8])
svg
  .append("g")
  .attr("transform", "translate(0,290)")     
  
  .call(d3.axisBottom(x));


svg
  .append("rect")
    .attr("x", x("Iman") )
    .attr("y",270)
    .attr("height", 20)
    .attr("width", x.bandwidth() )
    .style("fill", "Pink")
    .style("opacity", 0.5)
svg
  .append("rect")
    .attr("x", x("Tashalia") )
    .attr("y",220)
    .attr("height", 70)
    .attr("width", x.bandwidth() )
    .style("fill", "Pink")
    .style("opacity", 0.5)  
svg
.append("rect")
    .attr("x", x("Nadia") )
    .attr("y",100)
    .attr("height", 190)
    .attr("width", x.bandwidth() )
    .style("fill", "Pink")
    .style("opacity", 0.5)
svg
  .append("rect")
    .attr("x", x("Amber") )
    .attr("y",190)
    .attr("height", 100)
    .attr("width", x.bandwidth() )
    .style("fill", "Pink")
    .style("opacity", 0.5)  
svg
  .append("rect")
    .attr("x", x("Lucas") )
    .attr("y",0)
    .attr("height", 290)
    .attr("width", x.bandwidth() )
    .style("fill", "Pink")
    .style("opacity", 0.5) 