import React, {useState} from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
// import "react-big-calendar/lib/addons/dragAndDrop/styles.css"
// import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop"
import moment from 'moment'

const localizer = momentLocalizer(moment)
// const DnDCalendar = withDragAndDrop(Calendar);

function CalendarComp() {
    const myEventsList = [{
        start: moment().toDate(),
        end: moment().toDate(),
        title: "Live shooting"
      }]

    return(
        <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
        />
    )
}

export default CalendarComp