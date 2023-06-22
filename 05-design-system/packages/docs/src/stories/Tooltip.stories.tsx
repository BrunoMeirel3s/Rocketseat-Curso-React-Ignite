import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps, Button } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    children: (
      <>
        <Tooltip content="Teste de tooltip ignite">
          <Button variant="primary">Teste ignite</Button>
        </Tooltip>
      </>
    ),
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    content: 'Adicionar a biblioteca',
  },
}
