import React, { memo, useEffect, useState } from 'react';
import { CommonPageProps } from './types';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { ContactDto } from 'src/types/dto/ContactDto';
import { useAppSelector } from 'src/hooks/useAppSelector';

export const FavoritListPage = memo<CommonPageProps>(() => {
  const contactsList = useAppSelector((state) => state.contacts);
  return (
    <Row
      xxl={4}
      className="g-4"
    >
      {contactsList.map((contact) => (
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
