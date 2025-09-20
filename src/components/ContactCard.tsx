import React, { memo } from 'react';
import { ContactDto } from 'src/types/dto/ContactDto';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { addToFavoritesAction } from 'src/store/actions';

interface ContactCardProps {
  contactId: string;
  withLink?: boolean;
}

export const ContactCard = memo<ContactCardProps>(({ contactId, withLink }) => {
  const dispatch = useAppDispatch();
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
            <Button
              variant={contact.isFavorite ? 'success' : 'outline-primary'}
              onClick={() => {
                dispatch(addToFavoritesAction(contactId));
              }}
            >
              {contact.isFavorite ? 'In favorites' : 'Add to favorite'}
            </Button>
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
