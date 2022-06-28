import {Model} from '@nozbe/watermelondb';
import {immutableRelation, text} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';
import Post from './Post';

export default class Comment extends Model {
  static table = 'comments';

  static associations: Associations = {
    posts: {type: 'belongs_to', key: 'post_id'},
  };

  @text('body') body!: string;

  @immutableRelation('posts', 'post_id') post!: Post;
}
