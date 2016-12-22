module.exports = (db) => {
  db.User.destroy({ where: {}, force: true })
  .then(() => {
    return db.Category.destroy({ where: {}, force: true });
  })
  .then(() => {
    return db.Domain.destroy({ where: {}, force: true });
  })
  .then(() => {
    return db.UserDomain.destroy({ where: {}, force: true });
  })
  .then(() => {
    console.log('Database Dropped');
  });
};
