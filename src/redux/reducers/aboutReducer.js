const initData = {
  data: {}
}

const about = (state = initData, action) => {
  switch (action.type) {
    case 'SAVE_DATA':
      return state.data = action.data
    default:
      return state
  }
}

export default about
