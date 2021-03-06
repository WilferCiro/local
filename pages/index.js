import React          from 'react';
import BasePanel      from '@/containers/BasePanel';
import Constant       from '@/components//Constant';
import ImageLocal from '@/components//ImageLocal'
import GridProducts from '@/containers//GridProducts';
import Image from 'next/image'
import SliderImages from '@/containers/SliderImages';
import Link from 'next/link'


class Home extends BasePanel{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		let {query} = this.props;
		let allBanners = this.props.indexBanners;
		let bannersH1 = [];
		let bannerH2 = {};
		let bannerH3 = {};
		let bannersHP = [];
		for (let index in allBanners){
			if(allBanners[index]["tipo_banner"] === "H-1"){
				bannersH1.push(allBanners[index]);
			}
			else if(allBanners[index]["tipo_banner"] === "H-2"){
				bannerH2 = allBanners[index];
			}
			else if(allBanners[index]["tipo_banner"] === "H-3"){
				bannerH3 = allBanners[index];
			}
			else if(allBanners[index]["tipo_banner"] === "H-P"){
				bannersHP.push(allBanners[index]);
			}
		}
		return (
			<div className="page-center">
				<div className="banner_mosaico">
					<div className="banner_mosaico_primario">
						<SliderImages
							images={bannersH1}
							width={1040}
							height={600}
							/>
					</div>
					<div className="banner_mosaico_secundario">
						<div>
							<ImageLocal
								image={bannerH2}
								width={544}
								height={290}
								/>
						</div>
						<div>
							<ImageLocal
								image={bannerH3}
								width={544}
								height={290}
								/>
						</div>
					</div>
				</div>

				<div className="triptico_info">
					<div className="triptico_info_item">
						<div>
							<Image
								src={this.constants.img_shop_black}
								alt={"Caja"}
								width={20}
								height={20}
								layout={"responsive"}
								/>
						</div>
						<div>
							<b>Variedad de tiendas</b><br />
							<hr />
							Explora todas las opciones que se acomoden a tus necesidades.
						</div>
					</div>
					<div className="triptico_info_item">
						<div>
							<Image
								src={this.constants.img_flash_black}
								alt={"Caja"}
								width={20}
								height={20}
								layout={"responsive"}
								/>
						</div>
						<div>
							<b>Consulta instant??nea</b><br />
							<hr />
							Encuentra r??pidamente los productos cercanos a cualquier hora.
						</div>
					</div>
					<div className="triptico_info_item">
						<div>
							<Image
								src={this.constants.img_shoppingcart_black}
								alt={"Caja"}
								width={20}
								height={20}
								layout={"responsive"}
								/>
						</div>
						<div>
							<b>Contacta con empresas</b><br />
							<hr />
							Env??a mensajes a las empresas para resolver tus inquietudes.
						</div>
					</div>
					<div className="triptico_info_item">
						<div>
							<Image
								src={this.constants.img_box_black}
								alt={"Caja"}
								width={20}
								height={20}
								layout={"responsive"}
								/>
						</div>
						<div>
							<b>Organiza tus finanzas</b><br />
							<hr />
							Descubre diferencias en precios y productos en diferentes tiendas.
						</div>
					</div>
				</div>

				<h5>??ltimos productos agregados</h5>
					<GridProducts
						productos={this.props.ultimosProductos}
						/>

				<h5>Promociones</h5>
				<SliderImages
					images={bannersHP}
					width={1040}
					height={130}
					/><br />
					<GridProducts
						productos={this.props.ultimosProductos}
						/>

				<h5>??ltimas empresas inscritas</h5>
				<div className="list-empresa-icon">
					{
						this.props.ultimasEmpresas.map((item, index) => {
							return <div key={Math.random()} className="empresa-icon">
								<Link href={`/empresa/${item.pk}/${encodeURIComponent(item.nombre)}`} replace>
									<a onClick={(event) => {
												event.preventDefault();
												this.redirectPage(this.constants.empresa_profile, this.constants.empresa_profile_alias.formatUnicorn({
													0: item.pk,
													1: encodeURIComponent("".removeAccents(item.nombre))
												})
										)}}>
										<div className="empresa-icon-img">
											<Image
												src={item.foto_perfil !== null ? item.foto_perfil : this.constants.img_shoppingcart_black}
												alt={"Foto perfil"}
												width={50}
												height={50}
												layout={"responsive"}
												/>
										</div>
										<p>{item.nombre}</p>
									</a>
								</Link>
							</div>
						})
					}
				</div>

				<h5>Mis ??ltimas visitas</h5>


				<h5>Suscr??bete</h5>

			</div>
		);
	}
}

Home.getInitialProps = async ({query}) => {
	let indexBanners = [];
	let ultimosProductos = [];
	let ultimasEmpresas = [];
	let [_banners, _ultimosProductos, _ultimasEmpresas] = await Promise.all([
		BasePanel.send({
			endpoint: Constant.getPublicEndpoint() + "banner",
			method: 'GET',
			body: {
				"modelo" : "activos",
				"campos":{
					"tipo_banner-en": ["H-1","H-2","H-3","H-P"]
				}
			}
		}),
		BasePanel.send({
			endpoint: Constant.getPublicEndpoint() + "producto",
			method: 'GET',
			body: {
				"modelo" : "datos_basicos",
				"cantidad" : 12,
				"ordenar_por": "-fecha_creacion"
			}
		}),
		BasePanel.send({
			endpoint: Constant.getPublicEndpoint() + "empresa",
			method: 'GET',
			body: {
				"modelo" : "fotos",
				"cantidad" : 10,
				"ordenar_por": "-fecha_union"
			}
		})
	]);
	if(_banners !== undefined && _banners["estado_p"] === 200) {
		indexBanners = _banners["data"];
	}
	if(_ultimosProductos !== undefined && _ultimosProductos["estado_p"] === 200) {
		ultimosProductos = _ultimosProductos["data"];
	}
	if(_ultimasEmpresas !== undefined && _ultimasEmpresas["estado_p"] === 200) {
		ultimasEmpresas = _ultimasEmpresas["data"];
	}
	return {query, indexBanners, ultimosProductos, ultimasEmpresas};
}

export default Home;
