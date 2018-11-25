import React from 'react'
import { Box, Background } from 'serverless-design-system'

import { AppContainerNew as AppContainer }  from 'src/components'
import SearchField from './Field'
import SearchHeading from './Heading'
import SearchFilters from './Filters'

export default class ExamplesSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: {}
        }

        this.sendResultsToProps = this.sendResultsToProps.bind(this)
    }

    sendResultsToProps(newFilter) {
        const newFilterState = Object.assign(this.state.filter, newFilter)
        const newFilterStateClean = this.removeFalsy(newFilterState)
        this.setState({filter: newFilterStateClean})
        this.props.refreshResults(newFilterStateClean)
    }

    removeFalsy(obj) {
        let newObj = {}
        Object.keys(obj).forEach((prop) => {
            if (obj[prop] && obj[prop].length) { newObj[prop] = obj[prop] }
        })
        return newObj
    }

    render() {
        return (
            <Background background='#f7f7f7'>
                <AppContainer>
                    <Box
                        color='black'
                        mb='62px'
                    >
                        <SearchHeading />
                        <SearchField refreshSearch={this.sendResultsToProps}/>
                        <Box display={['none', 'none', 'block']}>
                            <SearchFilters refreshFilters={this.sendResultsToProps}/>
                        </Box>
                    </Box>
                </AppContainer>
            </Background>
        )
    }
    
}
                   