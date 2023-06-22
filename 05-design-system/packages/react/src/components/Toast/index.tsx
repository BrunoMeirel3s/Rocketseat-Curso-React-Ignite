import { useEffect, useState } from 'react'
import { ToastContainer } from './styles'
import * as Toast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'

export interface ToastProps {
  title: string
  description: string
  openModal: boolean
}
export function ToastIgnite({
  title,
  description,
  openModal = true,
}: ToastProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(openModal)
  }, [openModal])

  return (
    <ToastContainer>
      <Toast.Provider swipeDirection="right">
        <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
          <Toast.Title className="ToastTitle">{title}</Toast.Title>
          <Toast.Description asChild>
            <span className="ToastDescription">{description}</span>
          </Toast.Description>
          <Toast.Action className="CloseButton" asChild altText="Close">
            <button>
              <X />
            </button>
          </Toast.Action>
        </Toast.Root>
        <Toast.Viewport className="ToastViewport" />
      </Toast.Provider>
    </ToastContainer>
  )
}
