import { Link } from 'react-router-dom';

function ButtonNew() {
  return (
    <>
      <div className="container">
        <br />
        <div className="row">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link
              to="/heroe/new"
              className="btn btn-success btn-lg float-right ml-auto"
            >
              Nuevo
            </Link>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default ButtonNew;
