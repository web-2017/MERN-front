import { BrowserRouter as Router } from 'react-router-dom';

import { Routing } from './router/router';
import { Container } from './components/Container';
import { Menu } from './components/Menu';

function App() {
	return (
		<Router>
			<Menu />
			<Container>
				<Routing />
			</Container>
		</Router>
	);
}

export default App;
