import './styles.css';

const CardSearch = () => {
  return (
    <div className="base-card card-search">
      <div className="btn-container">
        <div>
          <input
            className="form-control"
            type="text"
            placeholder="Digite sua busca"
          />
        </div>
        <div>
          <button className="btn btn-icon">
            <h6>BUSCAR</h6>
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardSearch;
