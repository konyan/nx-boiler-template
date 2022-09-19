import styles from './related-ticket.module.scss';

/* eslint-disable-next-line */
export interface RelatedTicketProps {}

export function RelatedTicket(props: RelatedTicketProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to RelatedTicket!</h1>
    </div>
  );
}

export default RelatedTicket;
