import React, {useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

// import { Calendar, momentLocalizer } from 'react-big-calendar'
// import 'react-big-calendar/lib/css/react-big-calendar.css'
// import "react-big-calendar/lib/addons/dragAndDrop/styles.css"
// import FullCalendar from 'fullcalendar-reactwrapper'
// import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
// import moment from 'moment'
// import he from 'moment/locale/he.js'

//const localizer = momentLocalizer(moment)

function CalendarComp() {
    const events = [
        { title: 'מטווחים חיים', date: '2021-01-05' },
        { title: 'מטווחי לייזר', date: '2021-01-10' }
    ]

    return(
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            headerToolbar={{start: 'dayGridMonth,dayGridWeek,dayGridDay', 
                            center: 'title' ,
                            end: 'prev,next today'}}
            buttonText={{today: 'היום',
                         dayGridMonth: 'חודש',
                         dayGridWeek: 'שבוע',
                         dayGridDay: 'יום'}}
            events={events}
            locale='he'
            height='auto'
            direction='rtl'
        />

        // <Calendar
        //     localizer={localizer}
        //     events={myEventsList}
        //     rtl='true'
        //     culture='he'
        //     views={views}
        //     style={{ height: 500 }}
        // />

        // <FullCalendar
        //     header = {{
        //         left: 'today myCustomButton prev,next',
        //         center: 'title',
        //         right: 'agenda,basicDay,basicWeek,month'
        //     }}
        //     //navLinks= {true} // can click day/week names to navigate views
        //     editable= {true}
        //     eventLimit= {true} // allow "more" link when too many events
        //     events = {events} 
        //     locale='he'
        //     buttonText={{ today: 'היום', month:'חודש' , basicWeek: 'שבוע', basicDay: 'יום', agenda: 'סדר יום'}}
        // />
    )
}

export default CalendarComp