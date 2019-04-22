import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
	render() {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								<NavLink
									to="/"
									exact
									activeClassName="my-active"
									activeStyle={{
										color: 'teal',
										fontWeight: 'bold',
										textDecoration: 'underline'
									}}
								>
									Home
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
					<Route path="/" exact component={Posts} />
					<Route path="/new-post" component={NewPost} />
					<Route path="/:id" exact component={FullPost} />
				</Switch>
			</div>
		);
	}
}

export default Blog;
