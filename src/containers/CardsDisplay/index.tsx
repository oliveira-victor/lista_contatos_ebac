import { useSelector } from "react-redux"

import Card from "../../components/Card/Card"
import * as S from './styles'
import { RootReducer } from "../../store"

const CardsDisplay = () => {

    const { contatos } = useSelector((state: RootReducer) => state)

    return (
        <S.MainCardsContainer>
            <ul>
                {contatos.map((c) => (
                    <li key={c.phone}>
                        <Card name={c.contactName} email={c.email} phone={c.phone} />
                    </li>
                ))}
            </ul>
        </S.MainCardsContainer>
    )
}

export default CardsDisplay