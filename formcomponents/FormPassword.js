import React              from 'react';
import BasePanel          from '@/containers/BasePanel';
import BaseFormComponent  from '@/formcomponents/BaseFormComponent';
import {BsFillEyeFill, BsFillEyeSlashFill} from 'react-icons/bs';

class FormPassword extends BaseFormComponent{
	constructor(props) {
		super(props);

		this.type = "FormPassword";

		this.state.showPass = false;

		this.togglePassView = this.togglePassView.bind(this);
	}

	togglePassView() {
		this.setState({
			showPass: !this.state.showPass
		})
	}

	render() {
		return (
			<div className="">
				<input
					ref={this.input}
					className="form-text"
					placeholder={this.props.placeholder}
					type={this.state.showPass ? "text" : "password"}
					defaultValue={this.props.defaultValue}
					/>

				<button onClick={(e) => this.togglePassView()}>{!this.state.showPass ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}</button>
			</div>
		);
	}
}

export default FormPassword;
