// Components
import { MdDirectionsCarFilled, MdChildCare, MdTireRepair, MdManageAccounts, MdVerified, MdOutlinePowerSettingsNew, MdSupportAgent, MdOutlineHelpOutline } from 'react-icons/md'

// Custom components
import SideBarHeader from './header/SidebarHeader'
import SidebarUser from './user/SidebarUser'
import SideBarItem from './items/SidebarItem'

// Store
import { useSidebarStore } from '../../store/sidebarStore'

function Sidebar() {
    const showSidebar = useSidebarStore(state => state.showSidebar)
    return (
        <>
            <div aria-hidden="true" className={`modal-backdrop ${showSidebar ? 'show' : ''}`} />
            <aside className={`sidebar-container ${showSidebar ? 'show' : ''}`}>
                <SideBarHeader />
                <SidebarUser />
                <nav className="sidebar-nav">
                    <section className='sidebar-nav-section'>
                        <h2 className="sidebar-nav__title">Garaje</h2>
                        <ul className="sidebar-nav-links-container">
                            <SideBarItem Icon={MdDirectionsCarFilled} href="test" title="Haz click para ver tus vehículos" text="Mis vehículos" />
                            <SideBarItem Icon={MdChildCare} href="test" title="Haz click para acceder al mecánico virtual" text="Mecánico Virtual" />
                            <SideBarItem Icon={MdTireRepair} href="test" title="Haz click para acceder a tu taller" text="Mi taller" />
                        </ul>
                    </section>
                    <section className='sidebar-nav-section'>
                        <h2 className="sidebar-nav__title">Mi Perfil</h2>
                        <ul className="sidebar-nav-links-container">
                            <SideBarItem Icon={MdManageAccounts} href="test" title="Haz click para acceder a los ajustes del perfil" text="Ajustes de mi perfil" />
                            <SideBarItem Icon={MdVerified} href="test" title="Haz click para acceder a tu suscripción" text="Mi suscripción" />
                            <SideBarItem Icon={MdOutlinePowerSettingsNew} href="test" title="Haz click para cerrar sesión" text="Cerrar sesión" />
                        </ul>
                    </section>
                    <section className='sidebar-nav-section'>
                        <h2 className="sidebar-nav__title">Ayuda</h2>
                        <ul className="sidebar-nav-links-container">
                            <SideBarItem Icon={MdSupportAgent} href="test" title="Haz click para solicitar soporte" text="Soporte" />
                            <SideBarItem Icon={MdOutlineHelpOutline} href="test" title="Haz click para acceder a las preguntas frecuentes" text="Preguntas frecuentes" />
                        </ul>
                    </section>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar