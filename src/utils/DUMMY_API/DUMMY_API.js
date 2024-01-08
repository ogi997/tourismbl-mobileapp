export const coordinates = {
  latitude: 44.76794204584623,
  longitude: 17.18779060536362,
  latitudeDelta: 0.03,
  longitudeDelta: 0.0421,
};

export const LOCATIONS_DATA = [
  {
    id: 0,
    title: "Title",
    description: "Description",
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    user_id: 0,
    category: "nesto",
    visibility: "nesto2",
    active: false,
  },
  {
    id: 1,
    title: "Title1",
    description: "Description1",
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    user_id: 2,
    category: "nesto",
    visibility: "nesto2",
    false: true,
  },
  {
    id: 2,
    title: "Title2",
    description: "Description2",
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    user_id: 1,
    category: "nesto",
    visibility: "nesto2",
    false: true,
  },
];

export const USERS_DATA = [
  {
    id: 0,
    first_name: "Ognjen",
    last_name: "Tomanic",
    username: "ogi",
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    admin: false,
    email: "tomanic.ogi@gmail.com",
    active: true,
  },
  {
    id: 1,
    first_name: "Marko",
    last_name: "Markovic",
    username: "marko",
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    admin: true,
    email: "marko.markovic@gmail.com",
    active: false,
  },
  {
    id: 2,
    first_name: "Janko",
    last_name: "Jankovic",
    username: "janko",
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    admin: false,
    email: "janko.jankovic@gmail.com",
    active: true,
  },
];

export const DATA = [
  { id: 0, title: "All" },
  { id: 1, title: "Hotel1" },
  { id: 2, title: "Hotel2" },
  { id: 3, title: "Hotel3" },
  { id: 4, title: "Hotel4" },
  { id: 5, title: "Hotel5" },
  { id: 6, title: "Hotel6" },
  { id: 7, title: "Hotel7" },
  { id: 8, title: "Hotel8" },
  { id: 9, title: "Hotel9" },
];

export const DROPDOWN_DATA = [
  { id: 1, label: "Football", value: "football", key: 1 },
  { id: 2, label: "Baseball", value: "baseball", key: 2 },
  { id: 3, label: "Hockey", value: "hockey", key: 3 },
];

export const DATA_MARKERS = [
  {
    id: 1,
    coords: { latitude: 44.76643462217676, longitude: 17.190494272031692 },
    title: "Title1",
    description: "opis1",
    category: "football",
    visibility: "all",
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    coords: { latitude: 44.769877537132466, longitude: 17.18955013448225 },
    title: "Title2",
    description: "opis2",
    category: "hockey",
    visibility: "register_users",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9bLg1NQ7hxBmxr6mbk1fkQGv-a6f8QskCSmZlTK-3fg&s",
  },
  {
    id: 3,
    coords: { latitude: 44.77161415089527, longitude: 17.19521495982473 },
    title: "Title3",
    description: "opis3",
    category: "baseball",
    visibility: "only_me",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4y7zVmHqMDDZPFYCAtIvlWWGYofVYEwNg4AyzbXsRg&s",
  },
];

export const VISIBILITY_DATA = [
  { id: 0, label: "All", value: "all" },
  { id: 1, label: "Only me", value: "only_me" },
  { id: 2, label: "Register users", value: "register_users" },
];

export const DATA_HOTELS = [
  {
    id: 0,
    title: "Hotel0",
    opis: "Opis jako puno opisa koji treba da se prikaze na kartici.",
  },
  {
    id: 1,
    title: "Hotel1",
    opis: "Opis jako puno opisa koji treba da se prikaze na kartici",
  },
  {
    id: 2,
    title: "Hotel2",
    opis: "Opis jako puno opisa koji treba da se prikaze na kartici",
  },
  {
    id: 3,
    title: "Hotel3",
    opis: "Opis jako puno opisa koji treba da se prikaze na kartici",
  },
  {
    id: 4,
    title: "Hotel4",
    opis: "Opis jako puno opisa koji treba da se prikaze na kartici",
  },
  {
    id: 5,
    title: "Hotel5",
    opis: "Opis jako puno opisa koji treba da se prikaze na kartici",
  },
  {
    id: 6,
    title: "Hotel6",
    opis: "Opis jako puno opisa koji treba da se prikaze na kartici",
  },
  {
    id: 7,
    title: "Hotel7",
    opis: "Opis jako puno opisa koji treba da se prikaze na kartici",
  },
  {
    id: 8,
    title: "Hotel8",
    opis: "Opis jako puno opisa koji treba da se prikaze na kartici",
  },
  {
    id: 9,
    title: "Hotel9",
    opis: "Opis jako puno opisa koji treba da se prikaze na kartici",
  },
];

export const DATA_REVIEWS = [
  {
    id: 20,
    avatar: require("../../../assets/images/avatar1.png"),
    first_name: "Ime_Test",
    last_name: "Prezime_Test",
    mark: 5,
    description: "Ovo je ostavljen review. Ima ga jako jako jako punoooo.",
  },
  {
    id: 21,
    avatar: require("../../../assets/images/avatar2.png"),
    first_name: "Ime_Test",
    last_name: "Prezime_Test",
    mark: 4,
    description: "Ovo je ostavljen review",
  },
  {
    id: 22,
    avatar: require("../../../assets/images/avatar1.png"),
    first_name: "Ime_Test",
    last_name: "Prezime_Test",
    mark: 1,
    description: "Ovo je ostavljen review",
  },
  {
    id: 23,
    avatar: require("../../../assets/images/avatar2.png"),
    first_name: "Ime_Test",
    last_name: "Prezime_Test",
    mark: 2,
    description: "Ovo je ostavljen review",
  },
  {
    id: 24,
    avatar: require("../../../assets/images/avatar1.png"),
    first_name: "Ime_Test",
    last_name: "Prezime_Test",
    mark: 3,
    description: "Ovo je ostavljen review",
  },
  {
    id: 25,
    avatar: require("../../../assets/images/avatar2.png"),
    first_name: "Ime_Test",
    last_name: "Prezime_Test",
    mark: 5,
    description: "Ovo je ostavljen review",
  },
  {
    id: 26,
    avatar: require("../../../assets/images/avatar1.png"),
    first_name: "Ime_Test",
    last_name: "Prezime_Test",
    mark: 4,
    description: "Ovo je ostavljen review",
  },
  {
    id: 27,
    avatar: require("../../../assets/images/avatar2.png"),
    first_name: "Ime_Test",
    last_name: "Prezime_Test",
    mark: 2,
    description: "Ovo je ostavljen review",
  },
  {
    id: 28,
    avatar: require("../../../assets/images/avatar1.png"),
    first_name: "Ime_Test",
    last_name: "Prezime_Test",
    mark: 1,
    description: "Ovo je ostavljen review",
  },
  {
    id: 29,
    avatar: require("../../../assets/images/avatar2.png"),
    first_name: "Ime_Test",
    last_name: "Prezime_Test",
    mark: 3,
    description: "Ovo je ostavljen review",
  },
];
