import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Card from '../components/Card'
import * as cardActions from '../actions/CardActions'

class App extends Component {
    render() {
        const { currentStep, inputs  } = this.props;
        const { changePosition, saveInputHandler, printData } = this.props.cardActions;
        return  <form action='' className=''>
                    <Card
                        currentStep={currentStep}
                        changePosition={changePosition}
                        saveInputHandler={saveInputHandler}
                        inputs={inputs}
                        printData={printData}
                    />
                </form>
    }
}

function mapStateToProps (state) {
    return {
        currentStep: state.currentStep,
        title: state.title,
        inputs: state.inputs
    }
}

function mapDispatchToProps(dispatch) {
    return {
        cardActions: bindActionCreators(cardActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)