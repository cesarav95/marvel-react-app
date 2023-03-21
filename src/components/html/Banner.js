import '../../styles/Banner.css';

function Banner() {
  return (
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-12">
            <h1 className="display-4 text-white mt-5 mb-2">
              Marvel React Application
            </h1>
            <p className="lead mb-5 text-white-50">
              Aplicación Web usando React y Bootstrap.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
