import React, {useState, useEffect} from 'react'

const ACCESS_TOKEN = '3875372609247663'
const DOMAIN = 'https://www.superheroapi.com/api.php/'

const Hero = () => {
  const [posts, setPosts] = useState([]);
  const id=Math.floor(Math.random()*100)+1;
  const fetchData = async() => {
    try {
        await fetch(`${DOMAIN}${ACCESS_TOKEN}/${id}`)
                    .then((response) => response.json())
                    .then((data) => { setPosts([data])});
    }catch(error) {
        console.log(error)
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {fetchData();}, []); 

  return (
    <div>
         <h3 className="text-muted">API HEROES <button type="button" onClick={()=>{fetchData();}} className="btn btn-purple">Ver Otro</button></h3>
         {posts.length ? posts.map((element,index) => {
                        return (
                            <div className="card" key={index.toString()}> 
                                <img src={element.image.url} alt="" />
                                <div className="card-body">
                                    <h4>Nombre: <span className="detalle">{element.name}</span></h4>
                                    <h4>Ocupacion: <span className="detalle">{element.work.occupation}</span></h4>
                                    <h4>Raza: <span className="detalle">{element.appearance.race}</span></h4>
                                    <h4>Poder:</h4>
                                      <ul className="detalle">
                                        <li>Combate: {element.powerstats.combat}</li>
                                        <li>Velocidad: {element.powerstats.speed}</li>
                                        <li>Durabilidad: {element.powerstats.durability}</li>
                                      </ul>
                                </div>
                            </div>
                        );
                    }) : <span>Loading...</span>}
    </div>
  )
}

export default Hero
