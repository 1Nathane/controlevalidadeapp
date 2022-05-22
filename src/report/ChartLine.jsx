import React, { Component } from "react";
import { Line } from 'react-chartjs-2'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList} from './reportActions'
import moment from 'moment'

const controleValidadeUser = JSON.parse(localStorage.getItem('_controlevalidade_user'))
class ChartLine extends Component {
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
                label:'Quantidade de lotes',
                data: this.CalValues(),
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

const mapStateToProps = state => ({ list: state.report.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ChartLine)
