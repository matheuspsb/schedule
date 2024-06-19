import React, { useState, useContext, useEffect } from 'react';
import './App.css';
import GlobalContext from './context/GlobalContext';
import { getMonth } from './util'

import ScheduleHeader from './components/ScheduleHeader';
import Sidebar from './components/Sidebar';
import Month from './components/Month';
import EventModal from './components/EventModal';


function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const { monthIndex, showEventModal } = useContext(GlobalContext)

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      
      <div className="h-screen flex flex-col">
        <ScheduleHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
