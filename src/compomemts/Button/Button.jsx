import styles from './Button.module.css'
import classNames from "classnames";

const Button = ({variant,text,children,onCLick}) => {
const stylez = classNames(styles.btn,{
  [styles.success]: variant === 'success',
  [styles.danger]: variant === 'danger',
  [styles.warning]: variant === 'warning',
})
  return (
    <button onClick={onCLick} className={stylez}>{children}</button>
  );
};

export default Button;