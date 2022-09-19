import styles from './tabs.module.scss';

/* eslint-disable-next-line */
export interface TabsProps {}

export function Tabs(props: TabsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Tabs!</h1>
    </div>
  );
}

export default Tabs;
