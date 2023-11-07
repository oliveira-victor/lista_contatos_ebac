import * as S from './styles'

const Card = () => {
    return (
        <S.CardContainer>
            <S.CardTitle>
                <h2>John Doe</h2>
                <span>X</span>
            </S.CardTitle>
            <S.UserInfo>E-mail</S.UserInfo>
            <p>johndoe@gmail.com</p>
            <S.UserInfo>Telefone</S.UserInfo>
            <p>82 9 9876-5432</p>
            <S.EditCardBtn>Editar</S.EditCardBtn>
        </S.CardContainer>
    )
}

export default Card