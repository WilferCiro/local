import React          from 'react';
import BasePanel      from '@/containers/BasePanel';

class BaseFormComponent extends React.Component{
	constructor(props) {
		super(props);

		// Variables
		this.input            = React.createRef();
		this.label            = this.props.label;
		this.id               = this.props.id;
		this.conditions       = this.props.conditions;

		this.state = {
			options : this.props.options ? this.props.options : [],
			errores : []
		};

		// Methods
		this.getValue         = this.getValue.bind(this);
		this.setValue         = this.setValue.bind(this);
		this.validate         = this.validate.bind(this);
		this.setOptions       = this.setOptions.bind(this);
		this.getOptions       = this.getOptions.bind(this);

		this.getID            = this.getID.bind(this);
		this.getLabel         = this.getLabel.bind(this);
	}

	getLabel() {
		return this.label;
	}

	getID() {
		return this.id;
	}

	getOptions() {
		return []
	}

	setOptions(options) {
		this.setState({
			options: options
		});
	}

	validate() {
		let valid = true;
		let errores = [];
		if (this.conditions !== null) {
			if (this.conditions["required"] === true && this.getValue() === "") {
				errores.push("Este campo es requerido");
				valid = false;
			}
			if (this.type === "FormCheckBox" && this.conditions["required"] === true && this.getValue() === false) {
				errores.push("Este campo es requerido");
				valid = false;
			}
			if (this.conditions["max"] && this.getValue().length > this.conditions["max"]) {
				errores.push("Este campo solo acepta " + this.conditions["max"] + " caracteres");
				valid = false;
			}
			if (this.conditions["regex"] && !this.conditions["regex"].test(this.getValue())) {
				errores.push("Este campo no cumple con el formato deseado");
				valid = false;
			}
		}
		if ((this.state.errores.length === 0 && errores.length > 0) || (this.state.errores.length !== errores)) {
			this.setState({
				errores : errores
			})
		}
		return valid;
	}

	getValue() {
		return this.input.current.value;
	}
	setValue(value) {
		this.input.current.value = value;
	}
}

export default BaseFormComponent;
