import { useState } from 'react'
import * as S from './styles'

type Props = {
    name: string
    email: string
    phone: number
}

const Card = ({ name, email, phone }: Props) => {

    const [isEditing, setIsEditing] = useState(false)

    return (
        <S.CardContainer>
            <S.CardTitle>
                <h2>{name}</h2>
                <span>X</span>
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