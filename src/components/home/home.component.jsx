import banner from '../../assets/images/splash.jpg';

import './home.styles.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <img src={banner}/>
      </div>
    </div>
  );
}

export default Home;