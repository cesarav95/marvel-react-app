import React from 'react';
import api from '../utils/api';

import HeroeContainer from '../components/html/HeroeContainer';
import ButtonNew from '../components/html/ButtonNew';
import Message from '../components/html/Message';
import LoaderNewHeroe from '../components/html/LoaderNewHeroe';

class Heroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      loading: true,
      error: false,
    };
  }

  getHeroes = async () => {
    try {
      const heroes = await api.heroes.getAll();
      this.setState({
        heroes: heroes,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error: true,
        loading: false,
        heroes: [],
      });
    }
  };

  componentDidMount() {
    this.getHeroes();
  }

  render() {
    if (this.state.loading) {
      return (
        <>
          <ButtonNew />
          <LoaderNewHeroe times={[1, 2]} />
        </>
      );
    }

    if (this.state.error) {
      return (
        <>
          <ButtonNew />
          <Message message="💀 Ocurrio un error, intente en unos minutos." />
        </>
      );
    }

    if (!this.state.heroes || this.state.heroes.length === 0) {
      return (
        <>
          <ButtonNew />
          <Message message="No existe informacion." />
        </>
      );
    }
    return (
      <React.Fragment>
        <HeroeContainer heroes={this.state.heroes} />
      </React.Fragment>
    );
  }
}

export default Heroes;
