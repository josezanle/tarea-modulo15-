import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

const HeroScreen = ({history}) => {

// para renderizar el id de cada personaje , debemos extraer los parametros del url , 
// para eso utilizaremos el hook usePrams. 

const {heroeId} = useParams();

const hero = useMemo (() => getHeroById(heroeId),[heroeId]);

// si el hero no existe , va a redireccionar al inicio
if(!hero){
    return <Redirect to="/" />
}

//esta funcion retorna la posicion anterior de la pagina , 
// necesitamos sustraer como props, el history.
const handleReturn = ()=>{

    if(history.length <=2){
        history.push('/');
    }else {
        history.goBack();
    }
}

const {
    publisher,
    alter_ego,
    superhero,
    first_appearance,
    characters,
}= hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={`../assets/heroes/${heroeId}.jpg`} 
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8 animate__animated animate__fadeInRight">
                    <h3>{superhero}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Alter ego:</b>{alter_ego}</li>
                        <li className="list-group-item"><b>Publisher:</b>{publisher}</li>
                        <li className="list-group-item"><b>First appearance:</b>{first_appearance}</li>
                    </ul>

                    <h5>Characters</h5>
                    <p>{characters}</p>

                    <button 
                            className="btn btn-outline-info"
                            onClick={handleReturn}
                    >
                        Atras
                    </button>

                    
            </div>
        </div>
    )
}

export default HeroScreen;
