fetch("https://api.covid19api.com/summary")
.then(res => res.json())
.then(coviddata => {
  console.log(coviddata)
 
})


/*const Covdata = [
    { Title :"NewConfirmed", Number:468460},
    { Title : "TotalConfirmed",Number:41688829 },
    {  Title : "NewDeaths",Number:5884},
    { Title :"TotalRecovered", Number:28339727 },
   
  ];
  
  var svg =d3.select("#Bar");

  var pad = {top:20,right:30,bottom:30, left:50};
  var BarArea={
      "width":parseInt(svg.style("width"))-pad.left-pad.right,
      "height":parseInt(svg.style("width"))-pad.bottom-pad.top
  };

  var ysc=d3.scaleLinear()
  .domain([0, d3.max(Covdata, function(d,a){return d.Number})])
  .range([BarArea.height, 0]).nice();

var xsc =d3.scaleBand()
.domain(Covdata.map(function(d){reutrn d.Title}))
.range([0, BarArea.width])
.pad(0.2);

var xAxis = svg.append("g")
.classed("xAxis", true)
.attr(
    'transfrom','translate('+pad.left+','+(BarArea.height+pad.top)+')'
    
)
.call (d3.axisBottom(xsc));

var yax=d3.axisLeft(ysc);
var yAxis = svg.append("g")
.classed("yaxis", true) 
.attr()

*/

var covidOne = [
  {group: "New Confirmed", value: 468460},
  {group: "Total Confirmed", value: 41688829},
  {group: "Total Recovered", value: 5884},
  {group: "New Deaths", value: 28339727 }
];



    var svg = d3.select("#barchart")
  
  .append("svg")
    .attr("width", 1200)
    .attr("height", 1000)
 
    var margin = {top: 20, right: 20, bottom: 40, left: 60},
    width = 500 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var svg = d3.select("#barchart")
  
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


var xaxis = d3.scaleLinear().domain([0, 100]).range([0, width]);
svg
  .append("g")
      
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(xaxis));


var yaxis = d3.scaleLinear().domain([0, 100]).range([ height, 0]);
svg
  .append("g")
  .call(d3.axisLeft(yaxis));

