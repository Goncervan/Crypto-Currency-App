import React from 'react'
import '../Styles/CoinRow.modules.css'

export default function CoinRow({ coin, index }) {
    return (
        <div className='principal'>
            <img className='img' src={coin.image} alt={coin.name} />
            <p className='name info'>{coin.name}</p>
            <p className='symbol info'>{coin.symbol}</p>
            <p className='precio info'>Precio:{coin.current_price}</p>
            <p
                className={coin.price_change_percentage_24h > 0 ? 'positive' : 'negative'}>
                %{coin.price_change_percentage_24h.toFixed(2)}
            </p>
            <p className='volumen info'>Volumen: {coin.total_volume.toLocaleString()}</p>
        </div>
    )
}
