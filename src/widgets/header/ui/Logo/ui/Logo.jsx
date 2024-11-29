import React from 'react';
import { Link } from 'react-router-dom';
import links from '@/shared/links/links';
import Logotip from '@/shared/assets/images/icons/Logotip.svg'

function Logo() {
	return (
		<div className="logo">
			<Link to={links.main}>
			<img
          src={Logotip}
          alt="Логотип компании"
          className="logo__image"
        />
			</Link>
		</div>
	)
}
export default Logo;