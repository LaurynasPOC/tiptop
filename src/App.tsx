import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from '@styles/globalStyles';
import Navbar from '@components/navigation/Navbar';
import Main from '@pages/Main';
import MouseMoveAnimation from '@components/MouseMoveAnimation';
const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			<MouseMoveAnimation />
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Main />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
