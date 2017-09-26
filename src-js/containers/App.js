import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Card from '../components/Card'
import * as cardActions from '../actions/CardActions'

class App extends Component {
    render() {
        const { currentStep, title  } = this.props;
        const { checkTemplate, stepBackward } = this.props.cardActions
        return  <form action='' className=''>
                    <Card
                        currentStep={currentStep}
                        title={title}
                        checkTemplate={checkTemplate}
                        stepBackward={stepBackward}
                    />
                </form>
    }
}

function mapStateToProps (state) {
    return {
        currentStep: state.currentStep,
        title: state.title
    }
}

function mapDispatchToProps(dispatch) {
    return {
        cardActions: bindActionCreators(cardActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)