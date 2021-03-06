import React, { Component, Suspense } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
// import asyncComponent from '../../hoc/asyncComponent';
// const AsyncNewPost = asyncComponent(() => import('./NewPost/NewPost'));
const NewPost = React.lazy(() => import('./NewPost/NewPost'));

class Blog extends Component {
	state = {
		auth: true
	};

	render() {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								<NavLink
									to="/posts"
									exact
									activeClassName="my-active"
									activeStyle={{
										color: 'teal',
										fontWeight: 'bold',
										textDecoration: 'underline'
									}}
								>
									Posts
								</NavLink>
							</li>
							<li>
								<NavLink
									to={{
										pathname: '/new-post',
										hash: '#submit',
										search: '?quick-submit=true'
									}}
									exact
								>
									New post
								</NavLink>
							</li>
						</ul>
					</nav>
				</header>
				{/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
				{/* The order here is important. The 1st one to match is triggered */}
				<Switch>
					{this.state.auth ? (
						<Route
							path="/new-post"
							render={() => (
								<Suspense fallback={<div>loading...</div>}>
									<NewPost />
								</Suspense>
							)}
						/>
					) : null}
					<Route path="/posts" component={Posts} />
					<Route render={() => <h1>Not found</h1>} />
					{/* <Redirect from="/" to="/posts" /> */}
				</Switch>
			</div>
		);
	}
}

export default Blog;
