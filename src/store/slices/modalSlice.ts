import { StateCreator } from 'zustand'

interface ModalState {
  isOpen: boolean
  modalType: string
  modalProps: any
}

export interface ModalSlice {
  modal: ModalState
  showModal: (data: ModalPayload) => void
  hideModal: () => void
}

type ModalPayload = {
  modalType: string
  modalProps?: any
}

export const createModalSlice: StateCreator<ModalSlice> = (set, get) => ({
  modal: {
    modalType: '',
    modalProps: {},
    isOpen: false,
  },
  showModal: (data: ModalPayload) => {
    // const modal = get().modal
    // modal.isOpen = true
    // modal.modalType = data.modalType
    // modal.modalProps = data.modalProps || {}
    set({
      modal: {
        isOpen: true,
        modalProps: data.modalProps || {},
        modalType: data.modalType,
      },
    })
  },
  hideModal() {
    const modal = get().modal
    modal.isOpen = false
    set({ modal })
  },
})
