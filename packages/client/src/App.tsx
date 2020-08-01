import React from 'react';
import CoinForm from './components/CoinForm';
import CoinList from './components/CoinList';
import DisplayContainer from './components/DisplayContainer';

export default function App() {
	return (
		<DisplayContainer>
			<CoinForm />
			<CoinList />
		</DisplayContainer>
	);
}
