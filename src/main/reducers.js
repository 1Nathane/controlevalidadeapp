import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import StorageLocationReducer from '../storageLocation/storageLocationReducer'
import BrandReducer from '../brand/brandReducer'
import UnitReducer from '../unit/unitReducer'
import ProviderReducer from '../provider/providerReducer'
import ProductReducer from '../product/productReducer'
import BatchReducer from '../batch/batchReducer'
import AuthReducer from '../auth/authReducer'
import ReportReducer from '../report/reportReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    storageLocation: StorageLocationReducer,
    brand: BrandReducer,
    unit: UnitReducer,
    provider: ProviderReducer,
    product: ProductReducer,
    batch: BatchReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer,
    report: ReportReducer
})

export default rootReducer
