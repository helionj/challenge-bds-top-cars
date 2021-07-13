import CarCard from '../../components/CarCard';
import CardSearch from '../../components/CardSearch';
import './styles.css';

const Catalog = () => {
  return (
    <div className="main-container">
      <CardSearch />
      <div className="row">
        <div className="col-sm-6 col-lg-4  car-card">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4  car-card">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4  car-card">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4  car-card">
          <CarCard />
        </div>
        <div className="col-sm-6 col-lg-4  car-card">
          <CarCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
