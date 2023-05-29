import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, voluptates officiis nesciunt tempora nulla delectus consectetur inventore optio similique vitae? Voluptates autem culpa quidem minus hic nemo corrupti tempora impedit!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  args: {},
}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
