import React, {
	Component
} from 'react';
import Cookie   from 'js-cookie';

import router       from 'next/router';
import Constant     from '@/components/Constant';
import Services from '@/utils/Services';
export default class BasePanel extends Component {
	static history = undefined;
	static _constant = Constant;
	static urls_servidores = undefined;
	static service = Services;
	static alertLocal = new React.createRef();

	constructor(props) {
		super(props);
		this.constants = Constant;

		this.redirectPage = this.redirectPage.bind(this);
		this.goHome = this.goHome.bind(this);
		this.URLSave = null;

		this.send = this.send.bind(this);
		this.error = this.error.bind(this);
	}

	error(data) {
		console.log("--ERRR----", data);
	}

	redirectPage(to, alias) {
		router.push(to, alias);
	}
	goHome() {
		this.redirectPage(this.constants.route_index, this.constants.route_index_alias);
	}

	send(data) {
		BasePanel.service.setAlertModel(BasePanel.alertDavinci);
		BasePanel.service.send(data);
	}
	static async send(endpoint, method, body, success, error, fields, showMessage, _headers) {
		BasePanel.service.setAlertModel(BasePanel.alertModel);
		return await BasePanel.service.sendServer(endpoint, method, body, success, error, fields, showMessage, _headers);
	}

}
//export default BasePanel;
