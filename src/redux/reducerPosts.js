const ADD_POST = 'ADD-POST'
const CURRENT_TEXT_POST = 'CURRENT-TEXT-POST'


export const addPostCreator = () => {
    return {type: ADD_POST}
}
export const currentTextPostCreator = (text) => {
    return {type: CURRENT_TEXT_POST, text: text}
}

const reducerPosts = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostText,
                like: 0,
                id: 4,
            };
            state.posts.push(newPost)
            state.newPostText = '';
            return state
        case CURRENT_TEXT_POST:
            state.newPostText = action.text
            return state
        default:
            return state
    }

}

export default reducerPosts