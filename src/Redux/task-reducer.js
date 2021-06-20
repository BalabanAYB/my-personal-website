import { taskAPI } from '../api/api'

const GET_LIST = 'GET_LIST'
const LENGTH_FILTER = 'LENGTH_FILTER'
const SET_FILTER = 'SET_FILTER'

export const getList = (list) => ({ type: GET_LIST, list })
export const setFilter = (filter, view) => ({ type: SET_FILTER, payload: [filter, view] })


export const getListThunk = () => async (dispatch) => {
    let response = await taskAPI.getList()
    dispatch(getList(response.data.data))
}

const initialState = {
    list: [],
    filter: [],
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST: {

            return {
                ...state,
                list: action.list
            }
        }
        case SET_FILTER: {

            return {
                ...state,
                filter: action.payload
            }
        }

        default: return state
    }
}

export default taskReducer