import { HeaderContainer } from './styles'
import Logo from './../../assets/Logo.svg'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="logotipo de dois triangulos invertidos" />
      <nav>
        <NavLink to="/" title="timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="historico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
