import React from "react";

function ChartSelector({ charts, changeChart }) {


    const chartNodes = charts.map((chart, index) => {
        return <button key={index} chart={chart} onClick={() => changeChart(chart)}>{chart.name}</button>
    });

    return (
        <div>
            {chartNodes}
        </div>
    );
}
export default ChartSelector;