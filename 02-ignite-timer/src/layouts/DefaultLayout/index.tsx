/**
 * O layout representa uma interface básica que será compartilhada
 * entre diferentes telas da nossa aplicação, para isso observe que
 * estamos utilizando um header e o outlet que é um componente do react
 * que irá renderizar os componentes selecionados com o react-router para
 * assim criamos o SPA
 */
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
