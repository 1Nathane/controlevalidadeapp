import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import SummaryData from '../batch/SummaryData'
import NextToExpire from './nextToExpire'
import TabsFooter from '../common/tab/tabsFooter'
import Grid from '../common/layout/grid'

class Dashboard extends Component {

    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <SummaryData />
                    </Row>
                </Content>
                <TabsFooter />
                <Grid cols="2 2"></Grid>
                <Grid cols="12 8">
                    <NextToExpire />
                </Grid>
                <Grid cols="2 2"></Grid>


            </div>
        )
    }
}

export default Dashboard