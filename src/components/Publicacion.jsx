import ImageComponent from './Config_Img';
import LikeButton from './Like_boton';

function Publicaciones() {
    let Lista_Publicaciones = [
        {
            Img_perfil: "/public/perfil_imagen.png",
            Usuario: "Mauro Berni",
            Arrova: "@Mauro",
            Tiempo: "5min",
            Texto: "Esta es la publicacion de Mauro",
            Img: "/public/imagen_horizontal.jpg"
        },
        {
            Img_perfil: "/public/perfil_imagen.png",
            Usuario: "Juana Berni",
            Arrova: "@JBerni",
            Tiempo: "10min",
            Texto: "Esta es la publicacion de Juana",
            Img: "/public/back_man.jpg"
        },
        {
            Img_perfil: "/public/perfil_imagen.png",
            Usuario: "Mauro Berni",
            Arrova: "@Mauro",
            Tiempo: "5min",
            Texto: "Esta es la publicacion de Mauro",
            Img: "/public/imagen_muestra2.jpeg"
        },
        {
            Img_perfil: "/public/perfil_imagen.png",
            Usuario: "Mauro Berni",
            Arrova: "@Mauro",
            Tiempo: "5min",
            Texto: "Esta es la publicacion de Mauro",
            Img: "/public/Imgen_muestra.jpg"
        },
    ]



    return (
        <>
            {Lista_Publicaciones.map((Public, index) => (
                <div key={index} className='Publicacion'>
                    <div className='Publicacion_nav'>
                        <img className='img_perfil' src={Public.Img_perfil} alt="img_perfil" />
                        <div className='Publicacion_usuario'>
                            <p className='Nombre_usuario'>{Public.Usuario}</p>
                            <p className='usuario_a'>{Public.Arrova}</p>
                        </div>
                        <p className='Tiempo'>{Public.Tiempo}</p>
                        <img className='img_mas' src="/public/solicitud.png" alt="" />
                    </div>
                    <div className='Publicacion_texto'>
                        <p>{Public.Texto}</p>
                    </div>
                    <div className='Publicacion_media'>
                        <ImageComponent imageSrc={Public.Img} />
                    </div>
                    <div className='reaccion'>
                        <LikeButton/>
                    </div>
                    
                </div>
            ))}
        </>
    );



}


export default Publicaciones;