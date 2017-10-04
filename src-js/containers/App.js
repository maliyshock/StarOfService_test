import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Card from '../components/Card'
import * as cardActions from '../actions/CardActions'

class App extends Component {
    render() {
        const { currentStep, formTemplates  } = this.props;
        const { changePosition, saveInputInfo, saveDateInfo, savePasswordInfo, printData } = this.props.cardActions;
        return  <form action='' className=''>
                    <Card
                        currentStep={currentStep}
                        changePosition={changePosition}
                        saveDateInfo={saveDateInfo}
                        savePasswordInfo={savePasswordInfo}
                        saveInputInfo={saveInputInfo}
                        formTemplates={formTemplates}
                        printData={printData}
                    />
                </form>
    }
}

function mapStateToProps (state) {
    return {
        currentStep: state.currentStep,
        title: state.title,
        formTemplates: state.formTemplates
    }
}

function mapDispatchToProps(dispatch) {
    return {
        cardActions: bindActionCreators(cardActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)