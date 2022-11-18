export const outerwear = [
  {
    item: "Puffer Jacket",
    id: 0,
    brand: "North Face",
    image:
      "https://www.pngfind.com/pngs/m/93-938485_the-north-face-1996-rto-nuptse-jacket-tumbleweed.png",
  },
  {
    item: "Trench Coat",
    id: 1,
    brand: "Burberry",
    image:
      "https://w7.pngwing.com/pngs/794/903/png-transparent-trench-coat-burberry-hq-windbreaker-jacket-ms-windbreaker-jacket-fashion-life-jacket-christopher-bailey.png",
  },
  {
    item: "Puffer Jacket",
    id: 2,
    brand: "North Face",
    image:
      "https://www.pngfind.com/pngs/m/93-938485_the-north-face-1996-rto-nuptse-jacket-tumbleweed.png",
  },
  {
    item: "Trench Coat",
    id: 3,
    brand: "Burberry",
    image:
      "https://w7.pngwing.com/pngs/794/903/png-transparent-trench-coat-burberry-hq-windbreaker-jacket-ms-windbreaker-jacket-fashion-life-jacket-christopher-bailey.png",
  },
  {
    item: "Puffer Jacket",
    id: 4,
    brand: "North Face",
    image:
      "https://www.pngfind.com/pngs/m/93-938485_the-north-face-1996-rto-nuptse-jacket-tumbleweed.png",
  },
  {
    item: "Trench Coat",
    id: 5,
    brand: "Burberry",
    image:
      "https://w7.pngwing.com/pngs/794/903/png-transparent-trench-coat-burberry-hq-windbreaker-jacket-ms-windbreaker-jacket-fashion-life-jacket-christopher-bailey.png",
  },
];

export const tops = [
  {
    item: "T-Shirt",
    id: 0,
    brand: "Balmain",
    image:
      "https://cdn-images.farfetch-contents.com/16/30/83/23/16308323_32892157_600.jpg",
  },
  {
    item: "Sweater",
    id: 1,
    brand: "Reformation",
    image:
      "https://i.pinimg.com/originals/77/8b/22/778b2290f8912888a9b74ceeb2abd760.png",
  },
  {
    item: "T-Shirt",
    id: 2,
    brand: "Balmain",
    image:
      "https://cdn-images.farfetch-contents.com/16/30/83/23/16308323_32892157_600.jpg",
  },
  {
    item: "Sweater",
    id: 3,
    brand: "Reformation",
    image:
      "https://i.pinimg.com/originals/77/8b/22/778b2290f8912888a9b74ceeb2abd760.png",
  },
  {
    item: "T-Shirt",
    id: 4,
    brand: "Balmain",
    image:
      "https://cdn-images.farfetch-contents.com/16/30/83/23/16308323_32892157_600.jpg",
  },
  {
    item: "Sweater",
    id: 5,
    brand: "Reformation",
    image:
      "https://i.pinimg.com/originals/77/8b/22/778b2290f8912888a9b74ceeb2abd760.png",
  },
];

export const accessories = [
  {
    item: "Green Shoes",
    id: 0,
    brand: "Converse",
    image:
      "https://www.freepnglogos.com/uploads/shoes-png/shoes-shoe-png-transparent-shoe-images-pluspng-37.png",
  },
  {
    item: "Green Shoes",
    id: 1,
    brand: "Converse",
    image:
      "https://www.freepnglogos.com/uploads/shoes-png/shoes-shoe-png-transparent-shoe-images-pluspng-37.png",
  },
  {
    item: "Green Shoes",
    id: 2,
    brand: "Converse",
    image:
      "https://www.freepnglogos.com/uploads/shoes-png/shoes-shoe-png-transparent-shoe-images-pluspng-37.png",
  },
  {
    item: "Green Shoes",
    id: 3,
    brand: "Converse",
    image:
      "https://www.freepnglogos.com/uploads/shoes-png/shoes-shoe-png-transparent-shoe-images-pluspng-37.png",
  },
];

export const clothingCategories = [
  { category: "Outerwear", itemList: outerwear, id: 1, name: "Outerwear" },
  { category: "Tops", itemList: tops, id: 2, "name": "Tops" },
  { category: "Accessories", itemList: accessories, id: 3, name: "Accessories" },
];

export const outfits = outerwear.map((x, idx) => {
  return {
    name: "Outfit " + idx,
    image: tops[idx].image,
    outerwear: x,
    tops: tops[idx],
    accessories: accessories[idx],
  };
});

export const outfitCategoryNames = ["Casual", "Party", "Business", "Cocktail"];

export const outfitsCategoryList = outfitCategoryNames.map((x) => {
  return {
    category: x,
    list: outfits,
  };
});
