import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import Contato from '../../models/Contato'
import { addContact } from '../../store/reducers/contatos'

const MainToolbar = () => {

    const dispatch = useDispatch()

    const [isAddingContact, setIsAddingContact] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const submitNewContact = (event: FormEvent) => {
        event.preventDefault()

        if (name !== '' && email !== '' && !Number.isNaN(phone)) {
            const contactToBeAdded = new Contato(
                name,
                email,
                phone,
                1
            )
    
            dispatch(addContact(contactToBeAdded)
            )
    
            setName('')
            setEmail('')
            setPhone('')
        } else {
            alert('Por favor, preencha todos os campos.')
        }

        
    }

    return (
        <S.MenuContainer>
            <S.upperPart>
                <h1>Lista de contatos</h1>
                <S.AddBtn type="button" onClick={() => setIsAddingContact(!isAddingContact)}>
                    {isAddingContact ? 'Cancelar' : 'Adicionar novo contato'}
                </S.AddBtn>
            </S.upperPart>
            {isAddingContact ?
                (
                    <form onSubmit={submitNewContact}>
                        <S.addContactInput value={name} onChange={event => setName(event.target.value)} type="text" placeholder='Nome do contato' />
                        <S.addContactInput value={email} onChange={event => setEmail(event.target.value)} type="text" placeholder='E-mail' />
                        <S.addContactInput value={phone} onChange={event => setPhone(event.target.value)} type="number" placeholder='Phone number' />
                        <S.NewContactBtn type='submit'>Adicionar contato</S.NewContactBtn>
                    </form>
                ) : ''
            }
        </S.MenuContainer >
    )
}

export default MainToolbar