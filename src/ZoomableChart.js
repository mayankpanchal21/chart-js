// ZoomableChart.js
// import React, { useRef, useEffect } from 'react';
// import { Scatter } from 'react-chartjs-2';
// import { Chart as ChartJS, registerables } from 'chart.js';
// import zoomPlugin from 'chartjs-plugin-zoom';

// // Register chart.js and the zoom plugin
// ChartJS.register(...registerables, zoomPlugin);

// const ZoomableChart = () => {
//   const chartRef = useRef(null);

//   // Generate random scatter plot data points
//   const generateData = (numPoints) => {
//     return Array.from({ length: numPoints }, (_, i) => ({
//       x: i + 1,
//       y: Math.random() * 100,
//     }));
//   };

//   const data = {
//     datasets: [
//       {
//         label: 'Scatter Dataset',
//         data: generateData(50), // 50 random points
//         backgroundColor: 'rgb(192, 75, 184)',
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     scales: {
//       x: {
//         zoom: {
//             enabled: true,
//             mode: 'xy', // Zoom on both X and Y axes
//             rangeMin: {
//                 x: 0, // Minimum value for zoom on X axis (you can adjust this to a specific value)
//             },
//             rangeMax: {
//                 x: 34, // Maximum value for zoom on X axis
//             }
//         },
//         title: {
//             display: true,
//             text: 'X Axis',
//         },
//     },
//     y: {
//         zoom: {
//             enabled: true,
//             mode: 'xy', // Zoom on both X and Y axes
//             rangeMin: {
//                 y: 0, // Minimum value for zoom on Y axis
//             },
//             rangeMax: {
//                 y: 60, // Maximum value for zoom on Y axis
//             }
//         },
//         title: {
//             display: true,
//             text: 'Y Axis',
//         },
//     },
    
//     },
//     plugins: {
//       zoom: {
//         pan: {
//           enabled: true,
//           mode: 'xy', // Pan in both directions (X and Y)
//           speed: 10, // Adjust pan speed
//         },
//         zoom: {
//           wheel: {
//             enabled: true, // Enable zooming with mouse wheel
//             speed: 0.1,
//           },
//           pinch: {
//             enabled: true, // Enable zooming with pinch gesture on touch devices
//             speed: 0.1,
//           },
//           mode: 'xy', // Enable zoom on both axes
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ width: '900px', height: '450px' }}>
//       <Scatter ref={chartRef} data={data} options={options} />
//     </div>
//   );
// };

// export default ZoomableChart;



// fixed zoom 1

// import React, { useRef, useEffect } from 'react';
// import { Scatter } from 'react-chartjs-2';
// import { Chart as ChartJS, registerables } from 'chart.js';
// import zoomPlugin from 'chartjs-plugin-zoom';

// // Register chart.js and the zoom plugin
// ChartJS.register(...registerables, zoomPlugin);

// const ZoomableChart = () => {
//   const chartRef = useRef(null);

//   // Generate random scatter plot data points
//   const generateData = (numPoints) => {
//     return Array.from({ length: numPoints }, (_, i) => ({
//       x: i + 1,
//       y: Math.random() * 100,
//     }));
//   };

//   const data = {
//     datasets: [
//       {
//         label: 'Scatter Dataset',
//         data: generateData(50), // 50 random points
//         backgroundColor: 'rgb(192, 75, 184)',
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'X Axis',
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Y Axis',
//         },
//       },
//     },
//     plugins: {
//       zoom: {
//         pan: {
//           enabled: true,
//           mode: 'xy', // Pan in both directions (X and Y)
//           speed: 10, // Adjust pan speed
//         },
//         zoom: {
//           wheel: {
//             enabled: true, // Enable zooming with mouse wheel
//             speed: 0.1,
//           },
//           pinch: {
//             enabled: true, // Enable zooming with pinch gesture on touch devices
//             speed: 0.1,
//           },
//           mode: 'xy', // Enable zoom on both axes
//           onZoomComplete: ({ chart }) => {
//             // Define rangeMin and rangeMax after zoom completes
//             const xRange = chart.scales.x;
//             const yRange = chart.scales.y;

//             // Setting the zoom limits dynamically after zoom
//             xRange.options.ticks.min = 0; // Set your X axis range min
//             xRange.options.ticks.max = 25; // Set your X axis range max

//             yRange.options.ticks.min = 0; // Set your Y axis range min
//             yRange.options.ticks.max = 80; // Set your Y axis range max

//             chart.update(); // Re-render chart after updating ranges
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ width: '900px', height: '450px' }}>
//       <Scatter ref={chartRef} data={data} options={options} />
//     </div>
//   );
// };

// export default ZoomableChart;


// try zoom

// import React, { useRef, useEffect } from 'react';
// import { Scatter } from 'react-chartjs-2';
// import { Chart as ChartJS, registerables } from 'chart.js';
// import zoomPlugin from 'chartjs-plugin-zoom';

// // Register chart.js and the zoom plugin
// ChartJS.register(...registerables, zoomPlugin);

// const ZoomableChart = () => {
//   const chartRef = useRef(null);

//   // Generate random scatter plot data points
//   const generateData = (numPoints) => {
//     return Array.from({ length: numPoints }, (_, i) => ({
//       x: i + 1,
//       y: Math.random() * 100,
//     }));
//   };

//   const data = {
//     datasets: [
//       {
//         label: 'Scatter Dataset',
//         data: generateData(50), // 50 random points
//         backgroundColor: 'rgb(192, 75, 184)',
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'X Axis',
//         },
//         ticks: {
//           min: 0, // Set initial min
//           max: 34, // Set initial max
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Y Axis',
//         },
//         ticks: {
//           min: 0, // Set initial min
//           max: 60, // Set initial max
//         },
//       },
//     },
//     plugins: {
//       zoom: {
//         pan: {
//           enabled: true,
//           mode: 'xy', // Pan in both directions (X and Y)
//           speed: 10, // Adjust pan speed
//         },
//         zoom: {
//           wheel: {
//             enabled: true, // Enable zooming with mouse wheel
//             speed: 0.1,
//           },
//           pinch: {
//             enabled: true, // Enable zooming with pinch gesture on touch devices
//             speed: 0.1,
//           },
//           mode: 'xy', // Enable zoom on both axes
//           onZoom: ({ chart }) => {
//             // Access the scales after zoom
//             const xScale = chart.scales.x;
//             const yScale = chart.scales.y;

//             // Set the zoom limits for both X and Y axes
//             // For X Axis
//             if (xScale.min < 0) xScale.min = 0; // Prevent zooming below 0
//             if (xScale.max > 34) xScale.max = 34; // Prevent zooming beyond 34

//             // For Y Axis
//             if (yScale.min < 0) yScale.min = 0; // Prevent zooming below 0
//             if (yScale.max > 60) yScale.max = 60; // Prevent zooming beyond 60

//             chart.update(); // Update the chart after adjusting zoom
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ width: '900px', height: '450px' }}>
//       <Scatter ref={chartRef} data={data} options={options} />
//     </div>
//   );
// };

// export default ZoomableChart;


// speed slow zoom in zoom out 

// import React, { useRef, useEffect } from 'react';
// import { Scatter } from 'react-chartjs-2';
// import { Chart as ChartJS, registerables } from 'chart.js';
// import zoomPlugin from 'chartjs-plugin-zoom';

// // Register chart.js and the zoom plugin
// ChartJS.register(...registerables, zoomPlugin);

// const ZoomableChart = () => {
//   const chartRef = useRef(null);

//   // Generate random scatter plot data points
//   const generateData = (numPoints) => {
//     return Array.from({ length: numPoints }, (_, i) => ({
//       x: i + 1,
//       y: Math.random() * 100,
//     }));
//   };

//   const data = {
//     datasets: [
//       {
//         label: 'Scatter Dataset',
//         data: generateData(50), // 50 random points
//         backgroundColor: 'rgb(192, 75, 184)',
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'X Axis',
//         },
//         ticks: {
//           min: 0, // Set initial min
//           max: 34, // Set initial max
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Y Axis',
//         },
//         ticks: {
//           min: 0, // Set initial min
//           max: 60, // Set initial max
//         },
//       },
//     },
//     plugins: {
//       zoom: {
//         pan: {
//           enabled: true,
//           mode: 'xy', // Pan in both directions (X and Y)
//           speed: 10, // Adjust pan speed
//         },
//         zoom: {
//           wheel: {
//             enabled: true, // Enable zooming with mouse wheel
//             speed: 0.05, // Slow down zooming speed for wheel (lower value for slower zoom)
//           },
//           pinch: {
//             enabled: true, // Enable zooming with pinch gesture on touch devices
//             speed: 0.05, // Slow down zooming speed for pinch (lower value for slower zoom)
//           },
//           mode: 'xy', // Enable zoom on both axes
//           onZoom: ({ chart }) => {
//             // Access the scales after zoom
//             const xScale = chart.scales.x;
//             const yScale = chart.scales.y;

//             // Set the zoom limits for both X and Y axes
//             // For X Axis
//             if (xScale.min < 0) xScale.min = 0; // Prevent zooming below 0
//             if (xScale.max > 34) xScale.max = 34; // Prevent zooming beyond 34

//             // For Y Axis
//             if (yScale.min < 0) yScale.min = 0; // Prevent zooming below 0
//             if (yScale.max > 60) yScale.max = 60; // Prevent zooming beyond 60

//             chart.update(); // Update the chart after adjusting zoom
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ width: '900px', height: '450px' }}>
//       <Scatter ref={chartRef} data={data} options={options} />
//     </div>
//   );
// };

// export default ZoomableChart;

// fixed the drag problem 


// import React, { useRef, useEffect } from 'react';
// import { Scatter } from 'react-chartjs-2';
// import { Chart as ChartJS, registerables } from 'chart.js';
// import zoomPlugin from 'chartjs-plugin-zoom';

// // Register chart.js and the zoom plugin
// ChartJS.register(...registerables, zoomPlugin);

// const ZoomableChart = () => {
//   const chartRef = useRef(null);

//   // Generate random scatter plot data points
//   const generateData = (numPoints) => {
//     return Array.from({ length: numPoints }, (_, i) => ({
//       x: i + 1,
//       y: Math.random() * 100,
//     }));
//   };

//   const data = {
//     datasets: [
//       {
//         label: 'Scatter Dataset',
//         data: generateData(50), // 50 random points
//         backgroundColor: 'rgb(192, 75, 184)',
//       },
//     ],
//   };

//   // Set the initial min/max values for X and Y axes
//   const initialXMin = 0;
//   const initialXMax = 50;
//   const initialYMin = 0;
//   const initialYMax = 65;

//   const options = {
//     responsive: true,
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'X Axis',
//         },
//         ticks: {
//           min: initialXMin, // Set the initial min
//           max: initialXMax, // Set the initial max
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Y Axis',
//         },
//         ticks: {
//           min: initialYMin, // Set the initial min
//           max: initialYMax, // Set the initial max
//         },
//       },
//     },
//     plugins: {
//       zoom: {
//         pan: {
//           enabled: false, // Disable dragging (panning)
//         },
//         zoom: {
//           wheel: {
//             enabled: true, // Enable zooming with mouse wheel
//             speed: 0.05, // Slow down zooming speed for wheel (lower value for slower zoom)
//           },
//           pinch: {
//             enabled: true, // Enable zooming with pinch gesture on touch devices
//             speed: 0.05, // Slow down zooming speed for pinch (lower value for slower zoom)
//           },
//           mode: 'xy', // Enable zoom on both axes
//           onZoom: ({ chart }) => {
//             const xScale = chart.scales.x;
//             const yScale = chart.scales.y;

//             // Prevent zooming out beyond the initial chart's min/max
//             if (xScale.min < initialXMin) xScale.min = initialXMin; // Prevent zooming below the initial X min
//             if (xScale.max > initialXMax) xScale.max = initialXMax; // Prevent zooming beyond the initial X max

//             if (yScale.min < initialYMin) yScale.min = initialYMin; // Prevent zooming below the initial Y min
//             if (yScale.max > initialYMax) yScale.max = initialYMax; // Prevent zooming beyond the initial Y max

//             chart.update(); // Update the chart after adjusting zoom
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ width: '900px', height: '450px' }}>
//       <Scatter ref={chartRef} data={data} options={options} />
//     </div>
//   );
// };

// export default ZoomableChart;


// import React, { useRef, useEffect } from 'react';
// import { Scatter } from 'react-chartjs-2';
// import { Chart as ChartJS, registerables } from 'chart.js';
// import zoomPlugin from 'chartjs-plugin-zoom';

// // Register chart.js and the zoom plugin
// ChartJS.register(...registerables, zoomPlugin);

// const ZoomableChart = () => {
//   const chartRef = useRef(null);

//   // Generate random scatter plot data points
//   const generateData = (numPoints) => {
//     return Array.from({ length: numPoints }, (_, i) => ({
//       x: i + 1,
//       y: Math.random() * 100,
//     }));
//   };

//   const data = {
//     datasets: [
//       {
//         label: 'Scatter Dataset',
//         data: generateData(50), // 50 random points
//         backgroundColor: 'rgb(192, 75, 184)',
//       },
//     ],
//   };

//   // Set the initial min/max values for X and Y axes
//   const initialXMin = 0;
//   const initialXMax = 50;
//   const initialYMin = 0;
//   const initialYMax = 100;

//   const options = {
//     responsive: true,
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'X Axis',
//         },
//         ticks: {
//           min: initialXMin, // Set the initial min
//           max: initialXMax, // Set the initial max
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Y Axis',
//         },
//         ticks: {
//           min: initialYMin, // Set the initial min
//           max: initialYMax, // Set the initial max
//         },
//       },
//     },
//     plugins: {
//       zoom: {
//         pan: {
//           enabled: false, // Disable dragging (panning)
//         },
//         zoom: {
//           wheel: {
//             enabled: true, // Enable zooming with mouse wheel
//             speed: 0.05, // Slow down zooming speed for wheel (lower value for slower zoom)
//           },
//           pinch: {
//             enabled: true, // Enable zooming with pinch gesture on touch devices
//             speed: 0.05, // Slow down zooming speed for pinch (lower value for slower zoom)
//           },
//           mode: 'xy', // Enable zoom on both axes
//           onZoom: ({ chart }) => {
//             const xScale = chart.scales.x;
//             const yScale = chart.scales.y;

//             // Prevent zooming out beyond the initial chart's min/max
//             if (xScale.min < initialXMin) xScale.min = initialXMin; // Prevent zooming below the initial X min
//             if (xScale.max > initialXMax) xScale.max = initialXMax; // Prevent zooming beyond the initial X max

//             if (yScale.min < initialYMin) yScale.min = initialYMin; // Prevent zooming below the initial Y min
//             if (yScale.max > initialYMax) yScale.max = initialYMax; // Prevent zooming beyond the initial Y max

//             // Ensure zooming out does not go below the initial limits
//             if (xScale.min === initialXMin && xScale.max === initialXMax) {
//               // Check if it is zoomed out to initial values and prevent any further zoom-out
//               chart.update();
//             } else {
//               chart.update(); // Update the chart after adjusting zoom
//             }
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ width: '900px', height: '450px' }}>
//       <Scatter ref={chartRef} data={data} options={options} />
//     </div>
//   );
// };

// export default ZoomableChart;


//fixing
import React, { useRef } from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

// Register chart.js and the zoom plugin
ChartJS.register(...registerables, zoomPlugin);

const ZoomableChart = () => {
  const chartRef = useRef(null);

  // Generate random scatter plot data points
  const generateData = (numPoints) => {
    return Array.from({ length: numPoints }, (_, i) => ({
      x: i + 1,
      y: Math.random() * 100,
    }));
  };

  const data = {
    datasets: [
      {
        label: 'Scatter Dataset',
        data: generateData(50), // 50 random points
        backgroundColor: 'rgb(192, 75, 184)',
      },
    ],
  };

  // Set the initial min/max values for X and Y axes
  const initialXMin = 0;
  const initialXMax = 50;
  const initialYMin = 0;
  const initialYMax = 100;

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'X Axis',
        },
        ticks: {
          min: initialXMin, // Set the initial min
          max: initialXMax, // Set the initial max
        },
      },
      y: {
        title: {
          display: true,
          text: 'Y Axis',
        },
        ticks: {
          min: initialYMin, // Set the initial min
          max: initialYMax, // Set the initial max
        },
      },
    },
    plugins: {
      zoom: {
        pan: {
          enabled: false, // Disable dragging (panning)
        },
        zoom: {
          wheel: {
            enabled: true, // Enable zooming with mouse wheel
            speed: 0.05, // Slow down zooming speed for wheel (lower value for slower zoom)
          },
          pinch: {
            enabled: true, // Enable zooming with pinch gesture on touch devices
            speed: 0.05, // Slow down zooming speed for pinch (lower value for slower zoom)
          },
          mode: 'xy', // Enable zoom on both axes
          onZoom: ({ chart }) => {
            const xScale = chart.scales.x;
            const yScale = chart.scales.y;

            // Enforce the zoom-out limits
            if (xScale.min < initialXMin) xScale.min = initialXMin; // Prevent zooming below the initial X min
            if (xScale.max > initialXMax) xScale.max = initialXMax; // Prevent zooming beyond the initial X max

            if (yScale.min < initialYMin) yScale.min = initialYMin; // Prevent zooming below the initial Y min
            if (yScale.max > initialYMax) yScale.max = initialYMax; // Prevent zooming beyond the initial Y max

            // Ensure that zooming out does not go below the initial limits
            if (xScale.min === initialXMin && xScale.max === initialXMax && yScale.min === initialYMin && yScale.max === initialYMax) {
              // Do nothing if it's already at the initial zoom level.
            } else {
              chart.update(); // Force chart update after adjusting zoom
            }
          },
        },
      },
    },
  };

  return (
    <div style={{ width: '900px', height: '450px',}}>
      <Scatter ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default ZoomableChart;
