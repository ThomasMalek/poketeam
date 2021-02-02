import React from 'react';

function Pokemon({data}) {

    return(
        <div className='poke'>
            <div className='leftSide'>
                <div className='pokepicholder'>
                    <img className='pokepic' src={data.sprites.front_default} alt='Missing Img'></img>
                </div>
                <h1 className='pokeName'>{data.name.toUpperCase()}</h1>
                <h4 className='pokeID'>ID:{data.id}</h4>
            </div>
            <div className="rightSide">
                <div className='textBox'>
                    <p className='desc'>Type 1</p>
                    <p className='field'>{data['types']['0']['type']['name'].toUpperCase()}</p>
                </div>
                <div className='textBox'>
                    <p className='desc'>Type 2</p>
                    {data['types']['1'] ? <p className='field'>{data['types']['1']['type']['name'].toUpperCase()}</p>:<p className='field'>None</p>}
                </div>
                <div className='textBox'>
                    <p className='desc'>Speed</p>
                    <p className='field'>{data['stats']['0']['base_stat']}</p>
                </div>
                <div className='textBox'>
                    <p className='desc'>SP Defense</p>
                    <p className='field'>{data['stats']['1']['base_stat']}</p>
                </div>
                <div className='textBox'>
                    <p className='desc'>SP Attack</p>
                    <p className='field'>{data['stats']['2']['base_stat']}</p>
                </div>
                <div className='textBox'>
                    <p className='desc'>Defense</p>
                    <p className='field'>{data['stats']['3']['base_stat']}</p>
                </div>
                <div className='textBox'>
                    <p className='desc'>Attack</p>
                    <p className='field'>{data['stats']['4']['base_stat']}</p>
                </div>
                <div className='textBox'>
                    <p className='desc'>HP</p>
                    <p className='field'>{data['stats']['5']['base_stat']}</p>
                </div>
            </div>
        </div>
    )
}


export default Pokemon;