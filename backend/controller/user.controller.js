const User = require('./models/user.model');

const newUser = new User({
  UserName: 'user1',
  password: '123456',
});

newUser.save()
  .then(user => console.log('User saved:', user))
  .catch(err => console.error('Error:', err));
