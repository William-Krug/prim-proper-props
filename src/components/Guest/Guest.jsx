function Guest({ id, guest, kidsMeal, onDelete }) {
  console.log('guest.id:', guest.id);
  return (
    <tr>
      <td>{guest}</td>
      <td>{kidsMeal}</td>
      <td>
        <button onClick={() => onDelete(id)}>Remove Guest</button>
      </td>
    </tr>
  );
}

export default Guest;
