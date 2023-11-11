import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remove, edit } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Card = ({ name, email: originalEmail, phone: originalPhone, id }: Props) => {

    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false)
    const [nameInput, setNameInput] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        if (name.length > 0) {
            setNameInput(name)
        }
    }, [name])

    useEffect(() => {
        if (originalEmail.length > 0) {
            setEmail(originalEmail)
        }
    }, [originalEmail])

    useEffect(() => {
        if (originalPhone.length > 0) {
            setPhone(originalPhone)
        }
    }, [originalPhone])

    function cancelEditing() {
        setIsEditing(false)
        setNameInput(name)
        setEmail(originalEmail)
        setPhone(originalPhone)
    }

    return (
        <S.CardContainer>
            <S.CardTitle>
                <S.NameTypeField type='string' disabled={!isEditing} value={nameInput} onChange={event => setNameInput(event.target.value)} />
                <span onClick={() => dispatch(remove(id))}>X</span>
            </S.CardTitle>
            <S.UserInfo>E-mail</S.UserInfo>
            <S.TypeField type='string' disabled={!isEditing} value={email} onChange={event => setEmail(event.target.value)} />
            <S.UserInfo>Telefone</S.UserInfo>
            <S.TypeField type='number' disabled={!isEditing} value={phone} onChange={event => setPhone(event.target.value)} />
            {isEditing ? (
                <S.EditingBtnsContainer>
                    <S.IsEditingBtn style={{ backgroundColor: '#32b338' }} onClick={() => {
                        dispatch(
                            edit({
                                name,
                                email,
                                phone,
                                id
                            })
                        )
                        setIsEditing(false)
                    }}>Salvar</S.IsEditingBtn>
                    <S.IsEditingBtn style={{ backgroundColor: '#e83838' }} onClick={cancelEditing}>Cancelar</S.IsEditingBtn>
                </S.EditingBtnsContainer>
            ) : (
                <S.EditCardBtn onClick={() => setIsEditing(true)}>Editar</S.EditCardBtn>
            )}

        </S.CardContainer>
    )
}

export default Card