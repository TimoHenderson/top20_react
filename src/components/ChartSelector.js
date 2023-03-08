import React from "react";
import './ChartSelector.css'

function ChartSelector({ charts, changeChart }) {
    const chartNodes = charts.map((chart, index) => {
        return <button key={index} chart={chart} onClick={() => changeChart(chart)}>{chart.name}</button>
    });

    return (
        <div className="chart-selector">
            {chartNodes}
        </div>
    );
}
export default ChartSelector;