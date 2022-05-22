import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ChartBar from './ChartBar'
import Grid from '../common/layout/grid'
import ChartLine from './ChartLine'
import ChartPie from './ChartPie'

import './Chart.css'
class Report extends Component {

    render() {

        return (
            <div>
                <ContentHeader title='Relatórios' small='Versão 1.0' />
                <Content>
                    <Grid cols="12 4">
                        <ChartBar></ChartBar>
                    </Grid>
                    <Grid cols="12 4">
                        <ChartLine></ChartLine>
                    </Grid>
                    <Grid cols="12 4">
                        <ChartPie></ChartPie>
                    </Grid>
                </Content>
            </div>
        )
    }
}

export default Report