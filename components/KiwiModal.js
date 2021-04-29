import React          from 'react';
import BasePanel      from '@/containers/BasePanel';
import Constant       from '@/components//Constant';

class KiwiModal extends BasePanel{
	constructor(props) {
		super(props);
		this.state = {
			open : false
		}
	}
	componentDidMount() {
	}

	close() {
		this.setState({
			open: false
		})
	}

	open() {
		console.log("GHELLO");
		this.setState({
			open: true
		})
	}

	render() {
		let classbg = this.state.open ? "open" : "";
		return (
			<div>
				<div className={"modal-background " + classbg} onClick={(e) => this.close()}></div>
				<div className={"modal modal-1 " + classbg}>
					<div className="modal-header">
						<div>{this.props.title}</div>
						<div><button onClick={(e) => this.close()}>x</button></div>
					</div>
					<div className="modal-body">
						{this.props.children}
					</div>
					<div className="modal-footer">

					</div>
				</div>
			</div>
		);
	}
}

export default KiwiModal;
