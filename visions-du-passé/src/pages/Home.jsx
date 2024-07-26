// import { Link } from 'react-router-dom'
import { useState } from "react"
import CardEpoque from '../components/CardEpoque'
import NavBar from "../components/NavBar"
import MusicButton from "../components/MusicButton";
import future from "../assets/music/future.mp3"
import '../styles/Home.css'
import Footer from "./Footer";

 const epoqueData = [
	{
		id:1,
		imgSrc: 'https://i0.wp.com/blog.artsper.com/wp-content/uploads/2022/05/La-Liberte-guidant-le-peuple-%E2%80%93-Eugene-Delacroix-1830-e1652197478920.jpg?fit=1200%2C681&ssl=1',
		name:"Revolution Française",
		date:"1789",
		epoqueLink: "/epoqueRevolution"
	},
	{
		id:2,
		imgSrc: 'https://img-4.linternaute.com/WTvfQ_8j8ac4jshG1vBidctBwc8=/660x366/smart/305a4e87618243c49c4e2f17f3b390a7/ccmcms-linternaute/18061072.jpg',
		name:"Egypte antique",
		date:"1er siècle avant J-C",
		epoqueLink: "/epoqueEgypte"
	},
	{
		id:3,
		imgSrc: 'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/e/8/3/e83ef80c59_104411_fin-moyen-age.jpg',
		name:"Moyen Age",
		date:"1789",
		epoqueLink: "/epoqueMoyenAge"
	},
	{
		id:4,
		imgSrc: 'https://www.lexpress.fr/resizer/7DjXa7xTH6MrlNwp-AxXBvuih8s=/1200x630/cloudfront-eu-central-1.images.arcpublishing.com/lexpress/4CBXOKUMYNEHHA4XFZXVFT7SOQ.jpeg',
		name:"Époque moderne",
		date:"1970-20..",
		epoqueLink: "/epoqueActuelle"
	},
	{
		id:5,
		imgSrc: 'https://www.institutsapiens.fr/wp-content/uploads/2023/07/Screenshot-2023-07-31-at-11.25.32.png',
		name:"L'empire Romain",
		date:"27 av J-C / 476 apr",
		epoqueLink: "/epoqueRomain"
	},
	
]

function Home() {
	const [autoPlay, setAutoPlay] = useState(true);
  return (
		<div id="homeContainer">

				<NavBar />
		<div className='home-content'>
			<MusicButton
	audioSrc={future}
	autoPlay={autoPlay}
	setAutoPlay={setAutoPlay}
	classN="poulet"
			/>
			{epoqueData.map(epoque => (
					<CardEpoque key={epoque.id} data={epoque}/>
			))}
		</div>
		<footer className="bas">
			<Footer />
		</footer>
	</div>
	)
}

export default Home