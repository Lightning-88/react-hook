export default function Button(props) {
  const buttonStyles = {
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    border: "0.1rem solid #000",
    backgroundColor: "blue",
    color: "#fff",
  };
  return (
    <div>
      <button style={buttonStyles} onClick={props.funcHandler}>
        {props.name}
      </button>
    </div>
  );
}
