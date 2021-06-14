import React              from 'react';
import BasePanel          from '@/containers/BasePanel';
import BaseFormComponent  from '@/formcomponents/BaseFormComponent';

class FormInputText extends BaseFormComponent{
	constructor(props) {
		super(props);

		this.type = "FormInputText";
	}

	render() {
		return (
			<div className="">
				<input
					ref={this.input}
					className="form-text"
					placeholder={this.props.placeholder}
					type="text"
					defaultValue={this.props.defaultValue}
					/><br />
				{
					(this.state.errores).map((item, index) => {
						return <label key={Math.random()}>{item}</label>
					})
				}
			</div>
		);
	}
}

export default FormInputText;
