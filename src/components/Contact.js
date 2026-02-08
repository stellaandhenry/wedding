import React from 'react';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';

function Contact() {
    const animatedItem = [
        useScrollFadeIn('up', 1, 0)
    ];
  const contacts = {
    groom: {
      name: "이정현",
      phone: "010-0000-0000",
    },
    bride: {
      name: "장아라",
      phone: "010-4170-0762",
    },
    groomParents: {
      father: {
        name: "이재천",
        phone: "010-0000-0000",
      },
      mother: {
        name: "조명순",
        phone: "010-0000-0000",
      },
    },
    brideParents: {
      father: {
        name: "장창문",
        phone: "010-0000-0000",
      }
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
                <hr />
                <span className="text-center mb-3" style={{fontSize: '1rem'}}>신랑 측 혼주</span>
                <div className='parentBox'>
                    <ContactItem relationship="아버지" name={contacts.groomParents.father.name} phone={contacts.groomParents.father.phone} color="#5F8B9B" />
                    <ContactItem relationship="어머니" name={contacts.groomParents.mother.name} phone={contacts.groomParents.mother.phone} color="#5F8B9B" />
                
                </div>
            </div>
            <div className="col-6 minw150">
                 <ContactItem relationship="신부" phone={contacts.bride.phone} color="#BB7273" showName={false} />
                 <hr />
                <span className="text-center mb-3" style={{fontSize: '1rem'}}>신부 측 혼주</span>
                <div className='parentBox'>
                  <ContactItem relationship="아버지" name={contacts.brideParents.father.name} phone={contacts.brideParents.father.phone} color="#BB7273" />
                    
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contact;
