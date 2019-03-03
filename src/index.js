import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Link,Router,Route,IndexRoute,browserHistory} from "react-router"
import Myself from "./components/myself"
import Welcome from "./components/welcome"
import Jisu from "./components/jisu"
import Zuji from "./components/zuji"
import Collect from "./components/collect"
import Work from "./components/work"
import Zone from "./components/zone"
import CallMe from "./components/callMe"

ReactDOM.render(<Router history={browserHistory}>
	<Route path="/" component={App}>
		<IndexRoute component={Welcome}></IndexRoute>
		<Route path="/welcome" component={Welcome}></Route>
		<Route path="/myself" component={Myself}></Route>
		<Route path="/jisu" component={Jisu}></Route>
		<Route path="/zuji" component={Zuji}></Route>
		<Route path="/collect" component={Collect}></Route>
		<Route path="zone" component={Zone}></Route>
		<Route path="/callMe" component={CallMe}></Route>
		<Route path="/work" component={Work}></Route>
	</Route>
</Router>,document.getElementById('root'));
registerServiceWorker();
