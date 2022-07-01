    
const local_places = {
  "id": 1,
  "name": "Pantai Parangtritis",
  "address": "Yogyakarta",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros justo, egestas eu eros quis, dapibus viverra tellus. Fusce id dapibus nisl. Etiam libero erat, sagittis ac lectus ac, elementum varius sem. Vestibulum suscipit eros tellus, ut dignissim leo lacinia rutrum. Morbi sollicitudin eget ex blandit tempus.",
  "rating": 4.6,
  "plans": [
    { "id": 1, "name": "Yogyakarta basic plan" },
    { "id": 1, "name": "Yogyakarta culinary plan" },
  ],
  "image": [
    "https://images.unsplash.com/photo-1606820031302-d26dcd6b8990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1606820031302-d26dcd6b8990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1606820031302-d26dcd6b8990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  ],
  "coverImage": "https://images.unsplash.com/photo-1606820031302-d26dcd6b8990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
}

const local_plans =  [
  {
  "id": 1,
  "name": "Yogyakarta basic plan",
  "category": 1,
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros justo, egestas eu eros quis, dapibus viverra tellus.",
  "missions": [
    {
      "id": 1,
      "planId": 1,
      "name": "Misi 1",
      "lat": -7.816072,
      "long": 110.368462,
      "status": false
    },
      {
      "id": 2,
      "planId": 1,
      "name": "Misi 2",
      "lat": -7.816072,
      "long": 110.368462,
      "status": false
    }
  ],
  "places": [
   local_places
  ],
  "status": false,
},
{
  "id": 2,
  "name": "Yogyakarta culinary plan",
  "category": 1,
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros justo, egestas eu eros quis, dapibus viverra tellus.",
  "missions": [
    {
      "id": 3,
      "planId": 2,
      "name": "misi 3",
      "lat": -7.816072,
      "long": 110.368462,
      "status": false
    },
      {
      "id": 4,
      "planId": 2,
      "name": "misi 4",
      "lat": -7.816072,
      "long": 110.368462,
      "status": false
    }
  ],
  "places": [
      local_places,
  ],
  "status": false,
}
]


const local_bandung_city =
{
  "id": 3,
  "name": "Bandung",
  "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/500px-Circle_-_black_simple.svg.png",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros justo, egestas eu eros quis, dapibus viverra tellus. Fusce id dapibus nisl. Etiam libero erat, sagittis ac lectus ac, elementum varius sem. Vestibulum suscipit eros tellus, ut dignissim leo lacinia rutrum. Morbi sollicitudin eget ex blandit tempus.",
  "coverImage": "https://images.unsplash.com/photo-1606820031302-d26dcd6b8990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "plans": [{ "id": 1, "name": "Yogyakarta Basic plan" }, { "id": 1, "name": "Yogyakarta Culinary plan" }],
  "places": [
    {
      "id": 1,
      "name": "Pantai Parangtritis",
      "coverImage":
        "https://images.unsplash.com/photo-1606820031302-d26dcd6b8990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
  ]
};
const local_malang_city = {
  "id": 2,
  "name": "Malang",
  "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/500px-Circle_-_black_simple.svg.png",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros justo, egestas eu eros quis, dapibus viverra tellus. Fusce id dapibus nisl. Etiam libero erat, sagittis ac lectus ac, elementum varius sem. Vestibulum suscipit eros tellus, ut dignissim leo lacinia rutrum. Morbi sollicitudin eget ex blandit tempus.",
  "coverImage": "https://images.unsplash.com/photo-1606820031302-d26dcd6b8990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "plans": [{ "id": 1, "name": "Yogyakarta basic plan" }, { "id": 1, "name": "Yogyakarta culinary plan" }],
  "places": [
    {
      "id": "1",
      "name": "Pantai Parangtritis",
      "coverImage":
        "https://images.unsplash.com/photo-1606820031302-d26dcd6b8990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
  ]
}
const local_yogyajakrta_city = {
  "id": 1,
  "name": "Yogyakarta",
  "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/500px-Circle_-_black_simple.svg.png",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros justo, egestas eu eros quis, dapibus viverra tellus. Fusce id dapibus nisl. Etiam libero erat, sagittis ac lectus ac, elementum varius sem. Vestibulum suscipit eros tellus, ut dignissim leo lacinia rutrum. Morbi sollicitudin eget ex blandit tempus.",
  "coverImage": "https://images.unsplash.com/photo-1606820031302-d26dcd6b8990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "plans": local_plans,
  "places": [
    {
      "id": "1",
      "name": "Pantai Parangtritis",
      "coverImage":
        "https://images.unsplash.com/photo-1606820031302-d26dcd6b8990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
  ]
}


module.exports.Cities = [local_yogyajakrta_city]

module.exports.Places = [local_places]

module.exports.Plans = local_plans;