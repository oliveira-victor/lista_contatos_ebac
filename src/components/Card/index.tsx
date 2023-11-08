import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remove } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Card = ({ contactName, email, phone, id }: Props) => {

    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false)

    return (
        <S.CardContainer>
            <S.CardTitle>
                <h2>{contactName}</h2>
                <span onClick={() => dispatch(remove(id))}>X</span>
            </S.CardTitle>
            <S.UserInfo>E-mail</S.UserInfo>
            <S.TypeField value={email} />
            <S.UserInfo>Telefone</S.UserInfo>
            <S.TypeField value={phone} />
            {isEditing ? (
                <S.EditingBtnsContainer>
                    <S.IsEditingBtn style={{ backgroundColor: '#32b338' }}>Salvar</S.IsEditingBtn>
                    <S.IsEditingBtn style={{ backgroundColor: '#e83838' }} onClick={() => setIsEditing(false)}>Cancelar</S.IsEditingBtn>
                </S.EditingBtnsContainer>
            ) : (
                <S.EditCardBtn onClick={() => setIsEditing(true)}>Editar</S.EditCardBtn>
            )}

        </S.CardContainer>
    )
}

export default Card