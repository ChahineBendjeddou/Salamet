
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);


const data = {
    datasets: [{
        data: [10, 20],
        backgroundColor:[
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
        ]
    },
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
      'Women',
      'Men'
  ], 
};
function Pie() {
  
  return (
    <div className="Pie" >
      <Doughnut data={data} />
    </div>
  );
}

export default Pie;