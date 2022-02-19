import Category from "../models/Category";
import Product from "../models/Product";

export const Categories =[
    new Category("c1","T-Shirts","https://images.unsplash.com/photo-1620799139652-715e4d5b232d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"),
    new Category("c2","Dresses","https://images.unsplash.com/photo-1494578379344-d6c710782a3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"),
    new Category("c3","Sweaters","https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"),
    new Category("c4","Shoes","https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"),
    new Category("c5","Hoodies","https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"),
    new Category("c6","Coats","https://images.pexels.com/photos/5239743/pexels-photo-5239743.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"),
]


export const Products=[
    new Product("p1",
    ["c1"],
    "White T-shirt",
    "https://images.unsplash.com/photo-1620799139652-715e4d5b232d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80",
    30,
    "White clear unisex T-shirt with no writtings on it",
    "S/M/L/XL",
    10,
    300
    ),
    new Product("p2",
    ["c1"],
    "Gray T-shirt",
    "https://images.unsplash.com/photo-1485218126466-34e6392ec754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    25,
    "Gray clear men T-shirt  with no writtings on it",
    "S/M/L",
    0,
    30
    ),
    new Product("p3",
    ["c1"],
    "Black T-shirt",
    "https://images.unsplash.com/photo-1612428056948-db07619cb4c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    40,
    "Fears kill dreams black T-shirt for women",
    "S/M/L",
    15,
    105
    ),
    new Product("p4",
    ["c1"],
    "Blue T-shirt",
    "https://images.unsplash.com/photo-1621951753163-ee63e7fc147e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    60,
    "Blue pavilon T-shirt with a drawing on it for men",
    "S/M/L/XL",
    20,
    100
    ),
    new Product("p5",
    ["c2"],
    "White Floral Dress",
    "https://images.pexels.com/photos/5257660/pexels-photo-5257660.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    100,
    "White and red floral v neck and long sleeve dress",
    "M/L",
    20,
    300
    ),
    new Product("p6",
    ["c2"],
    "Pink Floral Dress",
    "https://images.unsplash.com/photo-1482270406631-a02c51d93c2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80",
    150,
    "Pink and black floral long sleeve dress",
    "S/M/L",
    10,
    350
    ),
    new Product("p7",
    ["c2"],
    "Green Floral Dress",
    "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    200,
    "Green and black floral short sleeve evening dress",
    "S/M/L",
    50,
    500
    ),
    new Product("p8",
    ["c2"],
    "Red Long Dress",
    "https://images.unsplash.com/photo-1603986153795-d142dbbe0ae0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    99,
    "Red silk long sleeve v nick evening dress",
    "S/M/L/XL",
    10,
    200
    ),
    new Product("p9",
    ["c3"],
    "Red Sweater",
    "https://images.unsplash.com/photo-1608984361471-ff566593088f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=974&q=80",
    50,
    "Red casual knitted sweater for women",
    "S/M/L",
    0,
    400
    ),
    new Product("p10",
    ["c3"],
    "White Sweater",
    "https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    30,
    "White casual knitted high nick sweater for women",
    "S/M/L",
    0,
    160
    ),
    new Product("p11",
    ["c3"],
    "Pink Sweater",
    "https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    80,
    "Pink casual knitted floral sleeves sweater for women",
    "S/M/L",
    5,
    470
    ),
    new Product("p12",
    ["c3"],
    "Green Sweater",
    "https://images.pexels.com/photos/2705753/pexels-photo-2705753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    40,
    "Green casual knitted sweater for women",
    "S/M/L/XL",
    0,
    180
    ),
    new Product("p13",
    ["c4"],
    "Blue Floral Heels",
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMGhlZWxzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    45,
    "Blue Floral high Heels for women",
    "36-41",
    5,
    370
    ),
    new Product("p14",
    ["c4"],
    "Black Boots",
    "https://images.unsplash.com/photo-1634592735948-b505d1d26eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    20,
    "Black leather lace-up high boots for women",
    "36-39",
    0,
    510
    ),
    new Product("p15",
    ["c4"],
    "Yellow Boots",
    "https://images.unsplash.com/photo-1622632181067-d7435c7f7605?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJvb3RzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    32,
    "Yellow leather lace-up unisex boots",
    "36-41",
    5,
    400
    ),
    new Product("p16",
    ["c4"],
    "Gray Shoes",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGJvb3RzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    100,
    "Gray lace-up running shoes for men",
    "39-41",
    10,
    142
    ),
    new Product("p17",
    ["c5"],
    "Gray Hoodie",
    "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    75,
    "Gray casual Hoodie for women",
    "S/M/L",
    10,
    160
    ),
     new Product("p18",
    ["c5"],
    "Purple Hoodie",
    "https://images.pexels.com/photos/6311397/pexels-photo-6311397.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    50,
    "Purple casual Hoodie for women",
    "S/M/L",
    0,
    110
    ),
    new Product("p19",
    ["c5"],
    "Black Hoodie",
    "https://images.pexels.com/photos/6311477/pexels-photo-6311477.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    70,
    "Black casual Hoodie for women",
    "S/M/L/XL",
    5,
    130
    ),
    new Product("p20",
    ["c5"],
    "Black Hoodie",
    "https://images.pexels.com/photos/6311473/pexels-photo-6311473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    60,
    "Black casual Hoodie for men",
    "S/M/L/XL",
    0,
    0
    ),
    new Product("p21",
    ["c6"],
    "Red Coat",
    "https://images.pexels.com/photos/1684323/pexels-photo-1684323.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    70,
    "Red casual fur winter coat for women",
    "S/M/L/XL",
    0,
    44
    ),
    new Product("p22",
    ["c6"],
    "Gray Coat",
    "https://images.pexels.com/photos/3118702/pexels-photo-3118702.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    65,
    "Gray wool winter coat for women",
    "S/M/L/XL",
    0,
    610
    ),
    new Product("p23",
    ["c6"],
    "Beige Coat",
    "https://images.unsplash.com/photo-1572567412275-64794a5387c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29hdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
    90,
    "Beige wool winter coat for women",
    "M/L/XL",
    10,
    40
    ),
    new Product("p24",
    ["c6"],
    "Brown Coat",
    "https://images.unsplash.com/photo-1514813836041-518668f092b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29hdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    60,
    "Brown long wool winter coat for women",
    "S/M/L",
    0,
    700
    ),



]




