import styles from './ticket-card.module.scss';

/* eslint-disable-next-line */
export interface TicketCardProps {}

export function TicketCard(props: TicketCardProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TicketCard!</h1>
    </div>
  );
}

export default TicketCard;
