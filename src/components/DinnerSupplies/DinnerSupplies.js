import SilverWare from '../SilverWare/SilverWare';

function DinnerSupplies({ guestList }) {
  const count = guestList.length;
  return (
    <>
      <h2>Dinner Supplies</h2>
      {/* <div>Spoons: {guestList.length * 2}</div>
      <div>Forks: {guestList.length * 2}</div>
      <div>Knives: {guestList.length * 2}</div> */}
      <SilverWare name="Spoons" count={count} />
      <SilverWare name="Forks" count={count} />
      <SilverWare name="Knives" count={count} />
    </>
  );
}

export default DinnerSupplies;
