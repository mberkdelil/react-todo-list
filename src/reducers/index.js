import { EKLE, ISARETLE, TEMIZLE } from "../actions";

const INITIAL_STATE = {

    liste: [
        { id: 1, title: "Do The Shopping", completed: false },
        { id: 2, title: "Learn React", completed: true },
        { id: 3, title: "Write Code", completed: false },
        { id: 4, title: "Wash The Car", completed: false }

    ]
};

export const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EKLE:
            return {
                ...state, liste: [...state.liste,
                {
                    id: state.liste.length + 1,
                    title: action.payload,
                    completed: false
                }
                ]
            }
        case ISARETLE:
            return {

                ...state, liste: state.liste.map(item => item.id === action.payload ? {
                    ...item, completed: !item.completed
                } : item)
            }
        case TEMIZLE:
            return {
                ...state, liste: state.liste.filter(item => item.completed === false)
            }
        default: return state;
    }

}