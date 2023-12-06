// Styles
import './sidebarUser.scss';

// Components
import { MdSupervisedUserCircle } from 'react-icons/md';

function SidebarUser() {
	return (
		<div className='sidebar-user'>
			<MdSupervisedUserCircle className='sidebar-user__icon' />
			<p className='sidebar-user__name'>Name Last Name</p>
			<p className='sidebar-user__email'>username@mail.com</p>
		</div>
	);
}

export default SidebarUser;
