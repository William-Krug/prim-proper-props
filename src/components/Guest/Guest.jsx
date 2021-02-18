function Guest({ guest, kidsMeal, onDelete }) {
  return (
    <tr>
      <td>{guest}</td>
      <td>{kidsMeal}</td>
      <td>
        <button onClick={() => onDelete(guest.id)}>Remove Guest</button>
      </td>
    </tr>
  );
}

export default Guest;
