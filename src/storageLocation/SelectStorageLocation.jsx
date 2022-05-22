import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './storageLocationActions'

import Grid from '../common/layout/grid'


class SelectStorageLocation extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
          <option key={bc._id} value={bc._id}>{bc.name}</option>
        ))
    }
    render() {
        return (
          <Grid cols={this.props.cols}>
            <div className="form-group">
              <label htmlFor={this.props.name}>{this.props.label}</label>
              <select {...this.props.input} className="form-control"
               disabled={this.props.readOnly}>
                <option></option>
                {this.renderRows()}
              </select>
              {/* <input className="form-control" type="search" tabIndex="0" autoComplete="off"
              autoCorrect="off" autoCapitalize="none" spellCheck="false" role="searchbox"
              aria-autocomplete="list" placeholder='Informe o fornecedor' /> */}
            </div>
          </Grid>
        )
    }
}

const mapStateToProps = state => ({list: state.storageLocation.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SelectStorageLocation)