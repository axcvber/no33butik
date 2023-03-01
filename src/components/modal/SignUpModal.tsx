import { useAppStore } from '@/store'
import React from 'react'
import RegisterForm from '../auth/RegisterForm'
import Modal from '../shared/Modal'
import { MODAL_TYPES } from './ModalProvider'

const SignUpModal = () => {
  const { modal, hideModal, showModal } = useAppStore()

  const onHideModal = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    hideModal()
  }

  const showSingInnModal = () => {
    showModal({ modalType: MODAL_TYPES.SIGN_IN_MODAL })
  }

  return (
    <Modal title='Become a member' isOpen={modal.isOpen} onClose={onHideModal} size='sm'>
      <RegisterForm signInCallback={showSingInnModal} />
    </Modal>
  )
}

export default SignUpModal
