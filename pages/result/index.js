import React          from 'react';
import BasePanel      from '@/containers/BasePanel';
import Constant       from '@/components//Constant';

import FormCheckBox   from '@/formcomponents//FormCheckBox';
import FormInputText   from '@/formcomponents//FormInputText';
import FormSelect from '@/formcomponents//FormSelect';
import FormPassword    from '@/formcomponents//FormPassword';

class ResultView extends BasePanel{
	constructor(props) {
		super(props);

		this.checkbox = React.createRef();
		this.input    = React.createRef();
		this.select   = React.createRef();
		this.password = React.createRef();

		this.getValues = this.getValues.bind(this);
	}

	componentDidMount() {
		//this.checkbox.current.setValue(true);
	}

	getValues() {
		console.log(this.checkbox.current.getValue());
		console.log(this.select.current.getValue());

		this.select.current.setOptions([
			{"label" : "AAHola1", "value" : "afuno"},
			{"label" : "AAHola2", "value" : "ados"},
			{"label" : "AAHola3", "value" : "aHoliwi"},
			{"label" : "AAHola4", "value" : "acuatro"},
		]);
	}

	render() {
		return (
			<div className="result">
				<div className="result-left-panel">
					<FormCheckBox
						id="CheckBox"
						ref={this.checkbox}
						label="Seleccionar opción"
						defaultValue={true}
					/>
					<FormPassword
						id="FormPassword"
						ref={this.password}
						label="Contraseña"
					/>
					<FormInputText
						id="InputText"
						ref={this.input}
						label="Valor"
						defaultValue={"Holiwi"}
					/>
					<FormSelect
						id="InputSelect"
						ref={this.select}
						label="Select"
						defaultValue={"Holiwi"}
						options={[
							{"label" : "Hola1", "value" : "uno"},
							{"label" : "Hola2", "value" : "dos"},
							{"label" : "Hola3", "value" : "Holiwi"},
							{"label" : "Hola4", "value" : "cuatro"},
						]}
					/>

					<button onClick={(e) => this.getValues()}>GET</button>
				</div>
			</div>
		);
	}
}

export default ResultView;
