import React, { Component } from 'react';
class LogisticRegression extends Component {
	render() {
		return (
			<div>
				<link href="themes/prism.css" rel="stylesheet" />
				<script src="prism.js"></script>
				<header>
					<h1> Cow Detection: Logistic Regression from Scratch Python</h1>
					<script src="https://gist.github.com/DanielLongo/98358a6f6ee6aeedaaa2acd0ee200f49.js"></script>
				</header>
				
				<body>
					<p>
					In this project, I will create a logistic regression model from scratch using python that ouputs either 0 (not cow) or 1 (cow).
					Logistic Regression is well suited for problems such as these with binary ouputs. The model will optimize a single set of weights and baises in order to learn features of a cow.
					Let's get started.
					</p>

					<h1> Retrieving Data </h1>
					<p> 
					I aquired a csv of url containing images of cows from <a href="http://www.image-net.org/"> imagenet </a>.
					I then donwloading images removed null images
					</p>
					<h1> Bulding the Model </h1>
					<p> Not that we have labeled tidy data, we can get to the fun part. </p>
				</body>
			</div>)
	}
}

export default LogisticRegression;