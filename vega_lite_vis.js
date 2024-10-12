const lineChartCtnElement = document.getElementById("line-chart-ctn");

function loadCharts(chartMappings) {
    chartMappings.forEach((mapping) => {
        const { jsonName, divId } = mapping; // Destructure mapping object

        vegaEmbed(divId, jsonName, {
            actions: false,
        })
            .then(function (result) {
                console.log(`Chart loaded in ${divId}`); // Success message

                const checkbox = document.getElementById("toggle-line-chart");
                console.log("Checkbox:", checkbox);

                // Add a listener for checkbox change
                checkbox.addEventListener("change", function () {
                    lineChartCtnElement.style.display = checkbox.checked ? "block" : "none";
                });
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
