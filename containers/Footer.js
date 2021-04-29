import React          from 'react';
import BasePanel      from '@/containers/BasePanel';
import Constant       from '@/components//Constant';
import ImageLocal     from '@/components//ImageLocal';

class Footer extends BasePanel{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
	}

	render() {
		return (
			<footer>
				<div className="footer-divisor">
					<div>
						<ImageLocal
							image={{"imagen" : this.constants.img_logo, "descripcion" : "Logo"}}
							width={500}
							height={250}
							/>
						HOLA MUNDO
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
