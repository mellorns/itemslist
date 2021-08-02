import {InferActionsType} from "./redux-store";
import {commentsType, itemType} from "../types/types";


const initialState = {
    items: [{
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        name: 'IphoneX',
        count: 20,
        size: {
            width: 200,
            height: 200
        },
        weight: 200,
        comments: [
            {
                id: 1,
                productId: 1,
                description: 'some text here1',
                date: '14:00 22.08.2021'
            },
            {
                id: 2,
                productId: 1,
                description: 'some text here2',
                date: '14:00 22.08.2021'
            }
        ] as Array<commentsType>,
        description: 'The best proposition',
        collar: 'red'
    },
        {
            id: 2,
            imageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
            name: 'IphoneXS',
            count: 15,
            size: {
                width: 200,
                height: 200
            },
            weight: 200,
            comments: [
                {
                    id: 1,
                    productId: 2,
                    description: 'some text here',
                    date: '14:00 22.08.2021'
                },
                {
                    id: 2,
                    productId: 2,
                    description: 'some text here',
                    date: '14:00 22.08.2021'
                }
            ] as Array<commentsType>,
            description: 'The best proposition',
            collar: 'red'
        },
        {
            id: 3,
            imageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
            name: 'Iphone12',
            count: 30,
            size: {
                width: 200,
                height: 200
            },
            weight: 200,
            comments: [{
                id: 1,
                productId: 3,
                description: 'some text here',
                date: '14:00 22.08.2021'
            },
                {
                    id: 2,
                    productId: 3,
                    description: 'some text here',
                    date: '14:00 22.08.2021'
                }] as Array<commentsType>,
            description: 'The best proposition',
            collar: 'red'
        }
    ] as Array<itemType>,
    item: null as itemType | null
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>

function assignObjects(dest: any, ...objects: any) {
    for (let obj of objects) {
        if (typeof obj != 'object') continue;
        for (let prop in obj) {
            if (Array.isArray(obj[prop])) {
                dest[prop] = [...obj[prop]]
            } else if (typeof obj[prop] == 'object') {
                dest[prop] = assignObjects({}, obj[prop])
            } else {
                dest[prop] = obj[prop]
            }
        }
    }
    return dest;
}

export const itemsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'DELETE_ITEM' :
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.itemId)
            }
        case 'ADD_ITEM':
            let last = state.items.length - 1
            let item = {
                id: state.items[last] ? state.items[last].id + 1 : 1,
                imageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
                name: action.data.name,
                count: action.data.count,
                size: {
                    width: action.data.width,
                    height: action.data.height
                },
                weight: action.data.weight,
                comments: [],
                description: action.data.description,
                collar: action.data.collar,
            }
            return {
                ...state,
                items: [...state.items, item]
            }
        case 'SET_ITEM':
            return {
                ...state,
                item: state.items[action.id]
            }
        case 'UPDATE_ITEM':
            return {
                ...state,
                // items: [...state.items , ...action.data]
            }
        case 'ADD_COMMENT':

            return {
                ...state
            }
        case 'DELETE_COMMENT':
            const updatedState = assignObjects({}, state)
            updatedState.item.comments = updatedState.item.comments.filter((comment: itemType )=> comment.id !== action.id)
            return {
                ...updatedState
            }
        default:
            return state
    }
}

export const actions = {
    deleteItem: (itemId: number) => ({type: 'DELETE_ITEM', itemId} as const),
    addItem: (data: any) => ({type: 'ADD_ITEM', data} as const),
    setItem: (id: number) => ({type: 'SET_ITEM', id} as const),
    deleteComment: (id: number, productId: number) => ({type: 'DELETE_COMMENT', id, productId} as const),
    addComment: (data: any) => ({type: 'ADD_COMMENT', data} as const),
    updateItem: (data: any) => ({type: 'UPDATE_ITEM', data} as const)
}