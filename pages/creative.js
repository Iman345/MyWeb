
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


let margin = {top: 30, right: 30, bottom: 70, left: 60},
width = 460 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;


var svg = d3.select("#Viz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


d3.csv("Heights.csv", function(data) {


var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(function(d) { return d.Names; }))
  .padding(0.2);

svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

var y = d3.scaleLinear()
  .domain([0, 13000])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));


svg.selectAll("heightbar")
  .data(data)
  .enter()
  .append("rect")
    .attr("x", function(d) { return x(d.Names); })
    .attr("y", function(d) { return y(d.Value); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.Value); })
    .attr("fill", "#ffaabf")

})