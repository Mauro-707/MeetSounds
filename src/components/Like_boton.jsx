import React, { useState } from 'react';

const LikeButton = () => {
  // Estado para saber si el botón ha sido presionado
  const [liked, setLiked] = useState(false);
  const [guardar, setGuardar] = useState(false);

  // Función para manejar el click en el botón
  const handleClick = () => {
    setLiked(!liked);
  };
  const handleClick_guardar = () => {
    setGuardar(!guardar);
  };
  /*color de los iconos #6C6C6C*/
  const likeAzul = '/public/Like_azul_24px.png'
  const likeBlanco = '/public/Like_24px.png'
  const guardarBlaco = '/public/Guardar_24px.png'
  const guardarRosa = '/public/Guardar_rosa_24px.png'
  const Comentario = '/public/Comentario_24px.png'
  const Compartir = '/public/Compartir_24px.png'

  return (
    <>
    <button className='boton_reaccion' onClick={handleClick} >
      <img className='icon_reaccion_like' src={liked ? likeAzul : likeBlanco} alt={liked ? 'Liked' : 'Unliked'} />
    </button>
    <button className='boton_reaccion' >
      <img className='icon_reaccion_comentario' src={Comentario} />
    </button>
    <button className='boton_reaccion' >
      <img className='icon_reaccion_compartir' src={Compartir} />
    </button>
    <button className='boton_reaccion' onClick={handleClick_guardar} >
      <img className='icon_reaccion_guardar' src={guardar ? guardarRosa : guardarBlaco} alt={guardar ? 'Liked' : 'Unliked'} />
    </button>
    </>
  );
};

export default LikeButton;
