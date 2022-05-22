import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'
import consts from '../consts'

const INITIAL_VALUES = {}
const controleValidadeUser = JSON.parse(localStorage.getItem('_controlevalidade_user'))

export function getList() {
    const request = axios.get(`${consts.API_URL}/unit?user_email=_${controleValidadeUser['email']}`)
    return {
        type: 'UNIT_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    values['user_email'] = '_' + controleValidadeUser['email']
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${consts.API_URL}/unit/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(unit) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('unitForm', unit)
    ]
}

export function showDelete(unit) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('unitForm', unit)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('unitForm', INITIAL_VALUES)
    ]
}
