import React, { memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { FilterForm } from 'src/components/FilterForm';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { useFindContacts } from 'src/hooks/useFindContacts';

export const ContactListPage = memo(() => {
  const contactsList = useAppSelector((state) => state.contacts);
  const groupsList = useAppSelector((state) => state.groups);
  const { onSubmit, contacts } = useFindContacts(contactsList, groupsList);
  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm
          groupContactsList={groupsList}
          initialValues={{}}
          onSubmit={onSubmit}
        />
      </Col>
      <Col>
        <Row
          xxl={4}
          className="g-4"
        >
          {contacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard
                contactId={contact.id}
                withLink
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
});
