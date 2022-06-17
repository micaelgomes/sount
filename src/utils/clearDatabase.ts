import {database} from '../database';

export const unsafeClearDatabase = async () => {
  const eraseDatabase = async () => {
    await database.unsafeResetDatabase();
  };

  await database.write(eraseDatabase);
};
