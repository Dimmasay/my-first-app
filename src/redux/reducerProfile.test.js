import reducerProfile, {addPostAC, deletePostAC} from "./reducerProfile";


let state = {
    posts: [
        {message: 'Hi, how are you?', like: 15, id: 1},
        {message: 'Happy birthday!!!', like: 15, id: 2},
        {message: 'It`s my first post', like: 3, id: 3},
    ],
}

test('the post must be added', () => {
    //Test data action/thunk
    const action = addPostAC('New message text')
    //Dispatching action
    let  newState = reducerProfile(state, action)
    //Expectation
    expect(newState.posts.length).toBe(4);
});
test('the message in post must be correctly', () => {
    //Test data action/thunk
    const action = addPostAC('New message text')
    //Dispatching action
    let  newState = reducerProfile(state, action)
    //Expectation
    expect(newState.posts[3].message).toBe('New message text');
});
test('length of array must become less', () => {
    //Test data, action/thunk
    const action = deletePostAC(2)
    //Dispatching action
    let  newState = reducerProfile(state, action)
    //Expectation

    expect(newState.posts.length).toBe(2);
});
