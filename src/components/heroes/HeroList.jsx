import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                // Con la funcion Map , vamos a crear  por cada elemento , un HeroCard , 
                heroes.map(hero => (
                    <HeroCard 
                        key={hero.id} 
                        {...hero}
                     />   
                ))
            }
        </div>
    )
}
// Orden de los Componentes
// 1-HeroList
// 2-HeroCard
// 3-HeroScreen
