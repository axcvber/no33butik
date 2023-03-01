import { create } from 'zustand'
import { createModalSlice, ModalSlice } from './slices/modalSlice'

type StoreState = ModalSlice
// type StoreState = ProductSlice & CartSlice

export const useAppStore = create<StoreState>()((...a) => ({
  ...createModalSlice(...a),
}))
