import { connect } from 'react-redux'
import * as actions from '../actions/app';

// import the component to map
import App from '../components/App';

// this returns the pieces of the state
const mapStateToProps = (state) => {
  return state.app;
}

// map actions to this.props.someFunction
const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (targetScene) => {
      dispatch(appNavigate(targetScene));
    },

    fetch: () => {
      dispatch(actions.fetch());
    }
  }
}

// map the state
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
