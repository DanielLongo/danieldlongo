import React, { Component } from 'react';
class LogisticRegression extends Component {
	state = {
		marginLeft: "3%",
	}
	render() {
		return (
			<div>
				<link href="themes/prism.css" rel="stylesheet" />
				<script src="prism.js"></script>
				<header>
					<h1> Cow Detection: Logistic Regression from Scratch Python</h1>
					<script src="https://gist.github.com/DanielLongo/98358a6f6ee6aeedaaa2acd0ee200f49.js"></script>
				</header>
				
				<body style={{marginLeft:"4%"}}>
					<p>
					In this project, I will create a logistic regression model from scratch using python 3 that ouputs either 0 (not cow) or 1 (cow).
					Logistic Regression is well suited for problems such as these with binary ouputs. The model will optimize a single set of weights and baises in order to learn features of a cow.
					Let's get started.
					</p>
					<h1> Retrieving Data </h1>
					<div style={{marginLeft:"4%"}}>
						<p> 
						I aquired a csv of url containing images of cows from <a href="http://www.image-net.org/"> imagenet</a>.
						 I then used an image scraper, which I have written about here, that downloaded all files into cow & notcow directories.
						</p>
						<p> Next, I read the images into arrays in the function <b>getImageArrays()</b>,
						which collects every image in a directory into a list. Each color image is resized to a sqaure <b>(side_length, side_length, 3)</b>.</p>
						
						<pre>code: getImageArrays function and where it is called</pre>
						
						<p>Now that we have two lists, one with arrays of images of cows, and one with arrays of random images,
						labels are created. Since this is a binary classifier, creating labels is very simple. Here I use np.ones and np.zeros 
						to create labels (1 for cow, 0 for notCow).
						
						</p>
						<p>To seperate examples into train/test, a test ratio is defined which defines what percent of data will be saved for testing.
						
						
						</p>
						<pre>code: train/test split </pre>
						
						<p> Before we can use our examples, we must flatten them, so that each example has only one dimmension (side_length * side_length * 3,)
						Fially, we must standardize examples to make compuation less expensive durring cross entropy. Examples are devided by 255 which is the maximum rgb value. Now the maximum value in examples is one.
						</p>

						<pre>code: flatten examples and standardize examples </pre>
					</div>
					<h1> Bulding the Model </h1>
					<div style={{marginLeft:"4%"}}>
						<p> Not that we have labeled tidy data, we can get to the fun part. </p>
						{"? why are weights 0"}
						<p>First, we must initialie our weights and baises. Baises always start as 0 as they are developed over time.
						The shape of wieghts should match that of the length of flattened train examples.
						The shape of biases can be 1 dimmension due to broadcasting. </p>
						<pre>code: initialie zeros function</pre>
						<p>Next define sigmoid and our loss function</p>
						<pre>code: loss function and sigmoid</pre>
						<p>Propagate handles the foward pass following the equation wx + b. First take the dot product of w and x, and then add b. 
						This will return an array (number examples,1) which we will pass through <b>sigmoid</b></p>
					</div>
				</body>
			</div>)
	}
}

export default LogisticRegression;