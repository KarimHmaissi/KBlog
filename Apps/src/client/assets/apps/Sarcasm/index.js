import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

console.log('Sarcasm running');

const database = [
{
	mainPost: {

	},
	parentComment: {
		author: 'RandomDude',
		score: '250',
		body: 'My really great comment',
		linkToComment: 'http://reddit.com'
	},
	childComment: {
		author: 'KarimHmaissi',
		score: '700',
		body: 'This is an awesome comment, one of the best on reddit. /s',
		linkToComment: 'http://reddit.com'
	}
}
];

class Sarcasm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {comments: database};
	}

	componentDidMount() {

		//TEMP

		//loop over default subs
		// const subs = ['aww'];
		// const pages = [];
		

		// let keepGoing = true;

		// const downloadAllSubs = (index) => {

		// 	if (test) { return; }


		// 	where(keepGoing) {

		// 		downloadPagesFromSub(sub[index]).then( => downloadAllSubs(index++));


		// 		if(keepGoing <= subs.length) { 
		// 			keepGoing = false; 
		// 		}
		// 	}
		// };

		// downloadAllSubs(0);


		// //Download all hot pages from sub,
		// const downloadPagesFromSub = (sub) => {
		// 	return new Promise(

		// 		(resolve, reject) => {
		// 			const redditUrl = 'http://reddit.com/';
		// 			const url = '';
		// 			$.ajax({url: url}).done((data) => {
		// 				console.log('Got data from reddit.com: ', url);
		// 				console.log('Data recieved: ', data);

		// 				const moddedData = data;
		// 				setTimeout(() => {
		// 					pages.push(moddedData);
		// 					resolve(moddedData);
		// 				}, 3000);

		// 			}).fail((err) => {
		// 				console.log('Got error from reddit.com: ', url);
		// 				console.error('Error recieved: ', err);
		// 			});	
		// 		}
		// 	);

		// }

		// //loop through posts and download comments
		// const downloadCommentsFromPage = (pageUrl) => {
		// 	return new Promise(

		// 		(resolve, reject) => {

		// 		}

		// 	);
		// }

		// //loop through comments and find /s comments

		// const findSarcasmComments = (comments) => {

		// }

		// //add comments to database


		// //ACTUAL
		// //pull comments back from API

		// //add comments to state

	}

	render() {
		return (
			<div className="sarcasm-container">
				<List comments={this.state.comments}/>
			</div>
		);
		
	}
}


class List extends React.Component {

	renderComments() {
		if(!this.props.comments) {
			return null;
		}

		return this.props.comments.map((comment) => {
			return (<li className="comment__container">
				<CommentBundle comment={comment} />
			</li>)
		});
	}

	render() {
		return (

			<ul className="no-style list">
				{this.renderComments()}
			</ul>
		)
	}

}


class CommentBundle extends React.Component {
	render() {
		const commentbundle = this.props.comment;

		return (
			<div className="comment__bundle">
				<div className="comment__parent">
					<Comment comment={commentbundle.parentComment} />
				</div>
				<div className="comment__child">
					<Comment comment={commentbundle.childComment} />
				</div>
			</div>
		);
	}
}


class Comment extends React.Component {
	render() {
		const comment = this.props.comment;

		return (
			<div className="comment__content">
				<div className="comment__content__header">
					<p className="author">{comment.author}</p>
					<p className="score">{comment.score}</p>
				</div>
				<div className="comment__content__body">
					<p className="content">{comment.body}</p>
				</div>
				<div className="comment__content__footer">
					<a className="link" href={comment.linkToComment}>Permalink</a>
				</div>
			</div>

		);
	}
}


if($('#Sarcasm').length > 0 ) {
	ReactDOM.render(
		<Sarcasm />,
		document.getElementById('Sarcasm')
	);
}



