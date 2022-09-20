import styles from './multi-datepicker.module.scss';

import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import { useState } from 'react';
/* eslint-disable-next-line */
export interface MultiDatepickerProps {}

export function MultiDatepicker(props: MultiDatepickerProps) {
  const [dates, setDates] = useState([
    new Date(),
    //unix time in milliseconds (August 21 2020)
  ]);
  return (
    <DatePicker value={dates} onChange={() => {}} plugins={[<DatePanel />]} />
  );
}

export default MultiDatepicker;
