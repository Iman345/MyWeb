
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
document.addEventListener("DOMContentLoaded", function(coins){
fetch('https://api.coindesk.com/v1/bpi/historical/close.json')

.then(function(response) {return response.json();})
then(function(data){
    var pData = parseData(coindata);
    linegraph(pData);
})
  .catch(function(err){console.log(error);})  
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
   
 let margin={top:20, right:20, bottom:30, left:50};

let Width=600;

let Height=600;

let graphwidth = Width-margin.left-margin.right;
let graphheight = Height- margin.top-margin.bottom;

let vizArea=d3.select('#Viz');

vizArea
.attr("width", Width)
.attr("height", Height);
vizArea
.append(g)
.attr("transform", "translate("+ margin.left+","+margin.top+")");

let xScale=d3.scaleTime().rangeRound([0, Width]);
let yScale=d3.scaleTime().rangeRound([Height, 0]);


let drawlines=d3.line()
.xScale(function(d){return xScale(d.date)})
.yScale(function(d){return yScale(d.value)})
xScale.domain(d3.extent(coindata, function(d){return d.date}));
yScale.domain(d3.extent(coindata, function(d){return d.value}));

g.append("g")
.attr("transform", "translate(0,"+ Height+")")
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


