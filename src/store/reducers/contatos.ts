import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
    items: Contato[]
}

const initialState: ContatosState = {
    items: [
        {
            id: 1,
            contactName: 'Victor Freire',
            email: 'victorfreire@email.com',
            phone: 998765432
        },
        {
            id: 2,
            contactName: 'Yoana Dimitrova',
            email: 'yoanadimitrova@email.com',
            phone: 976543210
        },
        {
            id: 3,
            contactName: 'Isabella Oliveira',
            email: 'isadimitrova@email.com',
            phone: 965432109
        }
    ]
}

const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(contato => contato.id !== action.payload)
        }
    }
})

export const { remove } = contatosSlice.actions

export default contatosSlice.reducer