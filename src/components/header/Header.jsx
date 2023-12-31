// Styles
import './header.scss';

// Components
import {
	MdSupervisedUserCircle,
	MdMenu,
	MdOutlineCalendarMonth,
} from 'react-icons/md';

// Custom components
import NotificationsIcon from '../icons/NotificationsIcon';
import { useSidebarStore } from '../../store/sidebarStore';
function Header() {
	const launchSidebar = useSidebarStore(state => state.launchSidebar);

	const handleClick = () => {
		launchSidebar();
	};
	return (
		<header className='header-container'>
			<div>
				<button
					className='icon-item is-menu'
					onClick={handleClick}
					role='button'
					aria-label='open menu'
				>
					<MdMenu className='icon-item__content' />
				</button>
			</div>
			<div className='icons-container'>
				<div className='icon-item'>
					<NotificationsIcon />
				</div>
				<div className='icon-item'>
					<MdOutlineCalendarMonth className='icon-item__content' />
				</div>
				<div className='icon-item'>
					<MdSupervisedUserCircle className='icon-item__content' />
				</div>
			</div>
		</header>
	);
}

export default Header;
