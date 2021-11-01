
import React, {useState, useEffect} from 'react'

const Persona = ()  => {
    const [posts, setPosts] = useState([]);

    const fetchData = async() => {
        try {
            await fetch("https://randomuser.me/api/")
                        .then((response) => response.json())
                        .then((data) => { return setPosts(data.results)});
        }catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {fetchData();}, []);
    
    return (
        <div>
            <h3 className="text-muted">RandomAPI <button type="button" onClick={()=>{fetchData();}} className="btn btn-success">Ver Otro</button> </h3>
            {posts.length ? posts.map((element,index) => {
                        return (
                            <div className="card" key={index.toString()}> 
                                <img src={element.picture.large} alt="" />
                                <div className="card-body">
                                    <h4>Nombre: <span className="detalle">{element.name.title} {element.name.first} {element.name.last}</span></h4>
                                    <h4>Ciudad: <span className="detalle">{element.location.city}</span></h4>
                                    <h4>Estado: <span className="detalle">{element.location.state}</span></h4>
                                    <h4>Email: <span className="detalle">{element.email}</span></h4>
                                    <h4>Celular: <span className="detalle">{element.cell}</span></h4>
                                </div>
                            </div>
                        );
                    }) : <span>Loading...</span>}
             
          
        </div>
    )
}

export default Persona