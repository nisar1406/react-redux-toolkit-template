import { IData } from '../hooks/useApiRequest';

export const MODAL_BODY_TYPES: IData = Object.freeze({
  USER_DETAIL: 'USER_DETAIL',
  LEAD_ADD_NEW: 'LEAD_ADD_NEW',
  CONFIRMATION: 'CONFIRMATION',
  DEFAULT: '',
});

export const RIGHT_DRAWER_TYPES = Object.freeze({
  NOTIFICATION: 'NOTIFICATION',
  CALENDAR_EVENTS: 'CALENDAR_EVENTS',
} as const);

export const CONFIRMATION_MODAL_CLOSE_TYPES: IData = Object.freeze({
  LEAD_DELETE: 'LEAD_DELETE',
} as const);
