import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from './schema';
import migrations from './migrations';

import Post from './models/Post';
import Comment from './models/Comment';

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  dbName: '@sount_prod',
});

const database = new Database({
  adapter,
  modelClasses: [Post, Comment],
});

export {database};
