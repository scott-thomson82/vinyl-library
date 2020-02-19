import { SET_RECORDS } from "../actions"

const initialState = []

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_RECORDS:
            return action.records
            default:
                return state
    }

}

export default reducer