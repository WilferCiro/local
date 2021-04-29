import React          from 'react';
import Carousel       from 'react-multi-carousel';
import BasePanel      from '@/containers/BasePanel';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

class AlertLocal extends BasePanel{
	constructor(props) {
		super(props);
		this.state = {
			mensaje : "",
			open: false,
			type: "success"
		};
		this.toggle    = this.toggle.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	toggle(open, mensaje, type = "success") {
		this.setState({
			mensaje : mensaje,
			open: open,
			type: type
		});
	}

	handleClose(){
		this.setState({
			mensaje : "",
			open: false
		});
	}

	render() {
		return (
			<Snackbar
				open={this.state.open}
				autoHideDuration={3000}
				anchorOrigin={{
	 				vertical: "bottom",
	 				horizontal: "center"
 				}}
				direction="down"
				onClose={this.handleClose}
				onClick={this.handleClose}>
				<SnackbarContent
					style={(this.state.type === "success") ? {background: "green"} : {background: "red"}}
					message={this.state.mensaje}
				/>
			</Snackbar>
		);
	}
}

export default AlertLocal;
