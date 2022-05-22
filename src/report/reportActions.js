import axios from 'axios'
import consts from '../consts'

const controleValidadeUser = JSON.parse(localStorage.getItem('_controlevalidade_user'))


export function getList() {
    const request = axios.get(`${consts.API_URL}/batch/outputdateyear?_id=_${controleValidadeUser['email']}`)
    return {
        type: 'REPORT_FETCHED',
        payload: request
    }
}
