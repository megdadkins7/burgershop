module.exports = () => ({
  burgers: [
    {
      id: 1,
      name: '"Sweet Chili O\' Mine" Burger',
      createdByUser: 1,
    },
    {
      id: 2,
      name: '"Blondes Have More Fun-gus" Burger (Comes with Mushrooms)',
      createdByUser: 1,
    },
    {
      id: 3,
      name: '"Kales From the Crypt" Burger',
      createdByUser: 1,
    },
    {
      id: 4,
      name: '"Parma Parma Parma Chameleon" Burger (With Parmesan crisp)',
      createdByUser: 1,
    },
    {
      id: 5,
      name: '"Sweet Home Avocado" Burger',
      createdByUser: 1,
    },
    {
      id: 6,
      name: '"Kale Mary" Burger (Served with Kale)',
      createdByUser: 1,
    },
    {
      id: 7,
      name: '"As Gouda As It Gets" Burger',
      createdByUser: 1,
    },
    {
      id: 8,
      name:
        '"So Many Fennel, So Little Thyme" Burger (Comes with lots of Fennel, no Thyme)',
      createdByUser: 1,
    },
    {
      id: 9,
      name: '"Grandpa Muenster" Burger (10% Senior Discount)',
      createdByUser: 1,
    },
    {
      id: 10,
      name: '"She\'s A Super Leek" Burger',
      createdByUser: 1,
    },
    {
      id: 11,
      name: '"Hit Me With Your Best Shallot" Burger',
      createdByUser: 1,
    },
    {
      id: 12,
      name:
        '"Say It Ain\'t Cilantro" Burger (Doesn\'t come with cilantro...because cilantro is terrible)',
      createdByUser: 1,
    },
    {
      id: 13,
      name: '"I Am Mad About Saffron" Burger (Made with no saffron)',
      createdByUser: 1,
    },
    {
      id: 14,
      name: '"Is This Your Chard?" Burger',
      createdByUser: 1,
    },
    {
      id: 15,
      name: '"Bet It All on Black Garlic" Burger',
      createdByUser: 1,
    },
    {
      id: 16,
      name: '"Foot Feta-ish" Burger',
      createdByUser: 5,
    },
  ],
  schedule: [
    {
      id: 1,
      userId: 1,
      workDays: [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
      ],
    },
    {
      id: 2,
      userId: 2,
      workDays: [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
      ],
    },
    {
      id: 3,
      userId: 3,
      workDays: ['sunday', 'tuesday', 'thursday', 'friday', 'saturday'],
    },
    {
      id: 4,
      userId: 4,
      workDays: ['sunday', 'tuesday', 'thursday', 'friday', 'saturday'],
    },
    {
      id: 5,
      userId: 5,
      workDays: ['sunday', 'tuesday', 'thursday', 'friday', 'saturday'],
    },
  ],
  users: [
    {
      id: 1,
      name: 'Bob Belcher',
      username: 'bob',
      password: 'burger',
      admin: true,
      burgerAdmin: true,
    },
    {
      id: 2,
      name: 'Linda Belcher',
      username: 'linda',
      password: 'burger',
      admin: true,
      burgerAdmin: false,
    },
    {
      id: 3,
      name: 'Tina Belcher',
      username: 'tina',
      password: 'burger',
      admin: false,
      burgerAdmin: false,
    },
    {
      id: 4,
      name: 'Gene Belcher',
      username: 'bob',
      password: 'burger',
      admin: false,
      burgerAdmin: false,
    },
    {
      id: 5,
      name: 'Louise Belcher',
      username: 'louise',
      password: 'burger',
      admin: false,
      burgerAdmin: true,
    },
  ],
  botd: [
    {
      id: 1,
      burgerId: 1,
      day: 'sunday',
    },
    {
      id: 2,
      burgerId: 2,
      day: 'monday',
    },
    {
      id: 3,
      burgerId: 3,
      day: 'tuesday',
    },
    {
      id: 4,
      burgerId: 4,
      day: 'wednesday',
    },
    {
      id: 5,
      burgerId: 5,
      day: 'thursday',
    },
    {
      id: 6,
      burgerId: 6,
      day: 'friday',
    },
    {
      id: 7,
      burgerId: 7,
      day: 'saturday',
    },
  ],
});
