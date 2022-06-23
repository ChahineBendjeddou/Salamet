import React from 'react'
import {Chart as ChartJS, BarElement, CategoryScale,
    LinearScale} from 'chart.js'
import {Bar} from 'react-chartjs-2'
import './Chart.css'


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement
)
const Chart = () => {

   var data = {
        labels: ['Blida', 'Alger', 'Oran', 'Constontine', 'Skikda', 'Ouargla'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

   var options = {
    maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels :{ fontSize:26}
        }
    }
  

  return (
    <div className="barchart">
    
      <Bar 
      data={data}
      height={400}
      options={options}
      />

    </div>
  )
}

export default Chart
