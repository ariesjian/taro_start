import Action from '../utils/action'

export const updateState = (namespace: string, payload?: any) => Action(`${namespace}/updateState`, payload)
export const testLogin = ({ id, callback }) => Action('main/testLogin', { id, callback })
export const footMatchEventlist = ({ id, callback }) => Action('main/footMatchEventlist', { id, callback })

