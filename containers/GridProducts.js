import React          from 'react';
import BasePanel      from '@/containers/BasePanel';
import Constant       from '@/components//Constant';
import Product       from '@/components//Product';
import { Carousel } from 'react-responsive-carousel';

class GridProducts extends BasePanel{
	constructor(props) {
		super(props);

		this.state = {
			productos : {
				"page1" : this.props.productos !== undefined && this.props.productos !== null ? this.props.productos : [],
				"page2" : [],
				"page3" : [],
				"page4" : []
			}
		};

		this.onChange = this.onChange.bind(this);
		this.successGetProducts = this.successGetProducts.bind(this);
	}
	componentDidMount() {
	}

	onChange(index, items){
		console.log(index, items);
		if(this.state.productos["page" + (index + 1)].length === 0){
			this.indexNew = index+1;
			this.send({
				endpoint: Constant.getPublicEndpoint() + "producto",
				method: 'GET',
				body: {
					"modelo" : "datos_basicos",
					"cantidad" : 4,
					"ordenar_por": "-fecha_creacion",
					"paginate" : true
				},
				page : this.indexNew,
				success: this.successGetProducts,
				error: this.error
			});
		}
	}

	successGetProducts(data){
		if(data["estado_p"] === 200){
			let newProducts = this.state.productos;
			newProducts["page" + this.indexNew] = data["data"];
			this.setState({
				productos : newProducts
			});
		}
	}

	render() {
		return (
			<Carousel
				autoPlay={false}
				showThumbs={false}
				infiniteLoop={true}
				showStatus={false}
				swipeable={false}
				onChange={this.onChange}
				verticalSwipe={'natural'}>
					<div className="grid-products">
						{
							(this.state.productos.page1).map((item, index2) => {
								return <Product
									producto={item}
									key={Math.random()} />
							})
						}
					</div>
					<div className="grid-products">
						{
							(this.state.productos.page2).map((item, index2) => {
								return <Product
									producto={item}
									key={Math.random() + 2} />
							})
						}
					</div>

			</Carousel>
		);
	}
}

export default GridProducts;
