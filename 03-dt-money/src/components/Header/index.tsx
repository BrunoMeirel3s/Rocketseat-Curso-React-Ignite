import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog' /** Biblioteca de components com foco em acessibilidade */

import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="Logotipo" />
        {/**
         * Dialog.Root especifica o local no qual ficará o modal da nova
         * transação, Dialog.Trigger é o local do button que irá disparar o modal
         * o NewTransactionModal é um styled-components que referencia
         * o component de modal do radix e é ele que é exibido em tela
         */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
