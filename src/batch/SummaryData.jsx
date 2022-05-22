import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './batchActions'
import moment from 'moment'

import ValueBox from '../common/widget/valueBox'


class SummaryData extends Component {

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
        return { expired, expiremonth, expireaftermonth }
    }

    render() {
        const { expired, expiremonth, expireaftermonth } = this.CalValues()
        return (
            <div>
                <ValueBox cols='12 4' color='green' icon='smile-o'
                    value={expireaftermonth} text='Quantidade de lotes com validade acima de 30 dias' />
                <ValueBox cols='12 4' color='yellow' icon='exclamation-circle'
                    value={expiremonth} text='Quantidade de lotes com validade abaixo de 30 dias' />
                <ValueBox cols='12 4' color='red' icon='frown-o'
                    value={expired} text='Quantidade de lotes com validade vendida          ' />
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.batch.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SummaryData)
