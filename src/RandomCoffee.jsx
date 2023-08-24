export function RandomCoffee(props) {
  return (
    <div id="random-coffee">
      <h3>Each time you click the button, a new picture of coffee will appear!</h3>
      <img src={props.picturesofcoffee} />
    </div>
  );
}
