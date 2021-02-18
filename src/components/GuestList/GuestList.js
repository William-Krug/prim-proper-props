import Guest from '../Guest/Guest';

function GuestList({ guestList, onDelete }) {
  console.log('guestList:', guestList);
  return (
    <div>
      <h2>Guest List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Kid's Meal</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {guestList.map((guest) => {
            console.log('guest:', guest);
            return (
              <Guest
                key={guest.id}
                id={guest.id}
                guest={guest.name}
                kidsMeal={String(guest.kidsMeal)}
                onDelete={onDelete}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default GuestList;
