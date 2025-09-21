import React, { memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { useAppSelector } from 'src/hooks/useAppSelector';

export const FavoritListPage = memo(() => {
  const contactsList = useAppSelector((state) => state.contacts?.contacts);

  const favoriteContacts =
    contactsList && contactsList.filter((contact) => contact.isFavorite);
  return (
    <Row
      xxl={4}
      className="g-4"
    >
      {favoriteContacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard
            contactId={contact.id}
            withLink
          />
        </Col>
      ))}
    </Row>
  );
});
