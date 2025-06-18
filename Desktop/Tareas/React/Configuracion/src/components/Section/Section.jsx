
import './Section.css';

import fresaImg from'../../assets/fresa.png'
import frutasImg from'../../assets/frutas.png'
import limonImg from'../../assets/limon.png'

const fruits =[
    {
        id:1,
        name: 'fresa',
        description:'strawnberry',
        image: fresaImg
    },
    {
        id:2,
        name: 'manzana',
        description:'apple',
        image: frutasImg
    },
     {
        id:3,
        name: 'limon',
        description:'lemmon',
        image: limonImg
    }

];
export const Section = () => {
    const handleClick=(name)=>{
        console.log(`Contactarle a ${name}`)
    }

return (

    <section>
        {
            fruits.map(({id,name,description,image})=>{
                return(
                    <div className='card' key={id}>
                        <img className='image' src={image} alt={name} />
                        <h2 className='name'>{name}</h2>
                        <p className='description'>{description}</p>
                        <button id={id} onClick={()=> handleClick(name)}>contactarle</button>
                    </div>
                )
            })
            

                    
            
    } 

    </section>
    

                
    )

}


