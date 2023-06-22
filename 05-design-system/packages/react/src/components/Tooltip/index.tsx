import * as TooltipRadix from '@radix-ui/react-tooltip'
import { ContainerTooltip, TooltipRadixContent } from './styles'
import { ReactElement } from 'react'

export interface TooltipProps {
  content: string
  children: ReactElement
}
export function Tooltip({ content, children }: TooltipProps) {
  return (
    <ContainerTooltip>
      <TooltipRadix.Provider>
        <TooltipRadix.Root>
          <TooltipRadix.Trigger asChild>
            {/*
              <button className="IconButton">Teste</button>
            */}
            {children}
          </TooltipRadix.Trigger>
          <TooltipRadix.Portal>
            <TooltipRadixContent sideOffset={5}>
              {content}
              <TooltipRadix.Arrow className="TooltipArrow" />
            </TooltipRadixContent>
          </TooltipRadix.Portal>
        </TooltipRadix.Root>
      </TooltipRadix.Provider>
    </ContainerTooltip>
  )
}
