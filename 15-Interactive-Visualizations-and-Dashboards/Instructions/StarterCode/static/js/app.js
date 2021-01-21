

    // Fetch the JSON data, build plot of what to include in chart and console log it
    function init() {
      // Grab a reference to the dropdown select element
    
      // Use the list of sample names to populate the select options
      d3.json("/samples").then((data) => {
        
        subject_id = '940';
    
        console.log(data);
        var samples = data['samples'];
    
        var filtered_samples = samples.filter(s => s['id'] == subject_id);
    
        var sample_values = filtered_samples.map(s => s['sample_values']);
        var otu_ids = filtered_samples.map(s => s['otu_ids']);
        var otu_labels = ''
         
        var x = sample_values[0].slice(0,10).reverse();
        var y = otu_ids[0].slice(0,10).map(o => `OTU ${o}`).reverse();
    
        var data = [{
          type: 'bar',
          x: x,
          y: y,
          orientation: 'h'
        }];
    
        console.log(sample_values.length);
        console.log(otu_ids.length);
        
        Plotly.newPlot('bar', data);
    
      // belly_biodiversity=data['sample_values']['otu_ids'];
    
      // values = belly_biodiversity.map(d => d[1]);
      // console.log (data["samples"])
      // //ID = belly_biodiversity.map(d => d[?]);
    
      // console.log(values);
      // console.log (ID);
    
    //do I need OTU labels if it will be hovertext?
    //Promise Pending (dont think I need it)

    // Use the first sample from the list to build the initial plots
  });
}

/*
   Hints: Create additional functions to build the charts,
          build the gauge chart, set up the metadata,
          and handle the event listeners

   Recommended function names:
    optionChanged() 
    buildChart()
    buildGauge()
    buildMetadata()
*/

// Initialize the dashboard
init();
//not sure if I need does this go first?



