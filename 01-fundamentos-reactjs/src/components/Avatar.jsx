import styles from "./Avatar.module.css";
export function Avatar({ hasBorder = true, src }, props) {
  return (
    <img
      src={src}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
}
