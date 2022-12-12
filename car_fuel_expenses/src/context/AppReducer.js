export default (state, action) => {
    switch(action.type) {
        case 'DELETE_REFUELING':
            return{
                ...state,
                refuels: state.refuels.filter(refuel => refuel.id !==
                    action.payload)
            }
        default:
            return state;
    }
}