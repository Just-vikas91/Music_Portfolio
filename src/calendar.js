// import { Calendar } from '@fullcalendar/core';
// import dayGridPlugin from '@fullcalendar/daygrid';

// document.addEventListener('DOMContentLoaded', function() {
//   const calendarEl = document.getElementById('calendar');

//   if (calendarEl) {
//     const calendar = new Calendar(calendarEl, {
//       plugins: [dayGridPlugin]
//       // add options here, e.g. initialView, events, etc.
//     });

//     calendar.render();
//   }
// });
// calendar.js
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

export function initializeCalendar() {
  const calendarEl = document.getElementById('calendar');
  if (calendarEl) {
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      events: [
        { title: 'Teaching', date: '2025-08-15' },
        { title: 'Concert', date: '2025-08-18' }
      ]
    });
    calendar.render();
  }
}
