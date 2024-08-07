import '../../css/MenuLateral.css'

const MenuLateral = () => {
    const icon_lupa = '/public/buscar.png'

    return(
        <>
            <div className="Contenedor_menulateral">
                <div className="Seccion_1">
                    <div className='Buscador'>
                        <div className='div1'>
                            <button className='boton'><img className='icon' src={icon_lupa} alt="Buscar" /></button>  
                            <input className='input_txt' type="text" name="Buscar" id="buscar" placeholder='Buscar' />  
                        </div>
                    </div>
                    
                </div>
            </div>
        
        </>
    )
}

export default MenuLateral;