function PartyLeader({ leader }) {
  console.log('leader:', leader);
  // console.log('leader.name:', leader.name);
  return (
    <div>
      <h2>Party Leader</h2>
      {leader && <h3>{leader.name}</h3>}
      {/* <h3>{leader.name}</h3> */}
    </div>
  );
}

export default PartyLeader;
