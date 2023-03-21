import React, {useState, useMemo} from 'react';

const useFilterHeroes = (heroes) => {
    const [search, setSearch] = useState('');
    const [resultHeroes, setResultHeroes] = useState([]);


    useMemo(() => {
        const filterHeroes = heroes.filter((heroe) => {
          return heroe.heroe.toLowerCase().includes(search.toLowerCase());
        });
        setResultHeroes(filterHeroes);
    }, [search, heroes]);

    return [search, setSearch, resultHeroes];
}

export default useFilterHeroes
