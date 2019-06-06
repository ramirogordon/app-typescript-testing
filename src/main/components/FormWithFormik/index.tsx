import * as React from 'react';
import './style.scss';

export interface IFormScreenProps {}

export default function FormScreen(props: IFormScreenProps) {
	const array = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
	return (
		<div>
			<h1>Form Screen</h1>
			<h2>Hi!!!!!!</h2>
		</div>
	);
}
