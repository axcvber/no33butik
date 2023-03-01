import { useAppStore } from '@/store'
import React from 'react'
import Modal from '../shared/Modal'
import { MODAL_TYPES } from './ModalProvider'
import RecoverPassForm from '../auth/RecoverPassForm'

const RecoverPassModal = () => {
  const { modal, hideModal, showModal } = useAppStore()

  const onHideModal = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    hideModal()
  }

  const showSingInnModal = () => {
    showModal({ modalType: MODAL_TYPES.SIGN_IN_MODAL })
  }

  return (
    <Modal
      title='Reset Password'
      description='Enter your email to receive instructions on how to reset your password.'
      isOpen={modal.isOpen}
      onClose={onHideModal}
      size='sm'
    >
      <RecoverPassForm signInCallback={showSingInnModal} />
    </Modal>
  )
}

export default RecoverPassModal
