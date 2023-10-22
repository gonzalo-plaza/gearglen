import '../../scss/components/header/header.scss'
import { MdSupervisedUserCircle, MdMenu, MdNotificationsNone, MdOutlineCalendarMonth } from "react-icons/md";

function Header() {
    return (
        <header className='header-container'>
            <div>
                <div className='icon-item'>
                    <MdMenu style={{color: '#4A4A4A', fontSize: 24}}/>
                </div>
            </div>
            <div className='icon-container'>
                <div className='icon-item'>
                    <MdNotificationsNone style={{color: '#4A4A4A', fontSize: 24}}/>
                </div>
                <div className='icon-item'>
                    <MdOutlineCalendarMonth style={{color: '#4A4A4A', fontSize: 24}}/>
                </div>
                <div className='icon-item'>
                    <MdSupervisedUserCircle style={{color: '#4A4A4A', fontSize: 24}}/>
                </div>
            </div>
        </header>
    );
}

export default Header;