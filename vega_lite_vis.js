function loadCharts(chartMappings) {
    chartMappings.forEach((mapping) => {
        const { jsonName, divId } = mapping; // Destructure mapping object

        vegaEmbed(divId, jsonName)
            .then(function (result) {
                console.log(`Chart loaded in ${divId}`); // Success message
            })
            .catch((error) => {
                console.error(`Error loading chart in ${divId}:`, error);
            });
    });
}

const chartsToLoad = [
    { jsonName: "map.vg.json", divId: "#map_chart" },
    { jsonName: "bar0.vg.json", divId: "#bar_chart0" },
    { jsonName: "bar1.vg.json", divId: "#bar_chart1" },
    { jsonName: "heatmap.vg.json", divId: "#heat_map_chart" },
    { jsonName: "linechart.vg.json", divId: "#line_chart" },
];

loadCharts(chartsToLoad);
