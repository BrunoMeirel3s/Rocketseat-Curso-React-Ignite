import { Check } from 'phosphor-react'
import { CheckBoxContainer, CheckBoxIndicator } from './styles'
import { ComponentProps } from 'react'

export interface CheckBoxProps
  extends ComponentProps<typeof CheckBoxContainer> {}

export function CheckBox(props: CheckBoxProps) {
  return (
    <CheckBoxContainer {...props}>
      <CheckBoxIndicator asChild>
        <Check weight="bold" />
      </CheckBoxIndicator>
    </CheckBoxContainer>
  )
}
