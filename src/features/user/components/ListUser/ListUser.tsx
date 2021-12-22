import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row } from 'antd';
import { useAppDispatch } from 'src/app/hooks';
import Loading from 'src/common/components/Loading';
import ListUserItem from './Item';
import { fetchUsers, selectIsFetchingUser, selectUsers } from '../../slice';

function ListUser() {
  const dispatch = useAppDispatch();
  const users = useSelector(selectUsers);
  const isFetching = useSelector(selectIsFetchingUser);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Row
      gutter={[
        { xs: 0, sm: 16, lg: 24 },
        { xs: 16, sm: 16, lg: 24 },
      ]}
    >
      {isFetching ? (
        <Loading />
      ) : (
        users.map(user => (
          <ListUserItem
            key={user.id}
            name={user.name}
            email={user.email}
            username={user.username}
            phone={user.phone}
            website={user.website}
          />
        ))
      )}
    </Row>
  );
}

export default ListUser;
