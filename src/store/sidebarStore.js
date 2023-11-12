import { create } from 'zustand'

export const useSidebarStore = create(set => (
    {
        showSidebar: false,
        launchSidebar() {
            const body= document.getElementsByTagName('body');
            body[0].classList.add('scroll-block');
            set({showSidebar: true});
        },
        hideSidebar() {
            const body= document.getElementsByTagName('body');
            body[0].classList.remove('scroll-block');
            set({showSidebar: false})
        },
    }
)
)