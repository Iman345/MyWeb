fetch("https://api.covid19api.com/summary")
.then(res => res.json())
.then(coviddata => {
  console.log(coviddata)
 
})


const Covdata = [
    { Title :"NewConfirmed", Number:"468460"},
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
.domain(Covdata.map(function(d){reutrn ;d.Title}))
.range([0, BarArea.width])
.pad(0.2);

var xAxis = svg.append("g")
.classed("xAxis", true)
.attr(
    'transfrom','translate('+pad.left+','+(BarArea.height+pad.top)+')'
    
)
.call (d3.axisBottom(xsc));