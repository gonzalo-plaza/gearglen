import '../../../styles/components/sidebar/items/sidebarItem.scss'

function SideBarItem({ Icon, title, href, text }) {
    return (
        <li className="sidebar-nav-link">
            <Icon className="sidebar-nav-link__icon" />
            <a className="sidebar-nav-link__anchor" href={href} title={title}>{text}</a>
        </li>
    )
}

export default SideBarItem;