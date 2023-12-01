import { MdCopyright, MdLocalPhone, MdMailOutline } from 'react-icons/md';
import { FooterSectionText } from '../FooterSectionText';

export const FooterLeftSection = () => {
	return (
		<section className='footer-section is-left'>
			<FooterSectionText Icon={MdMailOutline} text='hola@gearglen.com' />
			<FooterSectionText Icon={MdLocalPhone} text='999 222 333' />
			<FooterSectionText Icon={MdCopyright} text='GearGlen' />
		</section>
	);
};
