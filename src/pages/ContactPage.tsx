import React, { FC } from 'react';
import { CommonPageProps } from './types';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ContactCard } from 'src/components/ContactCard';
import { Empty } from 'src/components/Empty';

export const ContactPage: FC<CommonPageProps> = () => {
  const { contactId } = useParams<{ contactId: string }>();

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contactId ? <ContactCard contactId={contactId} /> : <Empty />}
      </Col>
    </Row>
  );
};
