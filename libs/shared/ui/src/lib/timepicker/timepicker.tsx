import './timepicker.scss';
import 'rc-time-picker/assets/index.css';

import React from 'react';
import ReactDom from 'react-dom';

import moment from 'moment';

import TimePicker from 'rc-time-picker';

const format = 'h:mm a';

const now = moment().hour(0).minute(0);
/* eslint-disable-next-line */
export interface TimepickerProps {
  onChange: (v: moment.Moment) => void;
}

export function Timepicker(props: TimepickerProps) {
  return (
    <div>
      <TimePicker
        showSecond={false}
        defaultValue={now}
        className={'timepicker'}
        onChange={props.onChange}
        format={format}
        use12Hours
        inputReadOnly
      />
    </div>
  );
}

export default Timepicker;
