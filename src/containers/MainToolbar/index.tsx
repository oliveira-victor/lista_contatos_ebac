import { useState } from 'react'
import * as S from './styles'

const MainToolbar = () => {

    const [isAddingContact, setIsAddingContact] = useState(false)

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
                    <form>
                        <S.addContactInput type="text" placeholder='Contact name' />
                        <S.addContactInput type="text" placeholder='E-mail' />
                        <S.addContactInput type="text" placeholder='Phone number' />
                        <S.NewContactBtn>Adicionar contato</S.NewContactBtn>
                    </form>
                ) : ''
            }
        </S.MenuContainer >
    )
}

export default MainToolbar