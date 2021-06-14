import React          from 'react';
import BasePanel      from '@/containers/BasePanel';
import Constant       from '@/components//Constant';
import Image from 'next/image'
import GridProducts   from '@/containers//GridProducts';
import Label          from '@/components//Label';
import {AiFillFacebook} from 'react-icons/ai';


class EmpresaProfile extends BasePanel{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		let empresa = this.props.empresaData;
		return (
			<div className="empresa">
				<div className="empresa-portada">
					<Image
						src={empresa.portada}
						layout={"fill"}
						/>
					<div className="empresa-foto">
						<Image
							src={empresa.foto_perfil}
							width={400}
							height={400}
							layout={"responsive"}
							/>
					</div>
				</div>

				<div className="empresa-body">
					<div className="empresa-detalles">
						<h2>{empresa.nombre}</h2>
						<div className="empresa-detalles-item">
							<h4>{empresa.tipoempresa__nombre}</h4>
							{empresa.celular}<br />
							{empresa.direccion}<br /> {empresa.ciudad__nombre}<br />
							<Label
								texto={"www.facebook.com"}
								url={"www.facebook.com"}
								icon={<AiFillFacebook />}
								/>

							www.instagram.com<br />
							www.twitter.com
						</div>
						<div className="empresa-detalles-item">
							Sin domicilios<br />
							Sin página web
						</div>
						<div className="empresa-detalles-item">
							Tienda la 20 es un local comercial dedicado a la venta de productos de la canasta familiar, visítenos y compro los mejores productos a los mejores precios.
						</div>
					</div>
					<div className="empresa-productos">
						PRODUCTOS
					</div>
				</div>
			</div>
		);
	}
}

EmpresaProfile.getInitialProps = async ({query}) => {
	let empresaData = {};
	let [_empresaData] = await Promise.all([
		BasePanel.send(
		{
			endpoint: Constant.getPublicEndpoint() + "empresa",
			method: 'GET',
			body: {
				"modelo" : "todo",
				"campos":{
					"pk": query.id
				}
			}
		})
	]);
	if(_empresaData["estado_p"] === 200) {
		empresaData = _empresaData["data"][0];
	}
	return {query, empresaData};
}

export default EmpresaProfile;
