// Styles
import './notificationsIcon.scss';

// Components
import { MdNotificationsNone } from 'react-icons/md';

function NotificationsIcon() {
	return (
		<div className='notifications-icon'>
			<div className='notifications-icon__ellipse' />
			<MdNotificationsNone className='notifications-icon__bell' />
		</div>
	);
}

export default NotificationsIcon;
