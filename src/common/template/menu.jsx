import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashboard' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='storageLocation'
                label='Locais' icon='map-marker' />
            <MenuItem path='brand'
                label='Marcas' icon='tag' />
            <MenuItem path='unit'
                label='Unidades' icon='underline' />
            <MenuItem path='provider'
                label='Fornecedores' icon='industry' />
            <MenuItem path='product'
                label='Produtos' icon='cube' />
            <MenuItem path='batch'
                label='Lotes' icon='cubes' />
            <MenuItem path='report'
                label='Relatórios' icon='pie-chart' />
        </MenuTree>
    </ul>
)
