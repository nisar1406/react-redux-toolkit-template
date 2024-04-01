import ChevronLeftIcon from '@heroicons/react/24/solid/ChevronLeftIcon';
import ChevronRightIcon from '@heroicons/react/24/solid/ChevronRightIcon';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

import { CALENDAR_EVENT_STYLE } from './util';

const THEME_BG = CALENDAR_EVENT_STYLE;

interface CalendarEvent {
  title: string;
  theme: string;
  startTime: moment.Moment;
  endTime: moment.Moment;
}

interface CalendarViewProps {
  calendarEvents: CalendarEvent[];
  addNewEvent: (date: Date) => void;
  openDayDetail: (details: {
    filteredEvents: CalendarEvent[];
    title: string;
  }) => void;
}

function CalendarView({
  calendarEvents,
  addNewEvent,
  openDayDetail,
}: CalendarViewProps) {
  const today = moment().startOf('day');
  const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
  ];

  const [firstDayOfMonth, setFirstDayOfMonth] = useState<moment.Moment>(
    moment().startOf('month')
  );
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [currMonth, setCurrMonth] = useState<string>(() =>
    moment(today).format('MMM-yyyy')
  );

  useEffect(() => {
    setEvents(calendarEvents);
  }, [calendarEvents]);

  useEffect(() => {}, [currMonth]);

  const allDaysInMonth = (): Date[] => {
    const start = moment(firstDayOfMonth).startOf('week');
    const end = moment(moment(firstDayOfMonth).endOf('month')).endOf('week');
    const days: Date[] = [];
    let day = start;
    while (day <= end) {
      days.push(day.toDate());
      day = day.clone().add(1, 'd');
    }
    return days;
  };

  const getEventsForCurrentDate = (date: Date): CalendarEvent[] => {
    let filteredEvents = events.filter((e) =>
      moment(date).isSame(moment(e.startTime), 'day')
    );
    if (filteredEvents.length > 2) {
      const originalLength = filteredEvents.length;
      filteredEvents = filteredEvents.slice(0, 2);
      filteredEvents.push({
        title: `${originalLength - 2} more`,
        theme: 'MORE',
        startTime: moment(),
        endTime: moment(),
      });
    }
    return filteredEvents;
  };

  const openAllEventsDetail = (date: Date, theme: string): number | void => {
    if (theme !== 'MORE') return 1;
    const filteredEvents = events
      .filter((e) => moment(date).isSame(moment(e.startTime), 'day'))
      .map((e) => ({
        title: e.title,
        theme: e.theme,
        startTime: e.startTime,
        endTime: e.endTime,
      }));
    openDayDetail({ filteredEvents, title: moment(date).format('D MMM YYYY') });
  };

  const isToday = (date: Date): boolean => {
    return moment(date).isSame(moment(), 'day');
  };

  const isDifferentMonth = (date: Date): boolean => {
    return moment(date).month() !== moment(firstDayOfMonth).month();
  };

  const getPrevMonth = (): void => {
    const firstDayOfPrevMonth = moment(firstDayOfMonth)
      .add(-1, 'M')
      .startOf('month');
    setFirstDayOfMonth(firstDayOfPrevMonth);
    setCurrMonth(moment(firstDayOfPrevMonth).format('MMM-yyyy'));
  };

  const getCurrentMonth = (): void => {
    const firstDayOfCurrMonth = moment().startOf('month');
    setFirstDayOfMonth(firstDayOfCurrMonth);
    setCurrMonth(moment(firstDayOfCurrMonth).format('MMM-yyyy'));
  };

  const getNextMonth = (): void => {
    const firstDayOfNextMonth = moment(firstDayOfMonth)
      .add(1, 'M')
      .startOf('month');
    setFirstDayOfMonth(firstDayOfNextMonth);
    setCurrMonth(moment(firstDayOfNextMonth).format('MMM-yyyy'));
  };

  return (
    <>
      <div className="w-full bg-base-100 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex justify-normal gap-2 sm:gap-4">
            <p className="font-semibold text-xl w-48">
              {moment(firstDayOfMonth).format('MMMM yyyy').toString()}
              <span className="text-xs ml-2 ">Beta</span>
            </p>
            <button
              className="btn btn-square btn-sm btn-ghost"
              onClick={getPrevMonth}
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              className="btn btn-sm btn-ghost normal-case"
              onClick={getCurrentMonth}
            >
              Current Month
            </button>
            <button
              className="btn btn-square btn-sm btn-ghost"
              onClick={getNextMonth}
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
          <div>
            <button
              className="btn btn-sm btn-ghost btn-outline normal-case"
              onClick={() => addNewEvent(new Date())}
            >
              Add New Event
            </button>
          </div>
        </div>
        <div className="my-4 divider" />
        <div className="grid grid-cols-7 gap-6 sm:gap-12 place-items-center">
          {weekdays.map((day, key) => (
            <div className="text-xs capitalize" key={key}>
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 mt-1 place-items-center">
          {allDaysInMonth().map((day, idx) => (
            <div
              key={idx}
              className={
                colStartClasses[moment(day).day().toString()] +
                ' border border-solid w-full h-28 '
              }
            >
              <p
                className={`inline-block flex items-center justify-center h-8 w-8 rounded-full mx-1 mt-1 text-sm cursor-pointer hover:bg-base-300 ${
                  isToday(day) &&
                  ' bg-blue-100 dark:bg-blue-400 dark:hover:bg-base-300 dark:text-white'
                } ${isDifferentMonth(day) && ' text-slate-400 dark:text-slate-600'}`}
                onClick={() => addNewEvent(day)}
              >
                {moment(day).format('D')}
              </p>
              {getEventsForCurrentDate(day).map((e, k) => (
                <p
                  key={k}
                  onClick={() => openAllEventsDetail(day, e.theme)}
                  className={`text-xs px-2 mt-1 truncate ${THEME_BG[e.theme] || ''}`}
                >
                  {e.title}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CalendarView;
