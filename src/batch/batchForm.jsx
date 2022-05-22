import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './batchActions'
import LabelAndInput from '../common/form/labelAndInput'
import SelectProvider from '../provider/SelectProvider'
import SelectProduct from '../product/SelectProduct'
import BatchStatus from './batchStatus'


class BatchForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='product_id' component={SelectProduct} readOnly={readOnly}
                        label='Produto' cols='12 4' placeholder='Informe o produto' />
                    <Field name='provider_id' component={SelectProvider} readOnly={readOnly}
                    label='Fornecedor' cols='12 4' placeholder='Informe o fornecedor' />
                    <Field name='inputDate' component={LabelAndInput} readOnly={readOnly}
                        type='Date' label='Data de entrada' cols='6 2' />
                    <Field name='outputDate' component={LabelAndInput} readOnly={readOnly}
                        type='Date' label='Data de validade' cols='6 2' />
                    <Field name='quantity' component={LabelAndInput} readOnly={readOnly}
                        type='Number' label='Quantidade de produtos' cols='6 4' placeholder='Informe a quantidade de produtos do lote' />
                    <Field name='status' component={BatchStatus} readOnly={readOnly}
                        label='Status' cols='6 4' placeholder='Informe o status do lote' />
                    
                 
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BatchForm = reduxForm({form: 'batchForm', destroyOnUnmount: false})(BatchForm)
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BatchForm)
