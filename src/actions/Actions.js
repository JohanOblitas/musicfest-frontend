import * as ActionTypes from './ActionTypes';

export const buyTicket = (ticketId) => ({
  type: ActionTypes.BUY_TICKET,
  payload: { ticketId }
});

export const loginUser = (username, password) => ({
  type: ActionTypes.LOGIN_USER,
  payload: { username, password }
});

export const registerUser = (userData) => ({
  type: ActionTypes.REGISTER_USER,
  payload: { userData }
});

export const searchEvents = (query) => ({
  type: ActionTypes.SEARCH_EVENTS,
  payload: { query }
});