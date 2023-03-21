const reducerCounter = (state, action) => {
    let newState = {...state};
    switch(action.type) {
        case 'INCREASE':
            if (!state.frozen) newState.count = state.count + 1;
            break;
        case 'DECREASE':
            if (!state.frozen) newState.count = state.count - 1;
            break;
        case 'RESET':
            if (!state.frozen) newState.count = 0;
            break;
        case 'FROZEN':
            newState.frozen = !state.frozen;
            break;
        default:
            break;
    }
    return newState;
};
export default reducerCounter;