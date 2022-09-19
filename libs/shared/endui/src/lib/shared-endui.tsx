import styles from './shared-endui.module.scss';

/* eslint-disable-next-line */
export interface SharedEnduiProps {}

export function SharedEndui(props: SharedEnduiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedEndui!</h1>
    </div>
  );
}

export default SharedEndui;
