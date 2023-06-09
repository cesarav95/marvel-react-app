import Skeleton from 'react-loading-skeleton';
import '../../styles/HeroeImage.css';

function LoaderHeroe({ times = [1, 2] }) {
  return (
    <div className="container">
      <div className="row mb-2">
        {times.map((item) => {
          return (
            <div className="col-md-6" key={item}>
              <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-danger">
                    <Skeleton />
                  </strong>
                  <h3 className="mb-0">
                    <Skeleton />
                  </h3>
                  <div className="mb-1 text-muted">
                    <Skeleton />
                  </div>
                </div>
                <div className="col-auto d-none d-lg-block heroe-img">
                  <Skeleton
                    height={250}
                    width={200}
                    style={{ paddingTop: '5px' }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LoaderHeroe;
