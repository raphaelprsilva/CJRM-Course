/*---------------------------------------------------
  forEach e Callbacks
---------------------------------------------------*/
const socialNeworks = ['youtube', 'facebook', 'twitter'];

const logArrayInfo = (socialNework, index, array) => {
  console.log(index, socialNework, array);
};

socialNeworks.forEach(logArrayInfo);
