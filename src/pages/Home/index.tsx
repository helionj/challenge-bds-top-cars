import { Link } from 'react-router-dom';
import MainImage from '../../assets/images/home-image.svg';
import ButtonIcon from '../../components/ButtonIcon';
import './styles.css';
const Home = () => {
  return (
    <div className="home-container">
      <div className="main-card">
        <div className="main-card-content-container">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
        <div className="main-card-image-container">
          <img src={MainImage} />
        </div>
      </div>
      <div className="bottom-card">
        <Link to="/products">
            <ButtonIcon />
        </Link>
        
        <h4>Começe agora a navegar</h4>
      </div>
    </div>
  );
};

export default Home;
