import { useSelector } from "react-redux"

import Card from "../../components/Card"
import * as S from './styles'
import { RootReducer } from "../../store"

const CardsDisplay = () => {

    const { items } = useSelector((state: RootReducer) => state.contatos)

    return (
        <S.MainCardsContainer>
            <ul>
                {items.map((c) => (
                    <li key={c.phone}>
                        <Card id={c.id} contactName={c.contactName} email={c.email} phone={c.phone} />
                    </li>
                ))}
            </ul>
        </S.MainCardsContainer>
    )
}

export default CardsDisplay