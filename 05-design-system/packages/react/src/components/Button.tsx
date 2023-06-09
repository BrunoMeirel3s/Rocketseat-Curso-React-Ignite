import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  padding: '0 $4',

  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$ignite500',

        '&:disabled': {
          color: '$gray200',
        },

        '$:not(:disabled):hover': {
          background: '$ignite300',
        },
      },

      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },

        '$:not(:disabled):hover': {
          background: '$ignite500',
          color: '$white',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:disabled': {
          color: '$gray600',
          borderColor: '$gray200',
        },

        '$:not(:disabled):hover': {
          color: '$white',
        },
      },
    },
    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
