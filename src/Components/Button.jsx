export default function Button(props) {
  return <input type="button" value={props.value} onClick={props.func}></input>;
}
