function PartyLeader({ leader }) {
  console.log('leader:', leader);
  return (
    <div>
      <h2>Party Leader</h2>
      <h3>{leader.name}</h3>
    </div>
  );
}

export default PartyLeader;
