import { NavLink } from 'react-router-dom';
import { MdLock } from 'react-icons/md';

import { useSidebarStore } from '../../../store/sidebarStore';

function SideBarItem({ Icon, title, blocked, href, text }) {
	const hideSideBar = useSidebarStore(state => state.hideSidebar);
	const handleClick = () => {
		hideSideBar();
	};
	return (
		<li onClick={handleClick}>
			<NavLink
				to={href}
				title={title}
				className={`sidebar-nav-link ${blocked ? 'is-blocked' : ''}`}
			>
				<Icon
					className={`sidebar-nav-link__icon ${blocked ? 'is-blocked' : ''}`}
				/>
				<span
					className={`sidebar-nav-link__text ${blocked ? 'is-blocked' : ''}`}
				>
					{text}
				</span>
				{blocked && (
					<MdLock className='sidebar-nav-link__icon is-blocked-icon' />
				)}
			</NavLink>
		</li>
	);
}

export default SideBarItem;
