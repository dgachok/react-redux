import { APP_NAVIGATE, INCREMENT, GET_PHOTOS, ADD_TODO, TOGGLE_TODO } from '../actions/app';

const INITIAL_STATE = {
    scene: 'home',  // the initial scene
    count: 0,
    todos: []
};

const todo = (state = {}, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: state.count++,
                text: action.text,
                completed: false
            };
        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state
            }
            return Object.assign({}, state, {
                completed: !state.completed
            });

        default:
            return state
    }
};

const todos = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [
                ...state.todos,
                todo(state, action)
            ]};
        case TOGGLE_TODO:
            return { ...state, todos: state.todos.map(t =>
                todo(t, action)
            )};
        case APP_NAVIGATE:
            return { ...state, scene: action.payload};
        case INCREMENT:
            return { ...state, count: state.count + 1};
        case GET_PHOTOS:
            return { ...state, photos: action.payload};
        default:
            return state
    }
};

export default todos