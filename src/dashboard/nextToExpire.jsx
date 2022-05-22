import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getSummary } from './dashboardActions'
import date from 'date-and-time'
import moment from 'moment'


const controleValidadeUser = JSON.parse(localStorage.getItem('_controlevalidade_user'))

class NexToExpire extends Component {

    componentWillMount() {
        this.props.getSummary()
    }


    formatDate(value) {
        const data = new Date(value)
        return date.format(data, 'DD/MM/YYYY')
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

    mustshow(email_data, index){
        if(index > 8){
            return false
        }else if(email_data === `_${controleValidadeUser.email}`){
            return true
        }else{
            return false
        }
    }

    nameclasse(date) {
        if (this.compDate(date, Date.now())) {
            return ('row-red')
        } else if (this.compDate(date, this.daysPlusDate(Date.now(), 30))) {
            return ('row-yellow')
        } else {
            return ('row-green')
        }
    }


    renderRows() {
        const list = this.props.summary || []
        return list.map(((sm,i) => (
            this.mustshow(sm.user_email, i) ? (
            <tr key={sm._id} className={this.nameclasse(sm.outputDate)}>
                <td >{sm.batch}</td>
                <td >{sm.product}</td>
                <td >{sm.quantity}</td>
                <td >{this.formatDate(sm.inputDate)}</td>
                <td >{this.formatDate(sm.outputDate)}</td>
            </tr>) : null
        )))
    }


    render() {
        return (
            <div>
                <div className="table-title">
                    <h1>Próximos Lotes a Vencer e/ou Vencidos</h1>
                </div>
                <div className='next-to-expire'>
                    <table className='table' role="grid">
                        <thead>
                            <tr>
                                <th className='table-nome'>Lote</th>
                                <th className='table-nome'>Produto</th>
                                <th className='table-dates-2'>Quantidade</th>
                                <th className='table-dates-2'>Data de Entrada</th>
                                <th className='table-dates-2'>Data de Validade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NexToExpire)
