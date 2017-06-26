export const APP_NAVIGATE = 'APP_NAVIGATE';
export const INCREMENT = 'INCREMENT';
export const GET_PHOTOS = 'GET_PHOTOS';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';


export function appNavigate(value) {
    return {
        type: APP_NAVIGATE,
        payload: value
    };
}

export function appIncrement() {
    return {
        type: INCREMENT
    };
}

export function getPhotos(data) {
    return {
        type: GET_PHOTOS,
        payload: data
    };
}

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text
    }
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    }
};

