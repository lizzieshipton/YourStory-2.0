module.exports = (db) => {
  db.User.bulkCreate([
      { username: 'Natasha', chromeID: '12345' },
      { username: 'Melba', chromeID: '67890' },
  ])
  .then(() => {
    return db.Category.bulkCreate([
      { category: 'Search' },
      { category: 'Review' },
      { category: 'Socials' },
      { category: 'News' },
    ])
    .then(() => {
      console.log('Categories seeded')
    })
    .catch((err) => {
      console.log('Error seeding categories', err);
    });
  })
  .then(() => {
    return db.Domain.bulkCreate([
      { domain: 'google.com', userId: 1, categoryId: 1 },
      { domain: 'yelp.com', userId: 1, categoryId: 2 },
      { domain: 'facebook.com', userId: 1, categoryId: 3 },
      { domain: 'wsj.com', userId: 1, categoryId: 4 },
    ])
    .then(() => {
      console.log('Domains seeded')
    })
    .catch((err) => {
      console.log('Error seeding domains', err);
    });
  })
  .then(() => {
    return db.UserDomain.bulkCreate([
      { domainId: 1, count: 140, userId: 1, date_added: '12-17-2016' },
      { domainId: 2, count: 14, userId: 1, date_added: '12-17-2016' },
      { domainId: 3, count: 24, userId: 1, date_added: '12-17-2016' },
      { domainId: 4, count: 150, userId: 1, date_added: '12-17-2016' },
      { domainId: 1, count: 140, userId: 1, date_added: '12-18-2016' },
      { domainId: 2, count: 14, userId: 1, date_added: '12-18-2016' },
      { domainId: 3, count: 24, userId: 1, date_added: '12-18-2016' },
      { domainId: 4, count: 150, userId: 1, date_added: '12-18-2016' },
      { domainId: 1, count: 140, userId: 1, date_added: '12-19-2016' },
      { domainId: 2, count: 14, userId: 1, date_added: '12-19-2016' },
      { domainId: 3, count: 24, userId: 1, date_added: '12-19-2016' },
      { domainId: 4, count: 150, userId: 1, date_added: '12-19-2016' },
    ])
    .then(() => {
      console.log('UserDomains seeded')
    })
    .catch((err) => {
      console.log('Error seeding user_domains', err);
    });
  })
  .then(() => {
    console.log('Database Seeded');
  });
};
