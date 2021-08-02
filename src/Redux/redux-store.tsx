import {combineReducers, createStore} from "redux";
import {itemsReducer} from "./items-reducer";
import {reducer as formReducer} from 'redux-form'

let RootReducer = combineReducers({
        itemsPage: itemsReducer,
        form: formReducer
})


type RootReducerType = typeof RootReducer
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsType<T> = T extends {[key: string]: (...arg:any[]) => infer U} ? U : never

let store = createStore(RootReducer)




export default store