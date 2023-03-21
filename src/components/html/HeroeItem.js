import '../../styles/HeroeImage.css';
import { Link } from 'react-router-dom';

function HeroeItem(props) {
  return (
    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col p-4 d-flex flex-column position-static">
        <strong className="d-inline-block mb-2 text-danger">
          {props.heroe.universe}
        </strong>
        <h3 className="mb-0">{props.heroe.heroe}</h3>
        <div className="mb-1 text-muted">{props.heroe.movies}</div>
        <>
          <br />
          <br />
          <br />
          <Link
            to={`/heroe/${props.heroe.id}/detail`}
            className="btn btn-primary"
          >
            Ver más
          </Link>
        </>
      </div>
      <div className="col-auto d-none d-lg-block heroe-img">
        <img
          src={props.heroe.photoUrl}
          className="bd-placeholder-img"
          width="200"
          height="250"
          alt={props.heroe.heroe}
        />
      </div>
    </div>
  );
}

export default HeroeItem;
