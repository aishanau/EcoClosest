global.clothes = {
  Outerwear: [
  {
    id: 1,
    item: "Puffer Jacket",
    id: 0,
    brand: "North Face",
    image:
      "https://www.pngfind.com/pngs/m/93-938485_the-north-face-1996-rto-nuptse-jacket-tumbleweed.png",
    category: 'Outerwear'
  },
  {
    id: 2,
    item: "Trench Coat",
    id: 1,
    brand: "Burberry",
    image:
      "https://w7.pngwing.com/pngs/794/903/png-transparent-trench-coat-burberry-hq-windbreaker-jacket-ms-windbreaker-jacket-fashion-life-jacket-christopher-bailey.png",
      category: 'Outerwear'
    },
  {
    id: 3,
    item: "Puffer Jacket",
    id: 2,
    brand: "North Face",
    image:
      "https://www.pngfind.com/pngs/m/93-938485_the-north-face-1996-rto-nuptse-jacket-tumbleweed.png",
      category: 'Outerwear'
  },
  {
    id: 4,
    item: "Trench Coat",
    id: 3,
    brand: "Burberry",
    image:
      "https://w7.pngwing.com/pngs/794/903/png-transparent-trench-coat-burberry-hq-windbreaker-jacket-ms-windbreaker-jacket-fashion-life-jacket-christopher-bailey.png",
      category: 'Outerwear'
    },
  {
    id: 5,
    item: "Puffer Jacket",
    id: 4,
    brand: "North Face",
    image:
      "https://www.pngfind.com/pngs/m/93-938485_the-north-face-1996-rto-nuptse-jacket-tumbleweed.png",
      category: 'Outerwear'
  },
  {
    id: 6,
    item: "Trench Coat",
    id: 5,
    brand: "Burberry",
    image:
      "https://w7.pngwing.com/pngs/794/903/png-transparent-trench-coat-burberry-hq-windbreaker-jacket-ms-windbreaker-jacket-fashion-life-jacket-christopher-bailey.png",
      category: 'Outerwear'
    },
],
Tops: [
  {
    id: 1,
    item: "T-Shirt",
    id: 0,
    brand: "Balmain",
    image:
      "https://cdn-images.farfetch-contents.com/16/30/83/23/16308323_32892157_600.jpg",
      category: 'Tops'
  },
  {
    id: 2,
    item: "Sweater",
    id: 1,
    brand: "Reformation",
    image:
      "https://i.pinimg.com/originals/77/8b/22/778b2290f8912888a9b74ceeb2abd760.png",
      category: 'Tops'
  },
  {
    id: 3,
    item: "T-Shirt",
    id: 2,
    brand: "Balmain",
    image:
      "https://cdn-images.farfetch-contents.com/16/30/83/23/16308323_32892157_600.jpg",
      category: 'Tops'
  },
  {
    id: 4,
    item: "Sweater",
    id: 3,
    brand: "Reformation",
    image:
      "https://i.pinimg.com/originals/77/8b/22/778b2290f8912888a9b74ceeb2abd760.png",
      category: 'Tops'
  },
  {
    id: 5,
    item: "T-Shirt",
    id: 4,
    brand: "Balmain",
    image:
      "https://cdn-images.farfetch-contents.com/16/30/83/23/16308323_32892157_600.jpg",
      category: 'Tops'
  },
  {
    id: 6,
    item: "Sweater",
    id: 5,
    brand: "Reformation",
    image:
      "https://i.pinimg.com/originals/77/8b/22/778b2290f8912888a9b74ceeb2abd760.png",
      category: 'Tops'
  },
],
Accessories: [
  {
    id: 1,
    item: "Green Shoes",
    brand: "Converse",
    image:
      "https://www.freepnglogos.com/uploads/shoes-png/shoes-shoe-png-transparent-shoe-images-pluspng-37.png",
      category: 'Accessories'
  },
  {
    id: 2,
    item: "Green Shoes",
    brand: "Converse",
    image:
      "https://www.freepnglogos.com/uploads/shoes-png/shoes-shoe-png-transparent-shoe-images-pluspng-37.png",
      category: 'Accessories'
  },
  {
    id: 3,
    item: "Green Shoes",
    brand: "Converse",
    image:
      "https://www.freepnglogos.com/uploads/shoes-png/shoes-shoe-png-transparent-shoe-images-pluspng-37.png",
      category: 'Accessories'
  },
  {
    id: 4,
    item: "Green Shoes",
    brand: "Converse",
    image:
      "https://www.freepnglogos.com/uploads/shoes-png/shoes-shoe-png-transparent-shoe-images-pluspng-37.png",
      category: 'Accessories'
  },
]}

export const clothingCategories = [
  { category: "Outerwear", itemList: clothes['Outerwear'], id: 1, name: "Outerwear" },
  { category: "Tops", itemList: clothes['Tops'], id: 2, "name": "Tops" },
  { category: "Accessories", itemList: clothes['Accessories'], id: 3, name: "Accessories" },
];

export const outfits = clothes['Outerwear'].map((x, idx) => {
  return {
    name: "Outfit " + idx,
    image: clothes['Tops'][idx].image,
    outerwear: x,
    tops: clothes['Tops'][idx],
    accessories: clothes['Accessories'][idx],
  };
});

export const outfitCategoryNames = ["Casual", "Party", "Business", "Cocktail"];

export const outfitsCategoryList = outfitCategoryNames.map((x) => {
  return {
    category: x,
    list: outfits,
  };
});
