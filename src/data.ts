export interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  image?: string
  badge?: string
}

export interface MenuCategory {
  id: string
  name: string
  tagline: string
  items: MenuItem[]
}

export const menu: MenuCategory[] = [
  {
    id: 'beef-burgers',
    name: 'Beef Burgers',
    tagline: 'Made with Premium Australian Beef',
    items: [
      {
        id: 20,
        name: 'Classic Smashed',
        description: 'Prime beef, lettuce, pickle, mayo, cheese slice, caramelized onion',
        price: 649,
        image: 'https://images.pexels.com/photos/28828554/pexels-photo-28828554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        badge: 'Signature',
      },
      {
        id: 21,
        name: 'Smoked Sultan',
        description: 'Prime beef, lettuce, tomato, jalapeno, BBQ flavor, cheese slice, caramelized onion',
        price: 649,
        image: 'https://images.pexels.com/photos/19119497/pexels-photo-19119497.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        badge: 'Smoky',
      },
      {
        id: 22,
        name: 'Ottoman Signature',
        description: 'Lettuce, tomato, unique BBQ & mayo combination, cheese, crisp fried onion',
        price: 649,
        image: 'https://images.pexels.com/photos/30500752/pexels-photo-30500752.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        badge: "Chef's Pick",
      },
      {
        id: 23,
        name: 'Cheesy Overload',
        description: 'Lettuce, pickle, cheese, deep-fried cheese, special sauce, caramelized onion',
        price: 699,
        image: 'https://images.pexels.com/photos/36554035/pexels-photo-36554035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        badge: 'Loaded',
      },
      {
        id: 24,
        name: 'OB Trio Mini Burger',
        description: 'A signature platter featuring 1 Chicken Burger & 2 Beef Burgers',
        price: 649,
        image: 'https://images.pexels.com/photos/28272159/pexels-photo-28272159.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        badge: 'Trio',
      },
    ],
  },
  {
    id: 'chicken-burgers',
    name: 'Chicken Burgers',
    tagline: 'Crispy, juicy, and full of flavor',
    items: [
      {
        id: 10,
        name: 'Crunch Sultan',
        description: 'Crumb-fried chicken breast strips, lettuce, jalapeno, fresh onion, cheese, special sauce',
        price: 449,
        image: 'https://images.pexels.com/photos/9904394/pexels-photo-9904394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        id: 11,
        name: 'OB Doner Royal',
        description: 'Authentic doner meat, lettuce, onion, pickle, cheese, twin-flavor sauce',
        price: 499,
        image: 'https://images.pexels.com/photos/14950910/pexels-photo-14950910.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
    ],
  },
  {
    id: 'doner-wraps',
    name: 'Doner Wraps',
    tagline: 'Authentic style wraps served with fries inside',
    items: [
      {
        id: 30,
        name: 'Prime Beef Doner Wrap',
        description: 'Wrapped beef, lettuce, onion, tomato, pickle, special OB sauce — Large',
        price: 549,
        image: 'https://images.pexels.com/photos/27744717/pexels-photo-27744717.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        id: 31,
        name: 'Prime Beef Doner Wrap (Jumbo)',
        description: 'Wrapped beef, lettuce, onion, tomato, pickle, special OB sauce — Jumbo',
        price: 699,
        image: 'https://images.pexels.com/photos/29306504/pexels-photo-29306504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        id: 32,
        name: 'Chicken Doner Wrap',
        description: 'Wrapped chicken, lettuce, onion, pickles, jalapeno, tomato, garlic sauce, fries inside — Large',
        price: 549,
        image: 'https://images.pexels.com/photos/15202777/pexels-photo-15202777.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        id: 33,
        name: 'Chicken Doner Wrap (Jumbo)',
        description: 'Wrapped chicken, lettuce, onion, pickles, jalapeno, tomato, garlic sauce, fries inside — Jumbo',
        price: 649,
        image: 'https://images.pexels.com/photos/34106235/pexels-photo-34106235.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
    ],
  },
  {
    id: 'starters',
    name: 'Starters',
    tagline: 'Perfect to kickstart your meal',
    items: [
      {
        id: 1,
        name: 'Crispy Tender Strips (4 Pcs)',
        description: 'Crumb-fried tender chicken strips served with honey mustard sauce',
        price: 499,
        image: 'https://images.pexels.com/photos/27497770/pexels-photo-27497770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        id: 2,
        name: 'Loaded OB Fries',
        description: 'Fully loaded sauce and choice meat flavor — Chicken or Beef',
        price: 499,
        image: 'https://images.pexels.com/photos/20535803/pexels-photo-20535803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        id: 3,
        name: 'Crunch Stuff Chicken Burst (4 Pcs)',
        description: 'Chicken stuffed in herb and cheese, crumb-fried',
        price: 399,
        image: 'https://images.pexels.com/photos/31097759/pexels-photo-31097759.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
    ],
  },
  {
    id: 'beverages',
    name: 'Beverages',
    tagline: 'Shakes, mocktails, mojitos & more',
    items: [
      { id: 59, name: 'Oreo Shake', description: 'Rich, creamy Oreo blended with milk', price: 379, image: 'https://images.pexels.com/photos/13530493/pexels-photo-13530493.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', badge: 'Popular' },
      { id: 60, name: 'Strawberry Shake', description: 'Fresh strawberry blended shake', price: 329 },
      { id: 61, name: 'Chocolate Shake', description: 'Decadent chocolate shake', price: 329 },
      { id: 62, name: 'Vanilla Shake', description: 'Classic creamy vanilla', price: 329 },
      { id: 63, name: 'Banana Shake', description: 'Fresh banana blended shake', price: 329 },
      { id: 51, name: 'Pina Colada', description: 'Tropical coconut-pineapple mocktail', price: 299 },
      { id: 52, name: 'Blue Lagoon', description: 'Refreshing blue citrus mocktail', price: 299 },
      { id: 53, name: 'Mint Margarita', description: 'Zesty mint mocktail', price: 299 },
      { id: 54, name: 'Strawberry Margarita', description: 'Sweet strawberry mocktail', price: 299 },
      { id: 55, name: 'Lemon Soda', description: 'Fizzy fresh lemon soda', price: 299 },
      { id: 56, name: 'Green Berry Mojito', description: 'Refreshing green berry mojito', price: 349 },
      { id: 57, name: 'Blue Berry Mojito', description: 'Cool blue berry mojito', price: 349 },
      { id: 58, name: 'Russ Berry Mojito', description: 'Signature Russ berry mojito', price: 349 },
      { id: 70, name: 'Mango Smoothie', description: 'Thick mango smoothie', price: 339 },
      { id: 71, name: 'Strawberry Smoothie', description: 'Creamy strawberry smoothie', price: 339 },
      { id: 72, name: 'Peach Smoothie', description: 'Sweet peach smoothie', price: 339 },
      { id: 73, name: 'Blue Berry Smoothie', description: 'Rich blueberry smoothie', price: 339 },
      { id: 74, name: 'Banana Smoothie', description: 'Fresh banana smoothie', price: 339 },
      { id: 80, name: 'Cardamom Tea', description: 'Aromatic cardamom-infused tea', price: 149 },
      { id: 81, name: 'Green Tea', description: 'Classic green tea', price: 149 },
      { id: 82, name: 'Lemon Tea', description: 'Refreshing lemon tea', price: 149 },
      { id: 83, name: 'Ice Tea', description: 'Chilled iced tea', price: 199 },
    ],
  },
  {
    id: 'extras',
    name: 'Extras',
    tagline: 'Customize your perfect bite',
    items: [
      { id: 40, name: 'Beef Patty (Australian)', description: 'Extra premium Australian beef patty', price: 300 },
      { id: 41, name: 'Fries Portion', description: 'Crispy golden fries', price: 300 },
      { id: 42, name: 'Fried Onion', description: 'Crisp fried onions', price: 250 },
      { id: 43, name: 'Cheese Slice', description: 'Extra cheese slice', price: 70 },
      { id: 44, name: 'Sauce Dip', description: 'Choice of signature sauce', price: 50 },
    ],
  },
]

export interface Review {
  name: string
  text: string | null
  textTranslated: string | null
  stars: number
  publishedAtDate: string
  isLocalGuide: boolean
  reviewerNumberOfReviews: number
  reviewerPhotoUrl: string
  responseFromOwnerText: string | null
}

export const reviews: Review[] = [
  { name: 'Honest reviews', text: 'Highly recommended Delicious food with excellent taste and quality at a reasonable price. Definitely worth trying.\n\nThe 1,000 minimum order for delivery is too high. At least within the same town, smaller orders should also be delivered. Not everyone can spend 1,000 every time. Please reconsider this policy.', textTranslated: null, stars: 5, publishedAtDate: '2026-08-03T15:24:42.344Z', isLocalGuide: true, reviewerNumberOfReviews: 29, reviewerPhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocIv72_9A8SyYyVH7NH6wjoVuE_URM2QuCt3Uk4lIEcMgJFCvg=s1920-c-rp-mo-ba12-br100', responseFromOwnerText: 'Thank you keep visiting and referring to friends and family..' },
  { name: 'Summaya Rehman', text: 'Yar ma nay Kafi jaga fast food khaya lkn en ka ottoman signature Jo Burger hai woo kaaaammaaaallllll ka hai', textTranslated: "Friend, I have eaten fast food at many places but their Ottoman signature is Jo Burger woo woof", stars: 5, publishedAtDate: '2026-08-03T07:45:47.010Z', isLocalGuide: false, reviewerNumberOfReviews: 0, reviewerPhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocLtJyYkG9-pBFMaX0sHjoIwI578423li4kOdv6tBgGreklIdw=s1920-c-rp-mo-br100', responseFromOwnerText: null },
  { name: 'Zeeshan Qayyum', text: 'Kia awla wrap tha maza aa gya', textTranslated: 'What a wonderful wrap it was, it was fun', stars: 5, publishedAtDate: '2026-08-01T13:59:32.095Z', isLocalGuide: false, reviewerNumberOfReviews: 1, reviewerPhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocLF-dWQnxn6AxFrBPp0BLoeYSMbLqoTDl5eRUbfnPQSbVv_uA=s1920-c-rp-mo-br100', responseFromOwnerText: 'Thank you keep visiting and referring' },
  { name: 'Afzaal Ali', text: 'Ambitious was good\nFood is delicious', textTranslated: null, stars: 5, publishedAtDate: '2026-07-27T15:53:21.403Z', isLocalGuide: false, reviewerNumberOfReviews: 1, reviewerPhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocKZreUKZV4FHdRbRizlhyGI5PtChw-YqchSO7PUTo9EK_RB9g=s1920-c-rp-mo-br100', responseFromOwnerText: 'Thank you keep visiting and referring' },
  { name: 'Muhammad Kabir Irfan Gujjar', text: 'Beautiful Place And greatest Food I Really Love it and Strongly Recommended for every one', textTranslated: null, stars: 5, publishedAtDate: '2026-07-27T04:13:54.466Z', isLocalGuide: false, reviewerNumberOfReviews: 1, reviewerPhotoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjXTUFr5SAVT9vx5D0kUeMDSVsliw4GSz1ABsGySpDCiKapt8Dg=s1920-c-rp-mo-br100', responseFromOwnerText: 'Thank you keep visiting and referring' },
  { name: 'SALLU MELLO', text: "I ordered the cheesy beef burger and loaded fries and damn it's was good and fresh keep it up guys", textTranslated: null, stars: 5, publishedAtDate: '2026-07-24T20:38:23.653Z', isLocalGuide: true, reviewerNumberOfReviews: 23, reviewerPhotoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjVTilP96bFeyu3pddKeCu2hdIJa8EKfaG45vJtEqrAfmfN4cv_TbA=s1920-c-rp-mo-ba12-br100', responseFromOwnerText: 'Thanks you keep visiting and referring' },
  { name: 'Mirha Doll', text: 'Excellent Food With Great Ambiance strongly recommend for Family Dining. Great Experience', textTranslated: null, stars: 5, publishedAtDate: '2026-07-24T17:13:44.108Z', isLocalGuide: false, reviewerNumberOfReviews: 1, reviewerPhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJ6MkO1GsjoI3A7Uyo6d9nqleZxx3IZtn5JX47kHlG4DPfVZg=s1920-c-rp-mo-br100', responseFromOwnerText: 'Thank you keep visiting and referring' },
  { name: 'Usman Ali', text: 'Great Place & Great Food', textTranslated: null, stars: 5, publishedAtDate: '2026-07-24T16:27:46.677Z', isLocalGuide: false, reviewerNumberOfReviews: 1, reviewerPhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocLAoIBB6yAanTH9dSoWJuLTPEvyELhe9grD4_M6cRnfJBLj=s1920-c-rp-mo-br100', responseFromOwnerText: 'Thank you keep visiting and referring' },
  { name: 'Huzaifa Mukhtar', text: "Fantastic Atmosphere And Too Much Delicious Food I'm it And Strongly recommend For everyone", textTranslated: null, stars: 5, publishedAtDate: '2026-07-24T16:21:04.723Z', isLocalGuide: false, reviewerNumberOfReviews: 1, reviewerPhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocKMHni07a5pNn9lKYmzmyu4V5gziAnTOJ8RwpNlSde33Jwc6w=s1920-c-rp-mo-br100', responseFromOwnerText: 'Thank you keep visiting and referring' },
  { name: 'Yasir Noor', text: "Wonderful place with very delicious food.\nStrongly Recommend for those people's who really want to eat something different", textTranslated: null, stars: 5, publishedAtDate: '2026-07-23T16:03:09.206Z', isLocalGuide: false, reviewerNumberOfReviews: 5, reviewerPhotoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjUWwXsaDbPBjm6v8lQkqVECVq4uiPNUr7-y5YhJ9CRJX4yAt9Q=s1920-c-rp-mo-br100', responseFromOwnerText: 'Thank u' },
  { name: 'Hasnain Najeeb', text: 'Authentic Ottoman flavors, great vibe just keep your wallet ready', textTranslated: null, stars: 5, publishedAtDate: '2026-07-18T16:25:08.154Z', isLocalGuide: false, reviewerNumberOfReviews: 2, reviewerPhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocL4a-nDsscPJCenJZGgYM48B6eduUHgP_XoZpqGnAgpJBj_ag=s1920-c-rp-mo-br100', responseFromOwnerText: 'Thank you keep visiting and referring to friends and family..' },
  { name: 'Amir Malikz', text: 'Delicious food.. taste was good.. i recommend you all', textTranslated: null, stars: 5, publishedAtDate: '2026-07-18T15:08:43.673Z', isLocalGuide: true, reviewerNumberOfReviews: 65, reviewerPhotoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjWjvFqP-e9jFcQv4PFsAY-Yrv2jzci4DOZ4Jz7EnYvybi66qz9j=s1920-c-rp-mo-ba12-br100', responseFromOwnerText: 'Thank you keep visiting and referring to friends and family..' },
  { name: 'Sanaullah Mushtaq', text: 'Unforgettable taste with best sauces and excellent attitude of staff what a mouth watering experiance with most affordable price.', textTranslated: null, stars: 5, publishedAtDate: '2026-07-18T14:46:48.901Z', isLocalGuide: true, reviewerNumberOfReviews: 48, reviewerPhotoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjXgpY48afcqatAPB3SbzAO-yj7ZPMj89hTI-VT82x2CbH9XbuZtRg=s1920-c-rp-mo-ba12-br100', responseFromOwnerText: 'Thank you keep visiting and referring to friends and family..' },
  { name: 'Samee Ullah', text: 'Best beef burger. Better than Brim.', textTranslated: null, stars: 5, publishedAtDate: '2026-07-08T20:21:58.904Z', isLocalGuide: false, reviewerNumberOfReviews: 3, reviewerPhotoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjXEAJlCHnF_3DFHF7-Wzywx_59_-4fApGfCMzKLla4XhAP82_rX=s1920-c-rp-mo-br100', responseFromOwnerText: 'Thank you keep visiting and referring to friends and family..' },
  { name: 'M.Qasim Javed', text: 'Zara maza nahi ayea first time gye thy', textTranslated: 'I did not enjoy it at all, I went for the first time.', stars: 2, publishedAtDate: '2026-07-18T18:06:54.410Z', isLocalGuide: false, reviewerNumberOfReviews: 5, reviewerPhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocKBcDXyEcrAsvU0r05HfnF7VKRuvP6sgq68t9uL_vcm_fvujg=s1920-c-rp-mo-br100', responseFromOwnerText: 'Thank you for your review .. kindly do let us know a bit precise what we can improve ..' },
]

export const businessInfo = {
  name: 'Ottoman Bites',
  rating: 4.9,
  reviewsCount: 22,
  phone1: '0313-2707666',
  phone2: '0314-6890004',
  address: 'Shop #47, 48, 49 Gate #1, Opposite Head Office, Al-Rehman Garden, Lahore',
  fullAddress: 'Al Rehman Garden Phase 2, Lahore, 54000, Pakistan',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ottoman%20Bites&query_place_id=ChIJYfhsKZIdGTkRtGQMD2hAxns',
  hours: [
    { day: 'Monday', hours: '6 AM to 3 AM' },
    { day: 'Tuesday', hours: '6 PM to 2:30 AM' },
    { day: 'Wednesday', hours: '6 PM to 2:30 AM' },
    { day: 'Thursday', hours: '6 PM to 2:30 AM' },
    { day: 'Friday', hours: '6 PM to 2:30 AM' },
    { day: 'Saturday', hours: '6 PM to 2:30 AM' },
    { day: 'Sunday', hours: '6 PM to 2:30 AM' },
  ],
  lat: 31.6005876,
  lng: 74.2338609,
}

export const heroImages = {
  burger: 'https://images.pexels.com/photos/28828554/pexels-photo-28828554.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1600',
  lamps: 'https://images.pexels.com/photos/13143743/pexels-photo-13143743.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1600',
  chef: 'https://images.pexels.com/photos/24205183/pexels-photo-24205183.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1600',
  arches: 'https://images.pexels.com/photos/14399173/pexels-photo-14399173.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1600',
  spices: 'https://images.pexels.com/photos/301669/pexels-photo-301669.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1600',
}
