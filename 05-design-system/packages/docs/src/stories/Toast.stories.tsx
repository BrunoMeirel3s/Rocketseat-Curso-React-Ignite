import type { StoryObj, Meta } from '@storybook/react'
import { Button, ToastIgnite as Toast, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {
    children: (
      <>
        <Button variant="primary">Abrir modal</Button>
        <Toast
          title="Agendamento realizado com sucesso"
          description="Segunda-feira, 19 de Junho às 17h"
          openModal={true}
        ></Toast>
      </>
    ),
  },
  onClick: {
    action: 'click',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    description: 'Segunda-feira, 19 de Junho às 17h',
  },
}
