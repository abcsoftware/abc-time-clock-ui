import React, { Component } from 'react';
import Day from '../day/Day';
import styles from './TimeLog.css';

export default class TimeLog extends Component {

  componentWillMount() {
    this.props.fetch();
  }

  render() {

    const { days, daysFetching } = this.props;

    if (daysFetching) {
      return (
        <div className="alert alert-warning" role="alert">
          Loading...
        </div>
      );
    }

    if (!days || days.length<1) {
      return (
        <div className="alert alert-info" role="alert">
          No punches found, please add one.
        </div>
      );
    }

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="2">Time Log</th>
                </tr>
            </thead>
            <tfoot>
            </tfoot>
            <tbody>
                {days.map(this.getDayRow)}
            </tbody>
        </table>
    )
  }

  getDayRow(day, index) {
    return  <Day key={day.date} className={styles.day} day={day}/>;
  }

}
