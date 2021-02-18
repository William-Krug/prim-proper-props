import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GuestList from '../GuestList/GuestList';
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies';
import GuestForm from '../GuestForm/GuestForm';
import PartyLeader from '../PartyLeader/PartyLeader';

function App() {
  let [guestList, setGuestList] = useState([]);
  let [newGuestName, setNewGuestName] = useState('');
  let [newGuestMeal, setNewGuestMeal] = useState('false');

  //On load, get guests
  useEffect(() => {
    getGuests();
  }, []);

  const getGuests = () => {
    axios
      .get('/guests')
      .then((response) => {
        setGuestList(response.data);
      })
      .catch((err) => {
        alert('error getting guests');
        console.log(err);
      });
  };

  const addGuest = () => {
    axios
      .post('/guests', { name: newGuestName, kidsMeal: newGuestMeal })
      .then((response) => {
        // clear inputs
        setNewGuestName('');
        setNewGuestMeal(false);

        getGuests();
      })
      .catch((err) => {
        alert('Error Adding Guest');
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newGuestName) {
      addGuest();
    } else {
      alert('The new guest needs a name!');
    }
  };

  const deleteGuest = (guestID) => {
    console.log('ready to delete guest id:', guestID);
    axios({
      method: 'DELETE',
      url: `/guests/${guestID}`,
    })
      .then((response) => {
        console.log('Guest Deleted');
        getGuests();
      })
      .catch((error) => {
        console.log('*** ERROR with DELETE request', error);
        alert('Error Removing Guest');
      });
  };

  console.log(newGuestMeal);
  return (
    <div className="App">
      <Header />
      {/* <h2>Party Leader</h2>
      {guestList[0] && <h3>{guestList[0].name}</h3>} */}
      <PartyLeader leader={guestList[0]} />
      <GuestForm
        newGuestName={newGuestName}
        setNewGuestName={setNewGuestName}
        newGuestMeal={newGuestMeal}
        setNewGuestMeal={setNewGuestMeal}
        handleSubmit={handleSubmit}
      />
      <GuestList guestList={guestList} onDelete={deleteGuest} />
      <DinnerSupplies guestList={guestList} />
      <Footer />
    </div>
  );
}

export default App;
