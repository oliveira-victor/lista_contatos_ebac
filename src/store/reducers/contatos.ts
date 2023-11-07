import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const contatosSlice = createSlice({
    name: 'contatos',
    initialState: [
        new Contato('Victor Freire', 'victorfreire@email.com', 998765432, 1),
        new Contato('Yoana Dimitrova', 'yoana@email.com', 998765432, 2),
        new Contato('Isabella Oliveira', 'isadimitrova@email.com', 998765432, 3)
    ],
    reducers: {
        remove: (state, action: PayloadAction<number>) => {
            state = state.filter(contato => contato.id !== action.payload)
        }
    }
})

export const { remove } = contatosSlice.actions

export default contatosSlice.reducer