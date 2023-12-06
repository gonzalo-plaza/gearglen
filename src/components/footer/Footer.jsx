// Styles
import './footer.scss';

import { FooterRightSection } from './footerRightSection/FooterRightSection';
import { FooterLeftSection } from './leftSection/FooterLeftSection';

const Footer = () => {
	return (
		<footer className='footer'>
			<FooterLeftSection />
			<FooterRightSection />
		</footer>
	);
};

export default Footer;
