import { connect } from 'react-redux'
import { appNavigate, appIncrement, toggleTodo, addTodo} from '../actions/app';

// import the component to map
import App from '../components/App';

// this returns the pieces of the state
const mapStateToProps = (state) => {
    return {
        scene: state.scene,  // selecting one element instead of the whole thing
        count: state.count,
        photos: state.photos,
        todos: state.todos
    };
};

// map actions to 04this.props.someFunction
const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (targetContent) => {
            dispatch(appNavigate(targetContent));
        },
        increment: () => {
            dispatch(appIncrement());
        },
        add: (text) => {
            dispatch(addTodo(text));
        },
        toggle: (id) => {
            dispatch(toggleTodo(id));
        }
    }
};

// map the state
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
