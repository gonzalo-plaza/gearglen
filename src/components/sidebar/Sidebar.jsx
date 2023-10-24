// SCSS
import '../../scss/components/sidebar/sidebar.scss'

// Custom components
import SideBarHeader from './header/SidebarHeader'
import SidebarUser from './user/SidebarUser'

function Sidebar() {
    return (
        <>
            <div aria-hidden="true" className="modal-backdrop"/>
            <aside className="sidebar-container">
                <SideBarHeader/>
                <SidebarUser/>
            </aside>
        </>
    )
}

export default Sidebar