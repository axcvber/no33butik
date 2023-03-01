import { useAppStore } from '@/store'
import { signIn } from 'next-auth/react'
import React from 'react'
import Modal from '../shared/Modal'
import { MODAL_TYPES } from './ModalProvider'
import LoginForm from '../auth/LoginForm'

const SignInModal = () => {
  const { modal, hideModal, showModal } = useAppStore()

  const onHideModal = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    hideModal()
  }

  const showRecoverPassModal = () => {
    showModal({ modalType: MODAL_TYPES.RECOVER_PASS_MODAL })
  }

  const showSingUpModal = () => {
    showModal({ modalType: MODAL_TYPES.SIGN_UP_MODAL })
  }

  return (
    <Modal title='Welcome Back!' isOpen={modal.isOpen} onClose={onHideModal} size='sm'>
      <LoginForm signUpCallback={showSingUpModal} recoverPassCallback={showRecoverPassModal} />
    </Modal>
  )
}

export default SignInModal
