function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

function getRandomMessage() {
  return messages[getRandomInt(0, messages.length - 1)];
}

const names = ['Артём', 'Мария', 'Иван', 'Ольга', 'Дмитрий', 'Анна', 'Сергей', 'Елена', 'Алексей', 'Татьяна'];

function getRandomName() {
  return names[getRandomInt(0, names.length - 1)];
}

export {getRandomInt, getRandomMessage, getRandomName};
