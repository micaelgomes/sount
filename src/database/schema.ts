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
      ],
    }),
  ],
});
