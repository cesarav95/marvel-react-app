import HeroeItem from './HeroeItem';
import { useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import useFilterHeroes from '../../hooks/useFilterHeroes';

function HeroeContainer(props) {

  const heroes = props.heroes;
  const searchInput = useRef(null);
  const [search, setSearch, resultHeroes] = useFilterHeroes(heroes);

  const handleOnChange = () => {
    setSearch(searchInput.current.value);
  };
  return (
    <>
      <div className="container">
        <br />
        <div className="row">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <input
              type="text"
              className="form-control"
              name="search"
              value={search}
              onChange={handleOnChange}
              ref={searchInput}
            />
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
      <div className="container">
        <div className="row mb-2">
          {resultHeroes.map((heroe) => {
            return (
              <div key={heroe.id} className="col-md-6">
                <HeroeItem heroe={heroe} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HeroeContainer;
