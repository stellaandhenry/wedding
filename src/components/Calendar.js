import React from 'react';
import './Calendar.css';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';

function Calendar() {
    const animatedItem = [
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0)
    ];
  const year = 2026;
  const month = 6;
  const weddingDay = 6;

  const getDaysInMonth = (year, month) => {
    return new Date(year, month - 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month - 1, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const calendarDays = [];
  // Create empty divs for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="day empty"></div>);
  }

  // Create divs for each day of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const isWeddingDay = day === weddingDay;
    calendarDays.push(
      <div key={day} 
        className={`day ${isWeddingDay ? 'wedding-day' 
        : day % 7 == 0 ? 'holiday': day == 3 ? 'holiday' : ''}`}>
        {day}
      </div>
    );
  }

  return (
    <div className="my-5 text-center">
      <div className="calendar">
        <div  {...animatedItem[0]} className="d-flex justify-content-between align-items-center mb-4 month-header">
          <div style={{display: 'flex', flexDirection: 'column', margin:'10px', gap: '8px'}}>
            <span style={{fontWeight: 'bold', fontSize: '1.7rem' }}>2026.06.06</span>
            <span className="ms-2" style={{fontSize: '1.2rem', color: '#555' }}>토요일 오전 11시</span>
          </div>
        </div>
        <div  {...animatedItem[1]} className="days-header">
          <div className="day-name holiday">일</div>
          <div className="day-name">월</div>
          <div className="day-name">화</div>
          <div className="day-name">수</div>
          <div className="day-name">목</div>
          <div className="day-name">금</div>
          <div className="day-name">토</div>
        </div>
        <div {...animatedItem[2]} className="days-grid">
          {calendarDays}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
