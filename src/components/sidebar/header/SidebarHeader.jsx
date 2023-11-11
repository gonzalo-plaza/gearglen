//SCSS
import '../../../scss/components/sidebar/header/sidebarHeader.scss'

// Components
import { MdClear } from 'react-icons/md'
import { useSidebarStore } from '../../../store/sidebarStore';

function SideBarHeader() {
    const hideSideBar = useSidebarStore(state => state.hideSidebar);
    const handleClick = () => {
        hideSideBar();
    }
    return (
        <header className="sidebar-header">
            <div className="sidebar-header-logo">
                <img src="/images/logo/logo-green-no-text-transparent.png" alt="GearGlen logo" width={28} height={28} />
                <p className="sidebar-header-logo__text">GearGlen</p>
            </div>
            <div className='sidebar-header-close' onClick={handleClick} role="button" aria-label="Close sidebar">
                <MdClear className="sidebar-header-close__icon" />
            </div>
        </header>
    )
}

export default SideBarHeader;