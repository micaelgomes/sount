import {faker} from '@faker-js/faker';
import {Collection} from '@nozbe/watermelondb';
import {database} from '../database';
import Post, {IPost} from '../database/models/Post';

export const generatePosts = async (
  qtdPosts: number,
  respository: Collection<Post>,
) => {
  const batchToSave: IPost[] = [];

  for (let i = 0; i < qtdPosts; i++) {
    batchToSave.push({
      title: `${faker.word.verb()} ${faker.word.adjective()}`,
      content: faker.lorem.lines(5),
      author: faker.name.findName(),
      timeToRead: getRandomNumber(5, 32),
      imagePath:
        getRandomNumber(0, 100) % 5 === 0
          ? 'https://picsum.photos/200'
          : undefined,
    });
  }

  const createManyPosts = async () => {
    const tmpPosts = batchToSave.map(newPost =>
      respository.prepareCreate((post: IPost) => {
        post.title = newPost.title;
        post.content = newPost.content;
        post.author = newPost.author;
        post.timeToRead = newPost.timeToRead;
        post.imagePath = newPost.imagePath;
      }),
    );

    await database.batch(...tmpPosts);
  };

  await database.write(createManyPosts);
};

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};
