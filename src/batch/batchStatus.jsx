import React from 'react'
import Grid from '../common/layout/grid'

export default props => (
    <Grid cols={props.cols}>
     <div className='form-group'>
        <label htmlFor={props.name}>{props.label}</label>
        <select {...props.input} className='form-control'
             id={props.name} disabled={props.readOnly}>
            <option></option>
            <option value={'ABERTO'}>ABERTO</option>
            <option value={'FINALIZADO'}>FINALIZADO</option>
        </select>
     </div>
    </Grid>
)
