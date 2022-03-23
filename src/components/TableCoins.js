import React from 'react'
import CoinRow from './CoinRow'
import '../Styles/TableCoins.modules.css'


export default function TableCoins({ coins, search }) {

    const filteredCoins = coins.filter(
        (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) | 
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <div className='coins'>
                {filteredCoins.map((coin, index) => (
                    <CoinRow coin={coin} key={index} index={index} />
                ))}
            </div>
        </div>
    )
}
