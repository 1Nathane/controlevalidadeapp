import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete, getListTodos } from './batchActions'
import date from 'date-and-time'
import moment from 'moment'

import TabsFooter from '../common/tab/tabsFooter'
import Pagination from '../common/template/pagination'

class BatchList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    formatDate(value) {
        const data = new Date(value)
        return date.format((moment(data).add(1, 'days').toDate()), 'DD/MM/YYYY')
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.quantity}</td>
                <td>{this.formatDate(bc.inputDate)}</td>
                <td>{this.formatDate(bc.outputDate)}</td>
                <td>{bc.status}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(bc)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(bc)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Quantidade de Produtos</th>
                            <th className='table-dates'>Data de Entrada</th>
                            <th className='table-dates'>Data de Validade</th>
                            <th className='table-status'>Status</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
                <TabsFooter>
                    <button onClick={this.props.getListTodos} type="button" className="btn btn-default">Mostrar Todos</button>
                    <button onClick={this.props.getList} type="button" className="btn btn-default">Somente Abertos</button>
                    <Pagination pagina="1" totalPaginas='10'></Pagination>
                </TabsFooter>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.batch.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete, getListTodos }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BatchList)
