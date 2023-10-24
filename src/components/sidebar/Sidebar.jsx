// SCSS
import '../../scss/components/sidebar/sidebar.scss'

// Custom components
import SideBarHeader from './header/SidebarHeader'

function Sidebar() {
    return (
        <>
            <div aria-hidden="true" className="modal-backdrop"/>
            <aside className="sidebar-container">
                <SideBarHeader/>
            </aside>
        </>
    )
}

export default Sidebar