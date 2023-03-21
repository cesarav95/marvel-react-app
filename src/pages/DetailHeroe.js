import React, { Component } from 'react';
import LoaderDetailHeroe from '../components/html/LoaderDetailHeroe';
import api from '../utils/api';
import '../styles/HeroeImage.css';
export default class DetailHeroe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroeId: props.match.params.heroeId,
      loading: true,
      heroe: {},
    };
  }

  componentDidMount() {
    this.getDetailHeroe();
  }

  getDetailHeroe = async () => {
    try {
      const id = this.state.heroeId;
      const heroe = await api.heroes.detail(id);
      this.setState({
        loading: false,
        heroe: heroe,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleGoBack = () => {
    this.props.history.goBack();
  };

  render() {
    if (this.state.loading) {
      return <LoaderDetailHeroe />;
    }

    return (
      <div className="container">
        <div className="col-12">
          <br />
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-danger">
                {this.state.heroe.universe}
              </strong>
              <h3 className="mb-0">{this.state.heroe.heroe}</h3>
              <div className="mb-1 text-muted">{this.state.heroe.movies}</div>
              <br />
              <br />
              <button onClick={this.handleGoBack} className="btn btn-primary">
                Atras
              </button>
            </div>
            <div className="col-auto d-none d-lg-block heroe-img">
              <img
                src={this.state.heroe.photoUrl}
                className="bd-placeholder-img"
                width="200"
                height="250"
                alt={this.state.heroe.heroe}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
