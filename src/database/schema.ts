import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'posts',
      columns: [
        {name: 'title', type: 'string'},
        {name: 'content', type: 'string'},
        {name: 'author', type: 'string'},
        {name: 'time_to_read', type: 'number'},
        {name: 'image_path', type: 'string', isOptional: true},
        {name: 'liked', type: 'boolean'},
      ],
    }),
    tableSchema({
      name: 'comments',
      columns: [
        {name: 'body', type: 'string'},
        {name: 'post_id', type: 'string', isIndexed: true},
      ],
    }),
  ],
});
