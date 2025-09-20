import React, { memo } from 'react';
import { ContactDto } from 'src/types/dto/ContactDto';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/useAppSelector';

interface ContactCardProps {
  contactId: string;
  withLink?: boolean;
}

export const ContactCard = memo<ContactCardProps>(({ contactId, withLink }) => {
  const contact: ContactDto | undefined = useAppSelector((state) =>
    state.contacts.find((contact) => contact.id === contactId),
  );
  if (!contact) {
    return null;
  }

  const { photo, id, name, phone, birthday, address } = contact;
  return (
    <Card key={id}>
      <Card.Img
        variant="top"
        src={photo}
      />
      <Card.Body>
        <Card.Title>
          {withLink ? <Link to={`/contact/${id}`}>{name}</Link> : name}
        </Card.Title>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>
              <Link
                to={`tel:${phone}`}
                target="_blank"
              >
                {phone}
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>{birthday}</ListGroup.Item>
            <ListGroup.Item>{address}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card.Body>
    </Card>
  );
});
