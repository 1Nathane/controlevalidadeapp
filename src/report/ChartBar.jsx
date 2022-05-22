import React, { Component } from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from '../batch/batchActions'
import moment from 'moment'
import { Bar } from 'react-chartjs-2'

class ChartBar extends Component {
  componentWillMount() {
    this.props.getList()
}


daysPlusDate(data, dias) {
    return (moment(data).add(dias, 'days').toDate())
}


compDate(firth, second) {
    const date1 = new Date(firth)
    const date2 = new Date(second)
    if (date2 > date1) {
        return true
    } else {
        return false
    }
}

CalValues() {
    var expired = 0
    var expiremonth = 0
    var expireaftermonth = 0

    const list = this.props.list || []
    list.map(bc => (
        this.compDate(bc.outputDate, Date.now()) ?
            expired++ :
            (this.compDate(bc.outputDate, (this.daysPlusDate(Date.now(), 30))) ?
                expiremonth++ :
                expireaftermonth++
            )))
    return [ expired, expiremonth, expireaftermonth ]
}

  render() {
    const values = this.CalValues()
    return (
      <div>
        <h1 className="title-center">Distribuição do tempo de vencimento dos lotes</h1>
        <Bar
          data={{
            labels: ['Lotes vencidos', 'Vencem em 30 dias', 'Validade maior que 30 dias'],
            datasets: [
              {
                label: 'Quantidade de lotes',
                data: values,
                backgroundColor: [
                  'rgba(221, 75, 57, 0.6)',
                  'rgba(243, 156, 18, 0.6)',
                  'rgba(0, 166, 90, 0.6)'
              ],
                borderColor: [
                  'rgba(221, 75, 57, 1)',
                  'rgba(243, 156, 18, 1)',
                  'rgba(0, 166, 90, 1)'
              ],
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
export default connect(mapStateToProps, mapDispatchToProps)(ChartBar)
 