import React from 'react';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';

function Contact() {
    const animatedItem = [
        useScrollFadeIn('up', 1, 0)
    ];
  const contacts = {
    groom: {
      name: "이정현",
      phone: "010-6543-1513",
    },
    bride: {
      name: "장아라",
      phone: "010-4170-0762",
    },
  };

  const ContactItem = ({ name, relationship, phone, color, showName = true }) => (
    <div className="text-center mb-3">
      {showName && (
        <p className="displayFlex">
          <span className="me-1" style={{fontSize: '0.6rem'}}>{relationship}</span>
          <span style={{fontSize: '1rem', fontWeight: 'bold'}}>{name}</span>
        </p>
      )}
      {!showName && (
        <p className="mb-1">
          <span style={{fontSize: '1.2rem', fontWeight: 'bold'}}>{relationship}</span>
        </p>
      )}
      <div className='iconFlex'>
        <a href={`tel:${phone}`} className="btn btn-outline-secondary border-0 no-hover-bg">
          <i className="bi bi-telephone-fill" style={{ color }}></i>
        </a>
        <a href={`sms:${phone}`} className="btn btn-outline-secondary border-0 ms-2 no-hover-bg">
          <i className="bi bi-chat-dots-fill" style={{ color }}></i>
        </a>
      </div>
    </div>
  );

  return (
    <div className="content contact" style={{ backgroundColor: '#f9f9fb', padding: '2rem 0' }}>
        <div {...animatedItem[0]} className="row">
            <div  className="col-6">
                <ContactItem relationship="신랑" phone={contacts.groom.phone} color="#5F8B9B" showName={false} />
            </div>
            <div className="col-6">
                 <ContactItem relationship="신부" phone={contacts.bride.phone} color="#BB7273" showName={false} />
            </div>
        </div>
    </div>
  );
}

export default Contact;
