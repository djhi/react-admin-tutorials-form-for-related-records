import React from 'react';
import {
  Datagrid,
  DateField,
  EditButton,
  ReferenceManyField,
  RichTextField,
  Show,
  Tab,
  TabbedShowLayout,
  TextField
} from 'react-admin';
import AddCommentButton from './AddCommentButton';

const PostShow = props => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Summary">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="teaser" />
      </Tab>
      <Tab label="Body">
        <RichTextField
          source="body"
          stripTags={false}
          label=""
          addLabel={false}
        />
      </Tab>
      <Tab label="Comments">
        <ReferenceManyField
          addLabel={false}
          reference="comments"
          target="post_id"
          sort={{ field: 'created_at', order: 'DESC' }}
        >
          <Datagrid>
            <DateField source="created_at" />
            <TextField source="body" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
        <AddCommentButton />
      </Tab>
    </TabbedShowLayout>
  </Show>
);

export default PostShow;
