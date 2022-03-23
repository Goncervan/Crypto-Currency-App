import { useEffect, useState } from 'react';
import './Styles/App.modules.css';
import axios from 'axios';
import TableCoins from './components/TableCoins';

function App() {

  const getData = async (page) => {
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=ars&order=market_cap_desc&per_page=100&page=${page}`)
    setCoins(res.data);
  };

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData(0);
  }, []);

  useEffect(() => {
    getData(page)
  }, [page])

  function handlePrevPage(e) {
    e.preventDefault();
    if (page !== 1) {
      e.preventDefault();
      setPage(page - 1)
    } else if (page === 1) {
      alert("Primera Página!")
    }
  }
  function handleNextPage(e) {
    e.preventDefault();
    if (page < 100) {
      e.preventDefault();
      setPage(page + 1)
    } else {
      alert("Última Página!")
    }
  }


  return (
    <div className='App'>
      <nav className='nav'>
        <h1 className='title'>Coin Market</h1>
        <div className='container-input'>
          <input
            className='input'
            type="text"
            placeholder="Buscar 🔎"
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </nav>
      <main className='main'>
        <TableCoins coins={coins} search={search} />
      </main>
      <button className='btn-prev' onClick={(e) => handlePrevPage(e)}> ❮ </button>
      <button className='btn-next' onClick={(e) => handleNextPage(e)}> ❯ </button>
    </div >
  );
}

export default App;
