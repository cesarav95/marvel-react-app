import React from 'react';

class HeroeForm extends React.Component {
  render() {
    return (
      <div className="col-sm-5">
        <br />
        <br />
        <div className="panel panel-default">
          <div className="panel-body form-horizontal payment-form">
            <div className="form-group">
              <label htmlFor="universe" className="col-sm-3 control-label">
                <b>Universe</b>
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="universe"
                  value={this.props.formValues.universe}
                  onChange={this.props.onChangeInput}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="heroe" className="col-sm-3 control-label">
                <b>Heroe</b>
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="heroe"
                  value={this.props.formValues.heroe}
                  onChange={this.props.onChangeInput}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="movies" className="col-sm-3 control-label">
                <b>Movies</b>
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="movies"
                  value={this.props.formValues.movies}
                  onChange={this.props.onChangeInput}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="photoUrl" className="col-sm-3 control-label">
                <b>Photo</b>
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="photoUrl"
                  value={this.props.formValues.photoUrl}
                  onChange={this.props.onChangeInput}
                />
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="col-sm-12 text-left">
                <button
                  type="button"
                  className="btn btn-danger mr-1"
                  onClick={this.props.onSaveHeroe}
                >
                  Guardar
                </button>
                <button
                  type="button"
                  className="btn btn-default mr-1"
                  onClick={this.props.onBack}
                >
                  Atras
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroeForm;
