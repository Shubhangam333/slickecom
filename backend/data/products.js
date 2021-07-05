// const products = [
//   {
//     name: "Airpods Wireless Bluetooth Headphones",
//     image: "/images/airpods.jpg",
//     description:
//       "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
//     brand: "Apple",
//     category: "Electronics",
//     price: 89.99,
//     countInStock: 10,
//     rating: 4.5,
//     numReviews: 12,
//   },
//   {
//     name: "iPhone 11 Pro 256GB Memory",
//     image: "/images/phone.jpg",
//     description:
//       "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
//     brand: "Apple",
//     category: "Electronics",
//     price: 599.99,
//     countInStock: 7,
//     rating: 4.0,
//     numReviews: 8,
//   },
//   {
//     name: "Cannon EOS 80D DSLR Camera",
//     image: "/images/camera.jpg",
//     description:
//       "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
//     brand: "Cannon",
//     category: "Electronics",
//     price: 929.99,
//     countInStock: 5,
//     rating: 3,
//     numReviews: 12,
//   },
//   {
//     name: "Sony Playstation 4 Pro White Version",
//     image: "/images/playstation.jpg",
//     description:
//       "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
//     brand: "Sony",
//     category: "Electronics",
//     price: 399.99,
//     countInStock: 11,
//     rating: 5,
//     numReviews: 12,
//   },
//   {
//     name: "Logitech G-Series Gaming Mouse",
//     image: "/images/mouse.jpg",
//     description:
//       "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
//     brand: "Logitech",
//     category: "Electronics",
//     price: 49.99,
//     countInStock: 7,
//     rating: 3.5,
//     numReviews: 10,
//   },
//   {
//     name: "Amazon Echo Dot 3rd Generation",
//     image: "/images/alexa.jpg",
//     description:
//       "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
//     brand: "Amazon",
//     category: "Electronics",
//     price: 29.99,
//     countInStock: 0,
//     rating: 4,
//     numReviews: 12,
//   },
// ];

// export default products;

const products = [
  {
    _id: {
      $oid: "60bb5f37ae45463ee8bd41ad",
    },
    rating: 4,
    numReviews: 12,
    price: 29.99,
    countInStock: 0,
    name: "Amazon Echo Dot 3rd Generation",
    image: "/images/alexa.jpg",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    user: {
      $oid: "60bb5f37ae45463ee8bd41a5",
    },
    reviews: [],
    __v: 0,
    createdAt: {
      $date: "2021-06-05T11:25:43.392Z",
    },
    updatedAt: {
      $date: "2021-06-05T11:25:43.392Z",
    },
  },
  {
    _id: {
      $oid: "60bb5f37ae45463ee8bd41a9",
    },
    rating: 4,
    numReviews: 8,
    price: 599.99,
    countInStock: 7,
    name: "iPhone 11 Pro 256GB Memory",
    image: "/images/phone.jpg",
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    user: {
      $oid: "60bb5f37ae45463ee8bd41a5",
    },
    reviews: [],
    __v: 0,
    createdAt: {
      $date: "2021-06-05T11:25:43.392Z",
    },
    updatedAt: {
      $date: "2021-06-05T11:25:43.392Z",
    },
  },
  {
    _id: {
      $oid: "60bb5f37ae45463ee8bd41a8",
    },
    rating: 4.5,
    numReviews: 12,
    price: 89.99,
    countInStock: 10,
    name: "Airpods Wireless Bluetooth Headphones",
    image: "/images/airpods.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    user: {
      $oid: "60bb5f37ae45463ee8bd41a5",
    },
    reviews: [],
    __v: 0,
    createdAt: {
      $date: "2021-06-05T11:25:43.391Z",
    },
    updatedAt: {
      $date: "2021-06-05T11:25:43.391Z",
    },
  },
  {
    _id: {
      $oid: "60bb5f37ae45463ee8bd41ac",
    },
    rating: 3.5,
    numReviews: 10,
    price: 49.99,
    countInStock: 7,
    name: "Logitech G-Series Gaming Mouse",
    image: "/images/mouse.jpg",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    user: {
      $oid: "60bb5f37ae45463ee8bd41a5",
    },
    reviews: [],
    __v: 0,
    createdAt: {
      $date: "2021-06-05T11:25:43.392Z",
    },
    updatedAt: {
      $date: "2021-06-05T11:25:43.392Z",
    },
  },
  {
    _id: {
      $oid: "60bb5f37ae45463ee8bd41aa",
    },
    rating: 5,
    numReviews: 1,
    price: 929.99,
    countInStock: 5,
    name: "Cannon EOS 80D DSLR Camera",
    image: "/images/camera.jpg",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    user: {
      $oid: "60bb5f37ae45463ee8bd41a5",
    },
    reviews: [
      {
        _id: {
          $oid: "60df25731ab883598ccecdf8",
        },
        name: "client",
        rating: 5,
        comment: "Nice ",
        user: {
          $oid: "60bc67b62796f93270b0ed66",
        },
        createdAt: {
          $date: "2021-07-02T14:40:51.166Z",
        },
        updatedAt: {
          $date: "2021-07-02T14:40:51.166Z",
        },
      },
    ],
    __v: 1,
    createdAt: {
      $date: "2021-06-05T11:25:43.392Z",
    },
    updatedAt: {
      $date: "2021-07-02T14:40:51.166Z",
    },
  },
  {
    _id: {
      $oid: "60bb5f37ae45463ee8bd41ab",
    },
    rating: 1,
    numReviews: 1,
    price: 399.99,
    countInStock: 11,
    name: "Sony Playstation 4 Pro White Version",
    image: "/images/playstation.jpg",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    user: {
      $oid: "60bb5f37ae45463ee8bd41a5",
    },
    reviews: [
      {
        _id: {
          $oid: "60df25d21ab883598ccecdfc",
        },
        name: "client",
        rating: 1,
        comment: "Bad manufacturing",
        user: {
          $oid: "60bc67b62796f93270b0ed66",
        },
        createdAt: {
          $date: "2021-07-02T14:42:26.089Z",
        },
        updatedAt: {
          $date: "2021-07-02T14:42:26.089Z",
        },
      },
    ],
    __v: 1,
    createdAt: {
      $date: "2021-06-05T11:25:43.392Z",
    },
    updatedAt: {
      $date: "2021-07-02T14:42:26.089Z",
    },
  },
  {
    _id: {
      $oid: "60bb708bccc05535d8a4b139",
    },
    rating: 5,
    numReviews: 1,
    price: 249909,
    countInStock: 20,
    name: "Apple MacBook Pro (16-inch)",
    user: {
      $oid: "60bb5f37ae45463ee8bd41a5",
    },
    image: "/uploads\\image-1611393155751.jpg",
    brand: "Apple",
    category: "Electronics",
    description:
      "Ninth-generation 8-core Intel Core i9 processor Stunning 16-inch Retina display with True Tone technology Touch Bar and Touch ID AMD Radeon Pro 5500M graphics with GDDR6 memory Ultrafast SSD",
    reviews: [
      {
        _id: {
          $oid: "60df259b1ab883598ccecdfa",
        },
        name: "client",
        rating: 5,
        comment: "Nice manufacturing",
        user: {
          $oid: "60bc67b62796f93270b0ed66",
        },
        createdAt: {
          $date: "2021-07-02T14:41:31.204Z",
        },
        updatedAt: {
          $date: "2021-07-02T14:41:31.204Z",
        },
      },
    ],
    createdAt: {
      $date: "2021-06-05T12:39:39.611Z",
    },
    updatedAt: {
      $date: "2021-07-02T14:41:31.205Z",
    },
    __v: 1,
  },
  {
    _id: {
      $oid: "60bb7228ccc05535d8a4b13a",
    },
    rating: 0,
    numReviews: 0,
    price: 145990,
    countInStock: 5,
    name: "Sony Alpha ILCE-7M3K Camera",
    user: {
      $oid: "60bb5f37ae45463ee8bd41a5",
    },
    image: "/uploads\\image-1611394544120.png",
    brand: "sony",
    category: "Electronics",
    description:
      "Mirrorless Camera with 28-70mm Zoom Lens (4K Full Frame, Real-Time Eye Auto Focus, Tiltable LCD, Low Light Camera) - Black. Standard ISO range from 100 to 51200 15-stop dynamic range at low-sensitivity settings 14-bit RAW output for natural gradations 5-axis optical in-body image stabilization 4D Focus – Wide, Fast, Steadfast, AF performance inherited from α9",
    reviews: [],
    createdAt: {
      $date: "2021-06-05T12:46:32.781Z",
    },
    updatedAt: {
      $date: "2021-06-05T12:48:45.389Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "60bb7330ccc05535d8a4b13c",
    },
    rating: 0,
    numReviews: 0,
    price: 19999,
    countInStock: 33,
    name: "Mi TV 4A 100 cm (40 Inches) Full HD Android LED TV (Black) ",
    user: {
      $oid: "60bb5f37ae45463ee8bd41a5",
    },
    image: "/uploads/image-1611609456379.jpg",
    brand: "MI",
    category: "Electronics",
    description:
      "Resolution : Full HD (1920x1080) | Refresh Rate: 60 hertz Connectivity: 3 HDMI ports to connect set top box, Blu Ray players, gaming console | 3 USB ports to connect hard drives and other USB devices Sound: 20 Watts Output | DTS-HD sound Smart TV Features :Built-In Wi-Fi | PatchWall | Netflix | Prime Video | Disney+Hotstar and more | Android TV 9.0 | Google Assistant | Data Saver",
    reviews: [],
    createdAt: {
      $date: "2021-06-05T12:50:56.692Z",
    },
    updatedAt: {
      $date: "2021-06-05T12:51:39.981Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "60bb736cccc05535d8a4b13d",
    },
    rating: 0,
    numReviews: 0,
    price: 999,
    countInStock: 35,
    name: "Ben Martin Men's Regular Fit Jeans",
    user: {
      $oid: "60bb5f37ae45463ee8bd41a5",
    },
    image: "/uploads/image-1611858480155.jpg",
    brand: "Ben Martin",
    category: "Fashion",
    description:
      "Care Instructions: Do not bleach, dry in shade Fit Type: Regular Fit Fabric: Denim Style: Jeans; Pattern: Solid; Fit: Regular Fit Rise: Mid Rise; Closure: Zipper; Length: Full length",
    reviews: [],
    createdAt: {
      $date: "2021-06-05T12:51:56.671Z",
    },
    updatedAt: {
      $date: "2021-06-05T12:52:50.945Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "60bb73b8ccc05535d8a4b13e",
    },
    rating: 3,
    numReviews: 1,
    price: 899,
    countInStock: 23,
    name: "Excalibur by Unlimited Men's Relaxed Fit Formal Pants",
    user: {
      $oid: "60bb5f37ae45463ee8bd41a5",
    },
    image: "/uploads/image-1611858706375.jpg",
    brand: "Excalibur",
    category: "Fashion",
    description:
      "Care Instructions: Machine Wash Fit Type: Relaxed Color: Charcoal 100% Rayon Relaxed Fit Button fly with button closure Slant Pocket",
    reviews: [
      {
        _id: {
          $oid: "60df25881ab883598ccecdf9",
        },
        name: "client",
        rating: 3,
        comment: "Not too good",
        user: {
          $oid: "60bc67b62796f93270b0ed66",
        },
        createdAt: {
          $date: "2021-07-02T14:41:12.667Z",
        },
        updatedAt: {
          $date: "2021-07-02T14:41:12.667Z",
        },
      },
    ],
    createdAt: {
      $date: "2021-06-05T12:53:12.754Z",
    },
    updatedAt: {
      $date: "2021-07-02T14:41:12.667Z",
    },
    __v: 1,
  },
  {
    _id: {
      $oid: "60bb78e287497e53602ce8be",
    },
    rating: 0,
    numReviews: 0,
    price: 5999,
    countInStock: 46,
    name: "FNS Stainless Steel Cutlery Set - 26 Pcs.",
    user: {
      $oid: "60bb5f37ae45463ee8bd41a5",
    },
    image: "/uploads/image-1611937584178.jpg",
    brand: "FNS",
    category: "Appliances",
    description:
      "Pack Content : 6 Dessert Spoons,6 Tea Spoon, 2 Serving Spoon, 6 Dessert Forks, 6 Dessert Knives Set Size : Set Of 26 Pcs Contact Us/Consumer Care : Name: Syed Ismail, Email: help@homecentre.in, Lifestyle International Pvt Ltd, 1800-212-7500 Material : Stainless Steel Country of Origin : India",
    reviews: [],
    createdAt: {
      $date: "2021-06-05T13:15:14.436Z",
    },
    updatedAt: {
      $date: "2021-06-05T13:15:56.690Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "60bb792787497e53602ce8bf",
    },
    rating: 0,
    numReviews: 0,
    price: 550,
    countInStock: 50,
    name: "OCEAN 6-piece Round Beer Glass set - 425 ml",
    user: {
      $oid: "60bb5f37ae45463ee8bd41a5",
    },
    image: "/uploads/image-1611913615106.jpg",
    brand: "OCEAN",
    category: "Appliances",
    description:
      "The best option to host the perfect house party this festive season, these stylish beer glasses can easily elevate the aesthetic value of your dining table.  Pack Content : 6 Beer Glass Capacity : 425 ML Set Size : Set Of 6 Pcs",
    reviews: [],
    createdAt: {
      $date: "2021-06-05T13:16:23.812Z",
    },
    updatedAt: {
      $date: "2021-06-05T13:16:55.885Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "60bb796587497e53602ce8c0",
    },
    rating: 2,
    numReviews: 1,
    price: 2000,
    countInStock: 76,
    name: "MILTON Thermosteel Carafe - 1500 ml",
    user: {
      $oid: "60bb5f37ae45463ee8bd41a5",
    },
    image: "/uploads/image-1611938121935.jpg",
    brand: "MILTON",
    category: "Appliances",
    description:
      "Keep your beverage hot or cold with this carafe that has been crafted from thermostat regulated stainless steel and comes with a lift-up tab that facilitates ease of use.  Pack Content : 1 Flask Capacity : 1500ml Shape : Round",
    reviews: [
      {
        _id: {
          $oid: "60df25bb1ab883598ccecdfb",
        },
        name: "client",
        rating: 2,
        comment: "Manufacturing defect in MILTON Thermosteel Carafe",
        user: {
          $oid: "60bc67b62796f93270b0ed66",
        },
        createdAt: {
          $date: "2021-07-02T14:42:03.869Z",
        },
        updatedAt: {
          $date: "2021-07-02T14:42:03.869Z",
        },
      },
    ],
    createdAt: {
      $date: "2021-06-05T13:17:25.644Z",
    },
    updatedAt: {
      $date: "2021-07-02T14:42:03.869Z",
    },
    __v: 1,
  },
  {
    _id: {
      $oid: "60bb7c1cdfc4d40150d37f0f",
    },
    rating: 0,
    numReviews: 0,
    price: 5000,
    countInStock: 20,
    name: "Shoes",
    user: {
      $oid: "60bb5f37ae45463ee8bd41a5",
    },
    image: "/uploads\\image-1622899774311.jpg",
    brand: "Fossil",
    category: "Sports",
    description:
      "The Best Men’s Shoes And Footwear : Shoes | Men's Shoes | Indie Cap Boot | Hudson's Bay -Read More –",
    reviews: [],
    createdAt: {
      $date: "2021-06-05T13:29:00.953Z",
    },
    updatedAt: {
      $date: "2021-06-05T13:52:58.090Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "60bb7fe64377e43f142ea8f4",
    },
    rating: 4,
    numReviews: 1,
    price: 20000,
    countInStock: 30,
    name: "Sony PS5 1TB Slim Console Controller",
    user: {
      $oid: "60bb5f37ae45463ee8bd41a5",
    },
    image: "/uploads\\image-1622900754356.png",
    brand: "PlayStation",
    category: "Electronics",
    description:
      " A Stunning New Design: A slimmer and lighter console with stylish new looks and packed with true PlayStation 4 power Slick Interface: Fast, personal and easier to share, connect and play with friends Experience incredibly vivid, vibrant colours with breath-taking HDR visuals",
    reviews: [
      {
        _id: {
          $oid: "60df25401ab883598ccecdf7",
        },
        name: "Admin User",
        rating: 4,
        comment: "Good product",
        user: {
          $oid: "60bb5f37ae45463ee8bd41a5",
        },
        createdAt: {
          $date: "2021-07-02T14:40:00.682Z",
        },
        updatedAt: {
          $date: "2021-07-02T14:40:00.682Z",
        },
      },
    ],
    createdAt: {
      $date: "2021-06-05T13:45:10.528Z",
    },
    updatedAt: {
      $date: "2021-07-02T14:40:00.684Z",
    },
    __v: 1,
  },
  {
    _id: {
      $oid: "60bb81cb448db83cf07ebf9b",
    },
    rating: 0,
    numReviews: 0,
    price: 10000,
    countInStock: 200,
    name: "Couch",
    user: {
      $oid: "60bb5f37ae45463ee8bd41a5",
    },
    image: "/uploads\\image-1622901207597.png",
    brand: "furnitures",
    category: "furnitures",
    description: "Furniture",
    reviews: [],
    createdAt: {
      $date: "2021-06-05T13:53:15.509Z",
    },
    updatedAt: {
      $date: "2021-06-05T13:54:53.649Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "60bb84be448db83cf07ebfa0",
    },
    rating: 0,
    numReviews: 0,
    price: 8999,
    countInStock: 56,
    name: "Ray-Ban Anti-Reflective Aviator Unisex Sunglasses",
    user: {
      $oid: "60bb5f37ae45463ee8bd41a5",
    },
    image: "/uploads\\image-1615321863612.jpg",
    brand: "Ray-Ban",
    category: "TrendingNow",
    description:
      "Lens Width : 61 mm, Bridge Width : 14 mm, Temple Length : 140 mm Standard Icons | Aviator Family Uv Protected Sunglasses Rayban is the global leader in premium eyewear and by far the best selling eyewear brand in the world. Made In Ital",
    reviews: [],
    createdAt: {
      $date: "2021-06-05T14:05:50.204Z",
    },
    updatedAt: {
      $date: "2021-06-05T14:06:50.616Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "60bb850b448db83cf07ebfa1",
    },
    rating: 0,
    numReviews: 0,
    price: 1499,
    countInStock: 23,
    name: "Volatility Uniforia Euro 2020 Hand Stich Football Size-05",
    user: {
      $oid: "60bb5f37ae45463ee8bd41a5",
    },
    image: "/uploads\\image-1615322174960.jpg",
    brand: "Adidas",
    category: "TrendingNow",
    description:
      "✔ Fine & Furnished Quality. ✔ Our Moto Is Provide Better Quality To Our Customers. ✔ Ensures Good Performance. ✔ Package Content :1 Piece Football. ✔ The Ball Is Meant For Very Light Play And Not For Playing On Rough Ground.",
    reviews: [],
    createdAt: {
      $date: "2021-06-05T14:07:07.239Z",
    },
    updatedAt: {
      $date: "2021-06-05T14:07:47.694Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "60bb8537448db83cf07ebfa2",
    },
    rating: 3,
    numReviews: 1,
    price: 34999,
    countInStock: 45,
    name: "Apple Earpods Pro with Wireless Charging Case Active Noise Cancellation Enabled Bluetooth Headset (White, True Wireless)",
    user: {
      $oid: "60bb5f37ae45463ee8bd41a5",
    },
    image: "/uploads\\image-1615322596061.jpg",
    brand: "Apple",
    category: "HolidayDeals",
    description:
      "Active noise cancellation for immersive sound EASY MODE SWITCHING BETWEEN NOISE CANCELLATION AND SOUND TRANSPARENCY CUSTOM-BUILT DRIVERS FOR POWERFUL BASS AND 'BEATS' The drivers offer an extraordinary sound that makes the Earpod Pro all the more enjoyable DUAL-MICROPHONE FOR ENVIRONMENTAL SENSING AND SMART ADAPTABLE NOISE CANCELLATION An outward-facing microphone detects external sound and then counters it with equal anti-noise, pushing the external noise far away even before you can hear it. The Active Noise Cancellation in these in-ear headphones adjusts to the ear-tips' fit as well as the geometry of your ear to block unwanted noise away. The custom-built high-excursion and low-distortion speaker driver delivers powerful bass",
    reviews: [
      {
        _id: {
          $oid: "60bbab20746ddf46a4ec9999",
        },
        name: "Admin User",
        rating: 3,
        comment: "Good Product",
        user: {
          $oid: "60bb5f37ae45463ee8bd41a5",
        },
        createdAt: {
          $date: "2021-06-05T16:49:36.925Z",
        },
        updatedAt: {
          $date: "2021-06-05T16:49:36.925Z",
        },
      },
    ],
    createdAt: {
      $date: "2021-06-05T14:07:51.258Z",
    },
    updatedAt: {
      $date: "2021-06-05T16:49:36.926Z",
    },
    __v: 1,
  },
  {
    _id: {
      $oid: "60bb8590448db83cf07ebfa3",
    },
    rating: 0,
    numReviews: 0,
    price: 899,
    countInStock: 32,
    name: "Blix Men's Plain Regular fit Casual Shirt",
    user: {
      $oid: "60bb5f37ae45463ee8bd41a5",
    },
    image: "/uploads\\image-1615324457239.jpg",
    brand: "Blix",
    category: "BlixBasics",
    description:
      "Care Instructions: Machine Wash Fit Type: Regular Fit Fabric: Cotton Style: Regular Neck Style: Collared Pattern: Solid Sleeve Type: Full Sleeve",
    reviews: [],
    createdAt: {
      $date: "2021-06-05T14:09:20.810Z",
    },
    updatedAt: {
      $date: "2021-06-05T14:09:56.390Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "60bb85c7448db83cf07ebfa4",
    },
    rating: 0,
    numReviews: 0,
    price: 99,
    countInStock: 24,
    name: "Deniklo Men's Regular Fit Polo Shirt",
    user: {
      $oid: "60bb5f37ae45463ee8bd41a5",
    },
    image: "/uploads\\image-1615323539008.jpg",
    brand: "Deniklo",
    category: "Offers",
    description:
      "Care Instructions: Machine Wash Fit Type: Regular Fit Material - 60% Cotton and 40% Polyester Fit Type - Regular fit; Half sleeve Polo T-Shirt Pattern - Solid Medium size is 40 inches chest Machine wash cold with similar colors, gentle cycle, only non-chlorine bleach (when needed), tumble dry low, warm Made in India",
    reviews: [],
    createdAt: {
      $date: "2021-06-05T14:10:15.186Z",
    },
    updatedAt: {
      $date: "2021-06-05T14:10:46.527Z",
    },
    __v: 0,
  },
];
