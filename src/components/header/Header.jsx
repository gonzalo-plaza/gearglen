// SCSS
import '../../scss/components/header/header.scss'

// Components
import { MdSupervisedUserCircle, MdMenu, MdOutlineCalendarMonth } from "react-icons/md";

// Custom components
import NotificationsIcon from '../icons/NotificationsIcon';

function Header() {
    return (
        <header className='header-container'>
            <div>
                <div className='icon-item'>
                    <MdMenu  className='icon-item__content'/>
                </div>
            </div>
            <div className='icons-container'>
                <div className='icon-item'>
                    <NotificationsIcon />
                </div>
                <div className='icon-item'>
                    <MdOutlineCalendarMonth className='icon-item__content'/>
                </div>
                <div className='icon-item'>
                    <MdSupervisedUserCircle className='icon-item__content'/>
                </div>
            </div>
        </header>
    );
}

export default Header;