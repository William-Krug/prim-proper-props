function PartyLeader({ leader }) {
  console.log('leader:', leader);
  // console.log('leader.name:', leader.name);
  return (
    <div>
      <h2>Party Leader</h2>
      {/* 
          Make sure leader exists
          and if it does, then render
          to DOM
       */}
      {leader && <h3>{leader.name}</h3>}
      {/* 
          this may not work if .name
          doesn't exist for a split second
       */}
      {/* <h3>{leader.name}</h3> */}
    </div>
  );
}

export default PartyLeader;
