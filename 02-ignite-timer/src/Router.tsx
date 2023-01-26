/**
 * O arquivo Router será utilizado para realizar o roteamento
 * em cima da interface padrão do aplicativo, o que nos permite
 * criar o efeito de SPA
 */
import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout/index'
import { History } from './pages/History/index'
import { Home } from './pages/Home/index'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
