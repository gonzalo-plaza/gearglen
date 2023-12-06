// Styles
import './sidebar.scss';

// Components
import {
	MdDirectionsCarFilled,
	MdHomeFilled,
	MdChildCare,
	MdTireRepair,
	MdManageAccounts,
	MdVerified,
	MdOutlinePowerSettingsNew,
	MdSupportAgent,
	MdOutlineHelpOutline,
} from 'react-icons/md';

// Custom components
import SideBarHeader from './header/SidebarHeader';
import SidebarUser from './user/SidebarUser';
import SideBarItem from './items/SidebarItem';

// Store
import { useSidebarStore } from '../../store/sidebarStore';

function Sidebar() {
	const showSidebar = useSidebarStore(state => state.showSidebar);
	return (
		<>
			<div
				aria-hidden='true'
				className={`modal-backdrop ${showSidebar ? 'show' : ''}`}
			/>
			<aside className={`sidebar-container ${showSidebar ? 'show' : ''}`}>
				<SideBarHeader />
				<SidebarUser />
				<nav className='sidebar-nav'>
					<section className='sidebar-nav-section'>
						<h2 className='sidebar-nav__title'>Garaje</h2>
						<ul className='sidebar-nav-links-container'>
							<SideBarItem
								Icon={MdHomeFilled}
								href='/'
								title='Haz click para ir a la vista principal'
								text='Inicio'
							/>
							<SideBarItem
								Icon={MdDirectionsCarFilled}
								href='/mis-vehiculos'
								title='Haz click para ver tus vehículos'
								text='Mis vehículos'
							/>
							<SideBarItem
								Icon={MdChildCare}
								blocked='true'
								href='/mecanico-virtual'
								title='Haz click para acceder al mecánico virtual'
								text='Mecánico Virtual'
							/>
							<SideBarItem
								Icon={MdTireRepair}
								blocked='true'
								href='/mi-taller'
								title='Haz click para acceder a tu taller'
								text='Mi taller'
							/>
						</ul>
					</section>
					<section className='sidebar-nav-section'>
						<h2 className='sidebar-nav__title'>Mi Perfil</h2>
						<ul className='sidebar-nav-links-container'>
							<SideBarItem
								Icon={MdManageAccounts}
								blocked='true'
								href='/mi-perfil'
								title='Haz click para acceder a los ajustes del perfil'
								text='Ajustes de mi perfil'
							/>
							<SideBarItem
								Icon={MdVerified}
								blocked='true'
								href='/mi-suscripcion'
								title='Haz click para acceder a tu suscripción'
								text='Mi suscripción'
							/>
							<SideBarItem
								Icon={MdOutlinePowerSettingsNew}
								blocked='true'
								href='/cerrar-sesion'
								title='Haz click para cerrar sesión'
								text='Cerrar sesión'
							/>
						</ul>
					</section>
					<section className='sidebar-nav-section'>
						<h2 className='sidebar-nav__title'>Ayuda</h2>
						<ul className='sidebar-nav-links-container'>
							<SideBarItem
								Icon={MdSupportAgent}
								blocked='true'
								href='/soporte'
								title='Haz click para solicitar soporte'
								text='Soporte'
							/>
							<SideBarItem
								Icon={MdOutlineHelpOutline}
								blocked='true'
								href='/preguntas-frecuentes'
								title='Haz click para acceder a las preguntas frecuentes'
								text='Preguntas frecuentes'
							/>
						</ul>
					</section>
				</nav>
			</aside>
		</>
	);
}

export default Sidebar;
