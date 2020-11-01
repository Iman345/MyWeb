
console.log(d3);
const width = 900;
const height = 600;

const svg = d3.select('body')
.append('svg')
.attr('width', width)
.attr('height', height);

const map = d3.geoMercator().scale(140)
    .translate([width / 2, height / 1.4]);
const path = d3.geoPath(map);

const g = svg.append('g');

d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    .then(data => {

        const countries = topojson.feature(data, data.objects.countries);
        g.selectAll('path').data(countries.features).enter().append('path').attr('class', 'country').attr('d', path);

    });