import "bootstrap/dist/css/bootstrap.css";
import { SyntheticEvent } from "react";

interface Props {
  classBtn: string;
  text: string;
  url: any
}

export const Button = (props: Props) => {
  const { classBtn, text, url } = props;

  const onHandleClick = (event: SyntheticEvent) => {
    event.preventDefault();
    window.location.assign(url);
  }

  return (
    <button
        className={`btn ${classBtn}`} 
        type="button"
        onClick={(event) => onHandleClick(event)}
    >
        {text}
    </button>
  );
};
