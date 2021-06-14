import React              from 'react';
import BasePanel          from '@/containers/BasePanel';
import BaseFormComponent  from '@/formcomponents/BaseFormComponent';

class FormSelect extends BaseFormComponent{
	constructor(props) {
		super(props);

		this.type = "FormSelect";
	}

	render() {
		return (
			<div className="">
				<select
					ref={this.input}
					className="form-text"
					defaultValue={this.props.defaultValue}
				>
				{
					(this.state.options).map((option, index) => {
						return <option key={Math.random()} value={option.value}>{option.label}</option>
					})
				}
				</select>
			</div>
		);
	}
}

export default FormSelect;
