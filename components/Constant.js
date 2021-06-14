import NProgress from 'nprogress';
import Cookie   from 'js-cookie';
import jwt      from 'jsonwebtoken';
import ConstantServer from '@/components/ConstantServer';

class Constant{
	static instance = null;
	// general
	static URL_webpage = "https://kiwipyme.herokuapp.com";
	static URL_public = ConstantServer["URL_public"];
	static URL_private = ConstantServer["URL_private"];

	// Dev
	//static URL_server = "http://127.0.0.1:8000";
	// prod
	static URL_server = ConstantServer["URL_server"];


	constructor(){
		if (Constant.instance!==null){
			return Constant.instance;
		}
		Constant.instance = this;

		this.privatePages = [];
		this.noLoggedPages = [];

		/// Routes
		this.route_index               ='/';
		this.route_index_alias         ='/';

		this.route_search              = '/search/[search]';
		this.route_search_alias        = '/search/{0}';

		this.empresa_profile           = '/empresa/[id]/[name]';
		this.empresa_profile_alias     = '/empresa/{0}/{1}';

		this.route_recover             = '/recover';
		this.route_recover_alias       = '/recover';

		this.route_register            = '/signin';
		this.route_register_alias      = '/signin';

		/*** IMÁGENES ***/
		this.img_logo                       = "/images/general/logo.svg";
		this.img_lupa_white                 = "/images/icons/lupa-white.svg";
		this.img_box_black                  = "/images/icons/box-black.svg";
		this.img_shop_black                 = "/images/icons/shop-black.svg";
		this.img_flash_black                = "/images/icons/flash-black.svg";
		this.img_shoppingcart_black         = "/images/icons/shopping-cart-black.svg";
		this.img_user_white                 = "/images/icons/user-white.svg";
		this.img_promotions_white           = "/images/icons/promotion-white.svg";

		this.img_producto_empty             = "/images/general/product_empty.png";

	}

	formatString(s) {
		s = s.toLowerCase();
		s = s.charAt(0).toUpperCase() + s.slice(1)
		return s;
	}

	getServer() {
		return Constant.URL_server;
	}
	getPublicEndpoint() {
		return Constant.URL_server + Constant.URL_public;
	}

	get_key() {
		return "123";
	}


}

export default  new Constant();

/**
 * @returns {string} a
 * @memberof Constant
 */
String.prototype.format = function () {
    let a = this;
    for (let k in arguments) {
        a = a.replace("{" + k + "}", encodeURIComponent(arguments[k]));
    }
    return a
};

/**
 * @param {number} decimales -Decimales aproximación
 * @param {number}  valor -Valor
 * @returns {number}
 * @memberof Constant
 */
String.prototype.redondear = (valor,decimales) => {
    decimales = (decimales===undefined && decimales == null)?2:decimales;
    return Math.round(parseFloat(valor) * Math.pow(10, parseFloat(decimales))) / Math.pow(10, parseFloat(decimales));
}

String.prototype.removeAccents  = function (name ){
	let data = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	data = data.replace(/\//g, '-');
	return data.replace(/ /g, "-");
}
