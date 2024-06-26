export default (state, action) => {
    switch(action.type) {
        case 'DELETE_REFUELING':
            return{
                ...state,
                refuels: state.refuels.filter(refuel => refuel.id !==
                    action.payload)
            }
            case 'ADD_REFUELING':
            return{
                ...state,
                refuels: [action.payload, ...state.refuels]
            }


        default:
            return state;
    }
}