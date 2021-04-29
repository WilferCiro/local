import React          from 'react';
import BasePanel      from '@/containers/BasePanel';
import Constant       from '@/components//Constant';
import Image          from 'next/image'
import KiwiSearch     from '@/components//KiwiSearch';
import ImageLocal     from '@/components//ImageLocal';
import UserHeaderMenu from '@/containers/UserHeaderMenu';

class Header extends BasePanel{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
	}


	render() {
		return (
			<header>
				<div className="header-top">
					<div className="logo-container">
						<ImageLocal
							image={{"imagen" : this.constants.img_logo, "descripcion" : "Logo"}}
							width={500}
							height={250}
							/>
					</div>
					<div>
						<KiwiSearch />
					</div>
					<div>
						<UserHeaderMenu />
					</div>
					<div className="header-item">
						<div className="header-item-img">
							<Image
								src={this.constants.img_promotions_white}
								alt={"Caja"}
								width={40}
								height={40}
								layout={"fixed"}
								/>
						</div>
						<div className="header-item-text">
							Promos
						</div>
					</div>
				</div>
				<div className="header-bottom">
					PROMOCIONES -
					{
						(this.props.tipoEmpresas).map((item, index) => {
							return <button key={Math.random()}>{item["nombre"]}</button>
						})
					}
				</div>
			</header>
		);
	}
}

export default Header;
