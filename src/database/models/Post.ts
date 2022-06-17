import {Model} from '@nozbe/watermelondb';
import {field, text} from '@nozbe/watermelondb/decorators';

export default class Post extends Model {
  static table = 'posts';

  @text('title') title!: string;
  @text('content') content!: string;
  @text('author') author!: string;
  @field('time_to_read') timeToRead!: number;
  @text('image_path') imagePath: string | undefined;
}

export type IPost = {
  title: string;
  content: string;
  author: string;
  timeToRead: number;
  imagePath: string | undefined;
};
