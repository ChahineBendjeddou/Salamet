import React from 'react'
import Chart from '../components/chart/Chart'
import Card from '../components/cards/Card'
import Select from '../components/cards/select'
const ChartPage = () => {
    return (

        <div className="ChartPage">
            <h1>Satistics</h1>
          <div className="CARDS">
            
                <Card
                title='Accident today'
                imageUrl= 'assets/images/crash.png'
                body='2.3356 '
                more='last updated on 07/06/2022 at 02:49PM' />

              <Card
                title='Deaths today'
                imageUrl='assets/images/dead.png'
                body='356 '
                more='last updated on 07/06/2022 at 02:49PM' />

         </div>
         <div className="Chartpage-select">
           <Select />
         </div>
         
          <div className='Chartpage-chart'>
              <Chart />
          </div>      
         
        </div>
    )
}

export default ChartPage