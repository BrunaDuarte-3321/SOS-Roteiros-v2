import { HeaderContainer, NavLinkContainer } from './styles'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logosos.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="" className="container" />
      <NavLinkContainer>
        <NavLink to="/proposta">Nossa proposta</NavLink>
        <NavLink to="/proposta">Cadastrar/Logar</NavLink>
      </NavLinkContainer>
    </HeaderContainer>
  )
}
