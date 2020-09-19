
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


let margin = { Left: 100, Right: 10, Top: 10, Bottom: 130 }
let width = 600 - margin.left - margin.right
let height = 400 - margin.Top - margin.Bottom
let vizArea=d3.select('#Viz');

vizArea
.attr("width", width + margin.left+ margin.right)
.attr("height", height + margin.top + margin.bottom)

vizArea
.append('g')
.attr("transform", `translate(${margin.left}, ${margin.top})`)

vizArea
g.append("text")
  .attr("class", "x axis-label")
  .attr("x", width / 2)
  .attr("y", height + 110)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .text("Queens Heights")

  vizArea
g.append("text")
  .attr("class", "y axis-label")
  .attr("x", - (height / 2))
  .attr("y", -60)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .text("Heights (feet)")

d3.json("files.json").then(data => {
  data.forEach(d => {
    d.height = Number(d.height)})
})
