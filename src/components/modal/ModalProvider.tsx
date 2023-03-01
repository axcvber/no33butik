import { useAppStore } from '@/store'
import React, { ReactNode } from 'react'
import RecoverPassModal from './RecoverPassModal'
import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'

export enum MODAL_TYPES {
  SIGN_IN_MODAL = 'SIGN_IN_MODAL',
  SIGN_UP_MODAL = 'SIGN_UP_MODAL',
  RECOVER_PASS_MODAL = 'RECOVER_PASS_MODAL',
}

const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.SIGN_IN_MODAL]: SignInModal,
  [MODAL_TYPES.SIGN_UP_MODAL]: SignUpModal,
  [MODAL_TYPES.RECOVER_PASS_MODAL]: RecoverPassModal,
}

const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // const { modalType, modalProps } = useAppSelector((state) => state.modal)
  const { modal } = useAppStore()
  const { modalType, modalProps } = modal

  const renderComponent = () => {
    const ModalComponent = MODAL_COMPONENTS[modalType]
    if (!ModalComponent) {
      return null
    }
    return <ModalComponent {...modalProps} />
  }

  return (
    <React.Fragment>
      {renderComponent()}
      {children}
    </React.Fragment>
  )
}

export default ModalProvider
