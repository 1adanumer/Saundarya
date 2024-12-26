
import Hero from '../../components/Hero/Hero';
import Media from '../../components/Media/Media';
import Brands from '../../components/Brands/Brands';
import GetApp from '../../components/GetApp/GetApp';
import Testimonials from '../../components/Testimonials/Testimonials';
import AchievementsAndServices from '../../components/AchievementsAndServices/AchievementsAndServices';

const Home = () => {
  return (
    <div>
     
      <Hero />
      <AchievementsAndServices />
      <Media/>
      <Testimonials />
      <Brands />
      <GetApp />
     
    </div>
  )
}

export default Home