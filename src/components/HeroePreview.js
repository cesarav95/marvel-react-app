import React from 'react';
import '../styles/HeroeImage.css';

class HeroePreview extends React.Component {
  render() {
    return (
      <div className="col-sm-7">
        <br />
        <br />
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-danger">
              {this.props.universe}
            </strong>
            <h3 className="mb-0">{this.props.heroe}</h3>
            <div className="mb-1 text-muted">{this.props.movies}</div>
          </div>
          <div className="col-auto d-none d-lg-block heroe-img">
            <img
              className="bd-placeholder-img"
              width="200"
              height="250"
              src={this.props.photoUrl}
              alt={this.props.heroe}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HeroePreview;
