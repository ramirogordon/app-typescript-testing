import React from 'react';
import PokemonSearch from './main/components/PokemonSearch/PokemonSearch';
import './App.css';
import { Provider } from 'react-redux';
import store from './main/store/index';
import FormScreen from './main/components/FormWithFormik/index';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<div className="App">
				<FormScreen />
			</div>
		</Provider>
	);
};

export default App;
