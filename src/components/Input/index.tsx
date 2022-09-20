import { InputContainer } from './styles'
import { CaretDown } from 'phosphor-react'

export const Input = () => {
  return (
    <InputContainer>
      <input type="text" placeholder="Selecione seu destino" />
      <CaretDown size={16} />
      <input type="number" placeholder="Quantos dias?" />
      <CaretDown size={16} />
      <button>Buscar</button>
    </InputContainer>
  )
}
