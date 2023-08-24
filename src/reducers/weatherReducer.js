export const INITIAL_STATE = {
    weatherData: null,
    isLoading: false,
    country: "egypt",
    city: "cairo"

}

export const weatherReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_START":
            return {
                isLoading: true,
                weatherData: null
            }

        case "FETCH_SUCCESS":
            return {
                isLoading: false,
                weatherData: action.payload,
                country: "",
                city: ""
            }

        case "FETCH_ERROR":
            return {
                isLoading: false,
                country: "",
                city: ""
            }
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        default:
            return state
    }

}
