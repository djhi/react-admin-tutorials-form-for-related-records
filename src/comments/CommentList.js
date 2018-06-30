import React from 'react';
import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  Responsive,
  ShowButton,
  SimpleList,
  TextField
} from 'react-admin';

const CommentList = props => (
  <List {...props}>
    <Responsive
      small={
        <SimpleList
          linkType="show"
          primaryText={record => record.body}
          tertiaryText={record =>
            new Date(record.created_at).toLocaleDateString()
          }
        />
      }
      medium={
        <Datagrid>
          <TextField source="id" />
          <DateField source="created_at" />
          <TextField source="title" />
          <ReferenceField
            resource="comments"
            source="post_id"
            reference="posts"
          >
            <TextField source="title" />
          </ReferenceField>
          <ShowButton />
        </Datagrid>
      }
    />
  </List>
);

export default CommentList;
