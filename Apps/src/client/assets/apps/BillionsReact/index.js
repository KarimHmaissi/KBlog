import react from 'react';
import reactDOM from 'react-dom';

console.log('BillionsReact running fam');


//util
const BILLION = 1000000000;
const amountLeft = BILLION;
const amountOfRows = 10000;
const numberOfBoxesInRow = 10;

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


//components 
class Billions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			owned: [],

		};
	}

	render() {
		return {
			<div id="Billions-app" className="Billions-app">
				<ProductSelector />
				<Clusterize />

			</div>
		}
	}
}




class ProductSelector extends React.Component {


	// {"title":"Navy's Acre Island",
	// "description":"Unquestionably a turnkey property it features a gracious main cottage, a separate master cottage, three bedroom guest cottage and a four bunk waterside sleeping cabin. Designed by noted architect Peter Burton of C.A. Ventin Architect Ltd. and built to exacting standards by Paul Hannon Construction, the buildings, decks and boardwalks have been immaculately maintained and cared for.",
	// "imageUrl":"/img/NavysAcreIsland.jpg",
	// "priceFormatted":"$2,250,000",
	// "price":"2250000",
	// "url":"http://www.privateislandsonline.com/islands/navys-acre-island"},

	// <ul>
	// 	<li class="product" data-index="15" data-price="400000">
	// 		<img src="/img/NorthEastCave.jpg">
	// 		<div class="content-block">
	// 			<h3>North East Caye</h3>
	// 			<p>This is an incredible opportunity to own a rare piece of island conveniently located just 8 miles off the coast of Riversdale on the Placencia Peninsula. This property located on North East Caye is ideally situated near Saddle Caye, Cat Caye and Manatee Caye.</p>
	// 			<a href="http://www.privateislandsonline.com/islands/north-east-caye" target="_blank" class="link-website">View website</a>
	// 			<p class="product__price">$400,000</p>
	// 			<button class="btn btn-success buy">Buy</button>
	// 		</div>
	// 	</li>
	// </ul>

	renderProduct() {
		return this.props.products.map((product) => {
			return {
				<li class="product">
					<img className="product__image" src={product.imageUrl}>
					<div className="product__content">
						<h3 className="product__title">{product.title}</h3>
						<p className="product__description">{product.description}</p>
						<a className="product__website" href={product.url}>Website</a>
						<p className="product__price">{product.priceFormatted}</p>
						<button className="btn btn-success product__buy">Buy</button>
					</div>
				</li>
			}
		});
	}
	
	render() {
		return {
			<div className="product-selector">
				<ul>
					{this.renderProducts()}
				</ul>

			</div>
		}
	}
}


class Clusterize extends React.Component {
	
	componentDidMount() {

	}

	render() {
		return {
			<div className="billion-stack"></div>
		}
	}
}

if($('#Billions').length > 0 ) {
	ReactDOM.render(
		<Billions />,
		document.getElementById('Billions')
	);
}

