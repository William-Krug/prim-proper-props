import Guest from '../Guest/Guest';

function GuestList({ guestList, onDelete }) {
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
            return (
              <Guest
                key={guest.id}
                guest={guest.name}
                kidsMeal={String(guest.kidsMeal)}
                onDelete={onDelete}
              />
            );
            // <tr key={guest.id}>
            //   <td>{guest.name}</td>
            //   <td>{String(guest.kidsMeal)}</td>
            //   <td>
            //     <button onClick={() => onDelete(guest.id)}>Remove Guest</button>
            //   </td>
            // </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default GuestList;
