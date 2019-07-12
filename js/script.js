var margin = {top: 80, right: 80, bottom: 80, left: 80},
    width = 880 - margin.left - margin.right,
    height = 880 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#hollywood_sequel")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(-157.12,210.88) rotate(-45)");

//Read the data
d3.csv("data/data_hollywood_sequel_min.csv", function (data) {
    data.sort( function (a,b) { return b.Count_2007-a.Count_2007;});
    
// Add X axis
    var x = d3.scaleLinear()
            .domain([0, 1200])
            .range([ 0, 720 ]);
    svg.append("g")
        .attr("transform", "translate(0, 720)")
        .attr("class", "axis")
        .call(d3.axisBottom(x)
            .tickValues([150, 300, 450, 600, 750, 900, 1050, 1200])
            .tickSize(-height))
        .selectAll("text")	
        .style("text-anchor", "start")
        .attr("dx", 6)
        .attr("dy", 6)
        .attr("transform", function (d) {return "rotate(45)"; });

// Add Y axis
    var y = d3.scaleLinear()
            .domain([0, 400])
            .range([ 720, 0 ]);
    svg.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(y)
            .tickValues([50, 100, 150, 200, 250, 300, 350, 400])
            .tickSize([-width]))
        .selectAll("text")	
        .style("text-anchor", "end")
        .attr("dx", 3)
        .attr("dy", 14)
        .attr("transform", function (d) {return "rotate(45)"; });

// Tick line
    svg.selectAll(".tick line")
        .attr("stroke", "var(--darkgray)")
        .attr("stroke-weight", 1.2);

// Add X axis label:
    svg.append("text")
        .attr("class", "p")
        .attr("transform", "rotate(45)")
        .attr("x", 540)
        .attr("y", 500)
        .text("Average Gross ($m)");

// Y axis label:
    svg.append("text")
        .attr("class", "p")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(45)")
        .attr("x", 480)
        .attr("y", 500)
        .text("Average Budget ($m)");
    
// Add a scale for bubble size
    var z = d3.scaleSqrt()
            .domain([0, 30])
            .range([ 0, 24]);
    
// Add Return arc axis
    svg.append("path")
        .attr("transform", "translate(0,720)")
        .attr("d", d3.arc()
            .innerRadius(450)
            .outerRadius(450)
            .startAngle(0)
            .endAngle(Math.PI * 0.5)
            )
        .attr("class", "line");

// Add Return major ticks
    svg.append("line")//0x
        .attr("x1", x(0))
        .attr("y1", y(0))
        .attr("x2", x(400))
        .attr("y2", y(400))
        .attr("class", "line");

    svg.append("line")//1x
        .attr("x1", x(0))
        .attr("y1", y(0))
        .attr("x2", x(800))
        .attr("y2", y(400))
        .attr("class", "line");

    svg.append("line")//2x
        .attr("x1", x(0))
        .attr("y1", y(0))
        .attr("x2", x(1200))
        .attr("y2", y(400))
        .attr("class", "line");

    svg.append("line")//4x
        .attr("x1", x(0))
        .attr("y1", y(0))
        .attr("x2", x(1200))
        .attr("y2", y(240))
        .attr("class", "line");

    svg.append("line")//8x
        .attr("x1", x(0))
        .attr("y1", y(0))
        .attr("x2", x(1200))
        .attr("y2", y(133.3333))
        .attr("class", "line");

    svg.append("line")//16x
        .attr("x1", x(0))
        .attr("y1", y(0))
        .attr("x2", x(1200))
        .attr("y2", y(70.5882))
        .attr("class", "line");
    
// Add Return axis labels
    svg.append("text")
        .attr("class", "p")
        .attr("text-anchor", "middle")
        .attr("x", 250)
        .attr("y", 105)
        .attr("transform", "rotate(45)")
        .text("Average Return");
    
    svg.append("text")
        .attr("class", "p")
        .attr("x", 183)
        .attr("y", 177)
        .attr("transform", "rotate(45)")
        .text("-1x");
    
    svg.append("text")
        .attr("class", "p")
        .attr("x", 305)
        .attr("y", 96)
        .attr("transform", "rotate(45)")
        .text("0x");
    
    svg.append("text")
        .attr("class", "p")
        .attr("x", 423)
        .attr("y", 60)
        .attr("transform", "rotate(45)")
        .text("1x");
    
    svg.append("text")
        .attr("class", "p")
        .attr("x", 513)
        .attr("y", 54)
        .attr("transform", "rotate(45)")
        .text("2x");
    
    svg.append("text")
        .attr("class", "p")
        .attr("x", 625)
        .attr("y", 69)
        .attr("transform", "rotate(45)")
        .text("4x");
    
    svg.append("text")
        .attr("class", "p")
        .attr("x", 718)
        .attr("y", 105)
        .attr("transform", "rotate(45)")
        .text("8x");
    
    svg.append("text")
        .attr("class", "p")
        .attr("x", 778)
        .attr("y", 137)
        .attr("transform", "rotate(45)")
        .text("16x");
    
// Add Return minor ticks
    svg.append("line")//3x
        .attr("x1", x(594.7))
        .attr("y1", y(148.6778))
        .attr("x2", x(605.3667))
        .attr("y2", y(151.3444))
        .attr("class", "line");

    svg.append("line")//5x
        .attr("x1", x(665))
        .attr("y1", y(110.8333))
        .attr("x2", x(676.9333))
        .attr("y2", y(112.8222))
        .attr("class", "line");

    svg.append("line")//6x
        .attr("x1", x(683.4))
        .attr("y1", y(97.6278))
        .attr("x2", x(695.6667))
        .attr("y2", y(99.3778))
        .attr("class", "line");

    svg.append("line")//7x
        .attr("x1", x(696.2))
        .attr("y1", y(87.0222))
        .attr("x2", x(708.6833))
        .attr("y2", y(88.5833))
        .attr("class", "line");

    svg.append("line")//9x
        .attr("x1", x(712.1667))
        .attr("y1", y(71.2167))
        .attr("x2", x(724.95))
        .attr("y2", y(72.4944))
        .attr("class", "line");

    svg.append("line")//10x
        .attr("x1", x(717.3167))
        .attr("y1", y(65.2111))
        .attr("x2", x(730.1833))
        .attr("y2", y(66.3778))
        .attr("class", "line");

    svg.append("line")//11x
        .attr("x1", x(721.3167))
        .attr("y1", y(60.1111))
        .attr("x2", x(734.25))
        .attr("y2", y(61.1889))
        .attr("class", "line");

    svg.append("line")//12x
        .attr("x1", x(724.4667))
        .attr("y1", y(55.7278))
        .attr("x2", x(737.45))
        .attr("y2", y(56.7278))
        .attr("class", "line");

    svg.append("line")//13x
        .attr("x1", x(726.9833))
        .attr("y1", y(51.9278))
        .attr("x2", x(740.0167))
        .attr("y2", y(52.8611))
        .attr("class", "line");

    svg.append("line")//14x
        .attr("x1", x(729.0333))
        .attr("y1", y(48.6))
        .attr("x2", x(742.1167))
        .attr("y2", y(49.4722))
        .attr("class", "line");

    svg.append("line")//15x
        .attr("x1", x(730.7333))
        .attr("y1", y(45.6722))
        .attr("x2", x(743.8333))
        .attr("y2", y(46.4889))
        .attr("class", "line");

// Tooltip step 1 Create a tooltip div that is hidden by default:
    var tooltip = d3.select("#hollywood_sequel")
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style('position', 'absolute')
            .style("background-color", "black")
            .style("border-radius", "4px")
            .attr("class", "p")
            .style("padding", "4px")
            .style("color", "white");

// Tooltip step 2 Create 3 functions to show / update (when mouse move but stay on same circle) / hide the tooltip
    var showTooltip = function (d) {
            tooltip
                .transition()
                .duration(200);
            tooltip
                .style("opacity", 0.5)
                .html(d.Story)
                .style("left", (d3.mouse(this)[0] * Math.cos (Math.PI / 4) + (d3.mouse(this)[1] * Math.sin (Math.PI * 0.25) - 135) + "px"))
                .style("top", (d3.mouse(this)[1] * Math.cos (Math.PI / 4) - (d3.mouse(this)[0] * Math.sin (Math.PI * 0.25) - 210) + "px"));
        };
    var moveTooltip = function (d) {
            tooltip
                .style("left", (d3.mouse(this)[0] * Math.cos (Math.PI / 4) + (d3.mouse(this)[1] * Math.sin (Math.PI * 0.25) - 135) + "px"))
                .style("top", (d3.mouse(this)[1] * Math.cos (Math.PI / 4) - (d3.mouse(this)[0] * Math.sin (Math.PI * 0.25) - 210) + "px"));
        };
    var hideTooltip = function (d) {
            tooltip
                .transition()
                .duration(200)
                .style("opacity", 0);
        };
    
//Add group for rotated elements
var rotateGroup = svg.append("g");

// Add dots
    var circle = rotateGroup.append('g')
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function (d) { return x(d.AvgGross_2007); })
            .attr("cy", function (d) { return y(d.AvgBudget_2007); })
            .attr("r", function (d) { return z(d.Count_2007); })
            .style("fill", function (d) { return d.Hex; })
            .style("opacity", 0.3)
    // Tooltip step 3 Trigger the functions
            .on("mouseover.tooltip", showTooltip)
            .on("mouseover.fill", function(d) { d3.select(this)
                .style("opacity", 0.8)})
            .on("mousemove", moveTooltip)
            .on("mouseleave.tooltip", hideTooltip)
            .on("mouseleave.fill", function(d) { d3.select(this)
                .style("opacity", 0.3) });

    d3.select("#y2007").on("click", function () { circle
            .sort(function (a, b) { return b.Count_2007 - a.Count_2007; })
            .transition()
            .duration(2000)
            .ease(d3.easeCircleInOut)
            .attr("cx", function (d) { return x(d.AvgGross_2007); })
            .attr("cy", function (d) { return y(d.AvgBudget_2007); })
            .attr("r", function (d) { return z(d.Count_2007); });
    });

    d3.select("#y2008").on("click", function () { circle
            .sort(function (a, b) { return b.Count_2008 - a.Count_2008; })
            .transition()
            .duration(2000)
            .ease(d3.easeCircleInOut)
            .attr("cx", function (d) { return x(d.AvgGross_2008); })
            .attr("cy", function (d) { return y(d.AvgBudget_2008); })
            .attr("r", function (d) { return z(d.Count_2008); });
    });

    d3.select("#y2009").on("click", function () { circle
            .sort(function (a, b) { return b.Count_2009 - a.Count_2009; })
            .transition()
            .duration(2000)
            .ease(d3.easeCircleInOut)
            .attr("cx", function (d) { return x(d.AvgGross_2009); })
            .attr("cy", function (d) { return y(d.AvgBudget_2009); })
            .attr("r", function (d) { return z(d.Count_2009); });
    });

    d3.select("#y2010").on("click", function () { circle
            .sort(function (a, b) { return b.Count_2010 - a.Count_2010; })
            .transition()
            .duration(2000)
            .ease(d3.easeCircleInOut)
            .attr("cx", function (d) { return x(d.AvgGross_2010); })
            .attr("cy", function (d) { return y(d.AvgBudget_2010); })
            .attr("r", function (d) { return z(d.Count_2010); });
    });

    d3.select("#y2011").on("click", function () { circle
            .sort(function (a, b) { return b.Count_2011 - a.Count_2011; })
            .transition()
            .duration(2000)
            .ease(d3.easeCircleInOut)
            .attr("cx", function (d) { return x(d.AvgGross_2011); })
            .attr("cy", function (d) { return y(d.AvgBudget_2011); })
            .attr("r", function (d) { return z(d.Count_2011); });
    });
    
// Add bubble legend
    var valuesToShow = [1, 10, 25]
    var xCircle = 240
    var xLabel = 280
    svg
      .selectAll("legend")
      .data(valuesToShow)
      .enter()
      .append("circle")
        .attr("cx", xCircle)
        .attr("cy", function(d){ return height - 240 - z(d) } )
        .attr("r", function(d){ return z(d) })
            .attr("class", "hollow")
        .attr("transform", "rotate(45)");
    
// Add legend: segments
        svg.selectAll("legend")
        .data(valuesToShow)
        .enter()
        .append("line")
            .attr('x1', function(d){ return xCircle + z(d) } )
            .attr('x2', xLabel)
            .attr('y1', function(d){ return height - 240 - z(d) } )
            .attr('y2', function(d){ return height - 240 - z(d) } )
            .attr('stroke', 'var(--darkgray)')
            .style('stroke-dasharray', ('2,2'))
        .attr("transform", "rotate(45)");
    
// Add legend: labels
    svg
      .selectAll("legend")
      .data(valuesToShow)
      .enter()
      .append("text")
        .attr('x', xLabel)
        .attr('y', function(d){ return height - 240 - z(d) } )
        .text( function(d){ return d } )
        .style("font-family", "Overpass,sans-serif")
        .style("font-size", 8)
        .style("fill", "var(--lightgray)")
        .attr('alignment-baseline', 'middle')
        .attr("transform", "rotate(45)");

// Legend title
    svg.append("text")
        .attr('x', xCircle)
        .attr("y", height - 240 +20)
        .text("Film Count")
        .attr("class", "p")
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(45)");
      
});