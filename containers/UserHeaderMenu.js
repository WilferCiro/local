
import React          from 'react';
import BasePanel      from '@/containers/BasePanel';
import Constant       from '@/components//Constant';
import Image          from 'next/image';
import KiwiModal      from '@/components/KiwiModal';
import FormInputText  from '@/formcomponents/FormInputText';

class UserHeaderMenu extends BasePanel{
	constructor(props) {
		super(props);

		this.refModal = React.createRef();
	}
	componentDidMount() {
	}


	render() {
		return (
			<div>
				<div className="header-item">
					<div className="header-item-img"  onClick={(e) => {this.refModal.current.open()}}>
						<Image
							src={this.constants.img_user_white}
							alt={"Caja"}
							width={40}
							height={40}
							layout={"fixed"}
							/>
					</div>
					<div className="header-item-text">
						Usuario
					</div>
				</div>

				<KiwiModal title="Iniciar sesión" ref={this.refModal}>
					<FormInputText
						placeholder="Correo electrónico"
						label="Correo electrónico"
						/><br />
					<FormInputText
						placeholder="Contraseña"
						label="Contraseña"
						/><br />
					¿Olvidaste tu contraseña?<br />
					<button>Iniciar sesión</button><br />
					ó<br />
					<button>Ingresar con facebook</button><br />
					<button>Ingresar con gmail</button><br />
					Regístrate
				</KiwiModal>
			</div>
		);
	}
}

export default UserHeaderMenu;
