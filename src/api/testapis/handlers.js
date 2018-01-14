export let hello = (request, h) => {
  let user = 'world'
  if (request.query.user) user = request.query.user;
  user = `${user.substr(0,1).toUpperCase()}${user.substr(1)}`
  return `Hello, ${user}`;
};
