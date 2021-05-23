import React          from 'react';
import BasePanel      from '@/containers/BasePanel';

class BaseFormComponent extends React.Component{
	constructor(props) {
		super(props);

		// Variables
		this.input            = React.createRef();

		// Methods
		this.getValue         = this.getValue.bind(this);
		this.setValue         = this.setValue.bind(this);

	}

	getValue() {
		return this.input.current.value;
	}
	setValue(value) {
		this.input.current.value = value;
	}
}

export default BaseFormComponent;
