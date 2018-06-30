import React from 'react';
import {
  Create,
  DateInput,
  LongTextInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  required
} from 'react-admin';
import { parse } from 'query-string';

const today = new Date();

const CommentCreate = props => {
  const { post_id: post_id_string } = parse(props.location.search);
  const post_id = post_id_string ? parseInt(post_id_string, 10) : '';

  const redirect = post_id ? `/posts/${post_id}/show` : false;

  return (
    <Create {...props}>
      <SimpleForm
        defaultValue={{ created_at: today, post_id }}
        redirect={redirect}
      >
        <ReferenceInput
          source="post_id"
          reference="posts"
          allowEmpty
          validate={required()}
        >
          <SelectInput optionText="title" />
        </ReferenceInput>
        <DateInput source="created_at" />
        <LongTextInput source="body" />
      </SimpleForm>
    </Create>
  );
};

export default CommentCreate;
