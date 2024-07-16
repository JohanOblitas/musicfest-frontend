import { EventEmitter } from 'events';
import Dispatcher from './Dispatcher';
import * as ActionTypes from './ActionTypes';

let tickets = [
  { id: 1, eventId: 1, type: 'VIP', price: 100, available: 50 },
  { id: 2, eventId: 1, type: 'General', price: 50, available: 200 },
]; // Test data

const CHANGE_EVENT = 'change';

class TicketStore extends EventEmitter {
  getTickets() {
    return tickets;
  }

  // Métodos para manejar acciones
  handleBuyTicket(action) {
    const { ticketId } = action.payload;
    const ticketIndex = tickets.findIndex(ticket => ticket.id === ticketId);
    if (ticketIndex !== -1) {
      tickets[ticketIndex].available--;
      this.emitChange();
    }
  }

  // Método para emitir cambios a los componentes suscritos
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  // Método para registrar callbacks de cambios
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  // Método para eliminar callbacks de cambios
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

const ticketStore = new TicketStore();

// Registrar el dispatcher y manejar acciones
Dispatcher.register(action => {
  switch(action.type) {
    case ActionTypes.BUY_TICKET:
      ticketStore.handleBuyTicket(action);
      break;
    default:
  }
});

export default ticketStore;
