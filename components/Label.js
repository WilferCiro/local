import React          from 'react';
import BasePanel      from '@/containers/BasePanel';
import Constant       from '@/components//Constant';
import Icon from '@material-ui/core/Icon';

class Label extends BasePanel{
	constructor(props) {
		super(props);
		this.state = {
			texto : this.props.texto
		}
		this.setText = this.setText.bind(this);
	}
	componentDidMount() {
	}

	setText(text) {
		this.setState({
			texto: text
		})
	}

	render() {
		return (
			<React.Fragment>
				{
					(this.props.icon !== null && this.props.icon !== undefined) ?
					<Icon>add_circle</Icon>
					:
					null
				}
				{
					(this.state.texto === null && this.props.showLoading) ?
						<label className="loading-text">Cargando...</label>
					:
					(this.props.renderHTML) ?
					<span dangerouslySetInnerHTML={{
						__html: this.state.texto
					}}/>
					:
					this.state.texto
				}
			</React.Fragment>
		);
	}
}

export default Label;
