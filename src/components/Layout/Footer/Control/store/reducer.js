const defaultState = {

}

export default (state = defaultState, action) => {
	const { type, payload } = action
	switch (type) {
		case '6666':
			return { ...state, id: payload }
		default:
			return state
	}
}