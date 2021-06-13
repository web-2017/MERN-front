import { Switch, Route } from 'react-router-dom';
import Home from '../screens/Home';
import Create from '../screens/Create';
import Post from '../screens/Post';
import NotFound from '../screens/NotFound';

export const Routing = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/create' component={Create} />
			<Route path='/post/:id' component={Post} />
			<Route path='*' component={NotFound} />
		</Switch>
	);
};
