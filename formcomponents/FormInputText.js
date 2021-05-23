import React              from 'react';
import BasePanel          from '@/containers/BasePanel';
import BaseFormComponent  from '@/formcomponents/BaseFormComponent';

class FormInputText extends BaseFormComponent{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="form-input-container">
				<input
					ref={this.input}
					className="form-text"
					placeholder={this.props.placeholder}
					type="text"
					defaultValue={this.props.defaultValue}
					/>
				<label>{this.props.label}aaaa</label>
				<div class="bar"></div>
				<div class="highlight"></div>
			</div>
		);
	}
}

export default FormInputText;
