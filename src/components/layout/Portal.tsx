import React, { ReactNode, useState, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'

interface IPortal {
  children: ReactNode
  wrapperId?: string
}

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement('div')
  wrapperElement.setAttribute('id', wrapperId)
  document.body.appendChild(wrapperElement)
  return wrapperElement
}

const Portal: React.FC<IPortal> = ({ children, wrapperId = 'overlay' }) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null)

  useLayoutEffect(() => {
    let element: HTMLElement | null = document.getElementById(wrapperId)

    let systemCreated = false
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      systemCreated = true
      element = createWrapperAndAppendToBody(wrapperId)
    }

    setWrapperElement(element)

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [wrapperId])

  if (wrapperElement === null) return null

  return createPortal(children, wrapperElement)
}

export default Portal
