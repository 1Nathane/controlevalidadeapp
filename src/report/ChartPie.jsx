import React, { Component } from "react";
import { Pie } from 'react-chartjs-2'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList} from './reportActions'
import moment from 'moment'

const controleValidadeUser = JSON.parse(localStorage.getItem('_controlevalidade_user'))
class ChartPie extends Component {
  componentWillMount() {
    this.props.getList()
}

  isUser (user) {
    if (user == `_${controleValidadeUser['email']}`)
    return true
    else
    return false
  }

  getYear (){
    const date = Date.now()
      return moment(date).format('YYYY')
  }

  CalValues() {
    var values = [0,0,0,0,0,0,0,0,0,0,0,0]
    var year = this.getYear()

    const list = this.props.list || []
    list.map(bc => (
      this.isUser(bc._id) ?
      bc.year == year ?
      values[bc.month - 1] = bc.total : values : values        
    ))
    return values
  }


  render() {
    return (
      <div>
        <h1 className="title-center">Quantidade de lotes que vencem por mês</h1>
        <Pie
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
                label:'Quantidade de lotes',
                data: this.CalValues(),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(221, 75, 57, 0.6)',
                  'rgba(35, 43, 153, 0.6)',
                  'rgba(13, 13, 13, 0.6)',
                  'rgba(8, 88, 32, 0.6)',
                  'rgba(125, 59, 10, 0.6)',
                  'rgba(157, 16, 73, 0.6)'
              ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(221, 75, 57, 1)',
                  'rgba(35, 43, 153, 1)',
                  'rgba(13, 13, 13, 1)',
                  'rgba(8, 88, 32, 1)',
                  'rgba(125, 59, 10, 1)',
                  'rgba(157, 16, 73, 1)'
              ],
                borderWidth: false,
              }
            ]
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: true,
            scales: {
              yAxes: false
            }
          }}
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({ list: state.report.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ChartPie)
