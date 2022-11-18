export let database = {
    pants: [
        {
            name: "Mom Jeans",
            brand: "Levi",
            price: '$89.99',
            icon: "https://images.pexels.com/photos/6402846/pexels-photo-6402846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "High quality Levi original branded jeans. Made of sustainable materials and long lasting.",
            quantity: 0,
        },
        {
            name: "Wide Jeans",
            brand: "Stradvis",
            price: '$67.99',
            icon: 'https://images.pexels.com/photos/65676/nanjing-studio-jeans-65676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: "High quality Stradvis original branded jeans. Made of sustainable materials and long lasting.",
            quantity: 0,
        },
        {
            name: "Cuffed Jeans",
            brand: "Pact",
            price: '$89.99',
            icon: "https://images.pexels.com/photos/6402846/pexels-photo-6402846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "High quality Levi original branded jeans. Made of sustainable materials and long lasting.",
            quantity: 0,
        },
        {
            name: "Nrom Jeans",
            brand: "Kotn",
            price: '$67.99',
            icon: 'https://images.pexels.com/photos/65676/nanjing-studio-jeans-65676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: "High quality Stradvis original branded jeans. Made of sustainable materials and long lasting.",
            quantity: 0,
        },
    ],
    jackets: [
        {
            name: "Puffer Jacket",
            brand: "North Face",
            price: '$76.99',
            icon:
              "https://www.pngfind.com/pngs/m/93-938485_the-north-face-1996-rto-nuptse-jacket-tumbleweed.png",
            quantity: 0,
          },
          {
            name: "Trench Coat",
            brand: "Burberry",
            price: '$76.99',
            quantity: 0,
            icon:
              "https://w7.pngwing.com/pngs/794/903/png-transparent-trench-coat-burberry-hq-windbreaker-jacket-ms-windbreaker-jacket-fashion-life-jacket-christopher-bailey.png",
          },
          {
            name: "Puffers Jacket",
            brand: "North Face",
            price: '$76.99',
            quantity: 0,
            icon:
              "https://www.pngfind.com/pngs/m/93-938485_the-north-face-1996-rto-nuptse-jacket-tumbleweed.png",
            quantity: 0,
          },
          {
            name: "Cool Coat",
            brand: "Burberry",
            price: '$76.99',
            quantity: 0,
            icon:
              "https://w7.pngwing.com/pngs/794/903/png-transparent-trench-coat-burberry-hq-windbreaker-jacket-ms-windbreaker-jacket-fashion-life-jacket-christopher-bailey.png",
            quantity: 0,
          },
          {
            name: "Poof Jacket",
            brand: "North Face",
            price: '$76.99',
            icon:
              "https://www.pngfind.com/pngs/m/93-938485_the-north-face-1996-rto-nuptse-jacket-tumbleweed.png",
            quantity: 0,
          },
          {
            name: "Trek Coat",
            brand: "Burberry",
            price: '$76.99',
            icon:
              "https://w7.pngwing.com/pngs/794/903/png-transparent-trench-coat-burberry-hq-windbreaker-jacket-ms-windbreaker-jacket-fashion-life-jacket-christopher-bailey.png",
            quantity: 0,
          },
    ]
};

export const getDb = () => {
    return database;
}

export const setDb = (db) => {
    database: db;
}
