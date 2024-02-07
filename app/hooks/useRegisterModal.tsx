import { create } from 'zustand'
interface HookProps {
    isOpen: boolean;
    onClose: () => void
    onOpen: () => void;
}
const useRegisterModal = create<HookProps>((set) => ({
    isOpen: false,
    onClose: () => set({ isOpen: false }),
    onOpen: () => set({ isOpen: true })
}))
export default useRegisterModal;