import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";

import styles from "../../../styles/button.module.css";

interface Props {
  textColor?: string;
  background: string;
  text: string;
  url: any;
}

export const Button = (props: Props) => {
  const { background, textColor, text, url } = props;

  return (
    <button
      className={styles.btn}
      type="button"
      style={{
        backgroundColor: background,
      }}
    >
      <Link href={url} target="_blank" style={{ color: textColor }}>
        {text}
      </Link>
    </button>
  );
};
