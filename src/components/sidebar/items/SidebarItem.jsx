import { NavLink } from 'react-router-dom';
import { MdLock } from 'react-icons/md';
import PropTypes from 'prop-types';

import { useSidebarStore } from '../../../store/sidebarStore';

function SideBarItem({ Icon, title, blocked, href, text }) {
	const hideSideBar = useSidebarStore(state => state.hideSidebar);
	const handleClick = () => {
		hideSideBar();
	};
	return (
		<li
			onClick={handleClick}
			className={`sidebar-nav-link-container ${blocked ? 'is-blocked' : ''}`}
		>
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

SideBarItem.propTypes = {
	Icon: PropTypes.element,
	title: PropTypes.string.isRequired,
	blocked: PropTypes.bool,
	href: PropTypes.string,
	text: PropTypes.string.isRequired,
};

export default SideBarItem;
