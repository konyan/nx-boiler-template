import styles from './badge.module.scss';

/* eslint-disable-next-line */
export interface BadgeProps {}

export function Badge(props: BadgeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Badge!</h1>
    </div>
  );
}

export default Badge;
