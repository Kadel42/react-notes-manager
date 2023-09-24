import s from "./style.module.css";

export function ButtonPrimary(props) {
  return (
    <button
      disabled={props.isDisabled}
      onClick={props.onClick}
      type={props.type}
      className={`btn btn-primary ${s.button} ${props.className}`}
    >
      {props.children}
    </button>
  );
}
