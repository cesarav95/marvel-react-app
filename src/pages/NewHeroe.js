import React from 'react';

import HeroeForm from '../components/HeroeForm';
import HeroePreview from '../components/HeroePreview';
import Message from '../components/html/Message';
import api from '../utils/api';
class NewHeroe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        universe: '',
        heroe: '',
        movies: '',
        photoUrl: '',
      },
      loading: true,
      error: false,
    };
  }

  handleGoBack = () => {
    this.props.history.goBack();
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleCreateHeroe = async () => {
    try {
      const formValues = this.state.form;
      await api.heroes.create(formValues);
      this.props.history.push('/');
    } catch (error) {
      this.setState({ error: true });
    }
  };

  render() {
    if (this.state.error) {
      return (
        <Message message="Ocurrio un error, vuelva a intentarlo en unos minutos." />
      );
    }
    return (
      <div className="container">
        <div className="row">
          <HeroeForm
            onChangeInput={this.handleChange}
            formValues={this.state.form}
            onBack={this.handleGoBack}
            onSaveHeroe={this.handleCreateHeroe}
          />
          <HeroePreview
            universe={this.state.form.universe || 'UNIVERSO'}
            heroe={this.state.form.heroe || 'HEROE'}
            movies={this.state.form.movies || 'PELICULAS'}
            photoUrl={
              this.state.form.photoUrl ||
              'https://i.pinimg.com/originals/b5/34/df/b534df05c4b06ebd32159b2f9325d83f.jpg'
            }
          />
        </div>
      </div>
    );
  }
}

export default NewHeroe;
