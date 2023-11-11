import { create } from 'zustand'

export const useSidebarStore = create(set => (
    {
        showSidebar: false,
        launchSidebar() {set({showSidebar: true})},
        hideSidebar() {set({showSidebar: false})},
    }
)
)