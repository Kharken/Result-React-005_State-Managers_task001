import React, { memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { useAppSelector } from 'src/hooks/useAppSelector';

export const GroupListPage = memo(() => {
  const groupsList = useAppSelector((state) => state.groups);
  return (
    <Row xxl={4}>
      {groupsList.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard
            groupContacts={groupContacts}
            withLink
          />
        </Col>
      ))}
    </Row>
  );
});
