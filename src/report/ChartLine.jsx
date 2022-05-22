import React, { Component } from "react";
import { Line } from 'react-chartjs-2'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from '../batch/batchActions'
import moment from 'moment'


class ChartLine extends Component {
  // componentWillMount() {
//     this.props.getValueYear()
// }

//   getYear (){
//     const date = Date.now()
//       return moment(date).format('YYYY')
//   }

//   CalValues() {
//     var jan = 0
//     var feb = 0
//     var mar = 0
//     var apr = 0
//     var may = 0
//     var jun = 0
//     var jul = 0
//     var aug = 0
//     var sep = 0
//     var oct = 0
//     var nov = 0
//     var dec = 0
//     var year = this.getYear

//     const list = this.props.list || []
//     list.map(bc => (
//       mouth = this.whatMouth(bc.outputDate)        
//     ))
//     return [ jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec ]
//   }


  render() {
    return (
      <div>
        <h1 className="title-center">Quantidade de lotes que vencem por mês</h1>
        <Line
          data={{
            labels: [ 
              'Janeiro', 
              'Fevereiro', 
              'Março', 
              'Abril', 
              'Maio', 
              'Junho', 
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro'
            ],
            datasets: [
              {
                label:'# of votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(221, 75, 57, 0.6)',
                borderColor: 'rgba(221, 75, 57, 1)',
                borderWidth: 1,
              }
            ]
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  }
                }
              ]
            }
          }}
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({ list: state.batch.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ChartLine)
