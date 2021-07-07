import MainImage from '../../assets/images/home-image.svg';
import ButtonIcon from '../../components/ButtonIcon';
import Navbar from '../../components/Navbar';
import './styles.css';
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="main-card">
            <div className="main-card-content-container">
                <h1>O carro perfeito para você</h1>
                <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
            </div>
            <div className = "main-card-image-container">
                <img src= {MainImage}/>
            </div>
        </div>
        <div className="bottom-card">
            <ButtonIcon/>
            <h4>Começe agora a navegar</h4>
        </div>
      </div>
    </>
  );
};

export default Home;
