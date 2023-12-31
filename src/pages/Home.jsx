import Hero from '../Hero'
import BannerSection from '../BannerSection'
import BlogSection from '../BlogSection'
import CardGroup from '../CardGroup'
import SingalProducts from '../SingalProducts'
import FeatureSection from '../FeatureSection'
import FeatureSection2 from '../FeatureSection2'


const Home = () => {
	return (
		<div>
			<CardGroup />
			<Hero />
			<SingalProducts />
			<FeatureSection />
			<FeatureSection2 />
			<BannerSection />
			<BlogSection />
			
		</div>
	)
}

export default Home
