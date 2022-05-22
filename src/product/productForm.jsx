import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './productActions'
import LabelAndInput from '../common/form/labelAndInput'
import SelectUnit from '../unit/SelectUnit'
import SelectBrand from '../brand/SelectBrand'
import SelectStorageLocation from '../storageLocation/SelectStorageLocation'

class ProductForm extends Component {


    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 8' placeholder='Informe o nome' />
                    <Field name='reference' component={LabelAndInput} readOnly={readOnly}
                        label='Referência' cols='12 4' placeholder='Informe o nome' />
                    <Field name='storageLocation_id' component={SelectStorageLocation} readOnly={readOnly}
                        label='Local de armazenamento' cols='12 4' placeholder='Informe o local' />
                    <Field name='unit_id' component={SelectUnit} readOnly={readOnly}
                        label='Unidade' cols='12 4' placeholder='Informe a unidade' />
                    <Field name='brand_id' component={SelectBrand} readOnly={readOnly}
                        label='Marca' cols='12 4' placeholder='Informe a marca' />
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

ProductForm = reduxForm({form: 'productForm', destroyOnUnmount: false})(ProductForm)
const selector = formValueSelector('productForm')
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProductForm)
