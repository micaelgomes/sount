import {Model} from '@nozbe/watermelondb';
import {field, text, writer} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';
// import {database} from '..';
import Comment from './Comment';

export default class Post extends Model {
  static table = 'posts';

  static associations: Associations = {
    comments: {type: 'has_many', foreignKey: 'post_id'},
  };

  @text('title') title!: string;
  @text('content') content!: string;
  @text('author') author!: string;
  @field('time_to_read') timeToRead!: number;
  @text('image_path') imagePath: string | undefined;
  @field('liked') liked!: boolean;

  @writer async setLiked() {
    await this.update(post => {
      post.liked = !post.liked;
    });
  }
  @writer async addComment(body: string) {
    await this.collections.get<Comment>('comments').create(comment => {
      comment.post = this;
      comment.body = body;
    });
  }
}

export type IPost = {
  title: string;
  content: string;
  author: string;
  timeToRead: number;
  imagePath: string | undefined;
  liked: boolean;
};
