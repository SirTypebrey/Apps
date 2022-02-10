import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TablaApi() {
  const [coins, setCoins] = useState([]); //this.state = {coins: null}

  //Meter Api.
  const getData = async () => {
    const res = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1'
    );
    setCoins(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(coins);

  return (
    <div className="App">
      <h1>Criptomonedas con más valor</h1>


      
      {coins.map((item) => {
        return (
          <div>
            <img
              src={item.image}
              style={{ width: '3%' }}
              className="img-fluid me-4"
              alt="a"
            />
            {item.name} {item.symbol} {item.current_price}
          </div>
        );
      })}
    </div>
  );
}

/*

<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>



*/ 