import styles from './flash-ticket.module.scss';

/* eslint-disable-next-line */
export interface FlashTicketProps {}

export function FlashTicket(props: FlashTicketProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FlashTicket!</h1>
    </div>
  );
}

export default FlashTicket;
