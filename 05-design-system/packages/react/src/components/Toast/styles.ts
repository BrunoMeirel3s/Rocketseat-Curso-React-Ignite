import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  button: {
    all: 'unset',
  },

  '.ToastViewport': {
    '--viewport-padding': '25px',
    position: 'fixed',
    bottom: '0px',
    right: '0px',
    display: 'flex',
    'flex-direction': 'column',
    padding: 'var(--viewport-padding)',
    gap: '10px',
    width: '390px',
    'max-width': '100vw',
    margin: '0',
    'list-style': 'none',
    'z-index': '9999',
    outline: 'none',
  },

  '.ToastRoot': {
    fontFamily: 'Roboto',
    'background-color': '$gray600',
    'border-radius': '6px',
    'box-shadow':
      'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
    position: 'relative',
  },

  '.ToastTitle': {
    fontSize: '$lg',
    fontWeight: '$bold',
    color: '$white',
  },

  '.ToastDescription': {
    fontSize: '$sm',
    color: '$gray200',
    fontWeight: '$normal',
  },

  '.CloseButton': {
    position: 'absolute',
    top: '$3',
    right: '$3',
    svg: {
      color: '$white',
    },
  },

  '.ToastRoot[data-state="open"]': {
    animation: 'slideIn 500ms cubic-bezier(0.16, 1, 0.3, 1)',
  },
  '.ToastRoot[data-state="closed"]': {
    animation: 'hide 100ms ease-in',
  },
  '.ToastRoot[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '.ToastRoot[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '.ToastRoot[data-swipe="end"]': {
    animation: 'swipeOut 100ms ease-out',
  },

  '@keyframes hide': {
    from: {
      opacity: '1',
    },
    to: {
      opacity: '0',
    },
  },

  '@keyframes slideIn': {
    from: {
      transform: 'translateX(calc(100% + var(--viewport-padding)))',
    },
    to: {
      transform: 'translateX(0)',
    },
  },

  '@keyframes swipeOut': {
    from: {
      transform: 'translateX(var(--radix-toast-swipe-end-x))',
    },
    to: {
      transform: 'translateX(calc(100% + var(--viewport-padding)))',
    },
  },
})
