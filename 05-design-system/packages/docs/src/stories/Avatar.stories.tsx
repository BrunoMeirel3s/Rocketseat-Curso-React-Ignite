import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/brunomeirel3s.png',
    alt: 'Bruno Meireles',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args: {},
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
