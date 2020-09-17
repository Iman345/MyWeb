
//let margin = 50;
let vizArea=d3.select('#Viz');
let xScale=d3.scaleLinear().domain([0,100]).range([0,500]);
let yScale=d3.scaleLinear().domain([0,100]).range([500,0]);


vizArea
.append('g')
.attr("transform", 'translate(50,10)')
.call(d3.axisLeft(yScale));

vizArea
.append('g')
.attr("transform", 'translate(50,500)')
.call(d3.axisBottom(xScale));

vizArea
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
