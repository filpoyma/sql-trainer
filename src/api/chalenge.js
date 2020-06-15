const tab = {
  artists: {
    header: "artists",
    fields: ["id", "name"],
  },
  albums: {
    header: "albums",
    fields: ["id", "title", "artist_id"],
  },
  track: {
    header: "track",
    fields: ["id", "name", "album_id", "media_type_id"],
  },
  invoices: {
    header: "invoices",
    fields: [
      "id",
      "invoice_date",
      "billing_address",
      "billing_city",
      "billing_state",
      "billing_country",
      "billing_postal_code",
      "total",
      "customer_id",
    ],
  },
  employees: {
    header: "employees",
    fields: [
      "id",
      "first_name",
      "last_name",
      "title",
      "birth_date",
      "hire_date",
      "address",
      "city",
      "state",
      "country",
      "postal_code",
      "phone",
      "fax",
      "email",
      "reports_to ref to employees (id)",
    ],
  },

  media_types: {
    header: "media_types",
    fields: ['id', 'name']
  },
  tracks: {
    header: "tracks",
    fields: ['id', 'name', 'composer', 'miliseconds', 'bytes', 'unit_price', 'madia_type_id', 'genre_id']
  },
  customers: {
  header: "customers",
    fields: [
      "id",
      "first_name",
      "last_name",
      "company",
      "address",
      "city",
      "state",
      "country",
      "postal_code",
      "phone",
      "fax",
      "email",
      "support_rep_id ref to employees (id)"]
}
};

export const challengeValues = [
  [
    "SELECT * FROM invoices;",
    {ru: "Выведите список всех счетов (invoices)", gb: "Give me a list of all invoices"},
    1,
    { tables: [tab.invoices], topic: "select" },
  ],
  [
    "SELECT * FROM artists;",
    {ru: "Выведите список всех артистов (artists)", gb: "Give me a list of all artists"},
    2,
    { tables: [tab.artists], topic: "select" },
  ],
  [
    "SELECT name FROM artists;",
    "Give me the name of every artist",
    3,
    { tables: [tab.artists], topic: "select" },
  ],
  [
    "SELECT first_name, last_name FROM employees;",
    "Give me the first and last names of every employee",
    4,
    { tables: [tab.employees], topic: "select" },
  ],
  [
    "SELECT name FROM media_types;",
    "Give me the names of every media type",
    5,
    { tables: [tab.media_types], topic: "select" },
  ],
  [
    "SELECT * FROM employees ORDER BY hire_date DESC;",
    "Give me a list of every employee by hire date in descending order",
    6,
    { tables: [tab.employees], topic: "order by" },
  ],
  [
    "SELECT hire_date, first_name, last_name FROM employees WHERE hire_date < '2011-02-15';",
    "Give me the hire date, first name, and last name of all employees hired before February 15, 2011",
    7,
    { tables: [tab.employees], topic: "where" },
  ],
  [
    "SELECT * FROM employees WHERE last_name LIKE 'A%';",
    'Give me a list of all employees whose name begins with "A"',
    8,
    { tables: [tab.employees], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_state = 'WA' AND billing_city = 'Redmond';",
    "Give me a list of all invoices from Redmond, WA",
    9,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_country = 'Germany' AND billing_city = 'Berlin';",
    "Give me a list of all invoices from Berlin, Germany",
    10,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_country = 'Canada';",
    "Give me a list of all invoices from Canada",
    11,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_country = 'Canada' AND billing_state = 'AB';",
    "Give me a list of all invoices from Alberta (AB), Canada",
    12,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_country = 'Canada' AND billing_state = 'AB' AND billing_city = 'Edmonton';",
    "Give me a list of all invoices from Edmonton, Alberta (AB), Canada",
    13,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT billing_address FROM invoices WHERE billing_state = 'WA' AND billing_city = 'Redmond';",
    "Give me the billing addresses from every invoice from Redmond, WA",
    14,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_state = 'NV' AND billing_city = 'Reno' AND total > 5;",
    "Give me a list of all invoices for more than $5.00 from Reno, NV",
    15,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM tracks WHERE composer IS NULL;",
    "Give me a list of every track without a composer",
    16,
    { tables: [tab.tracks], topic: "where" },
  ],
  [
    "SELECT * FROM customers WHERE company IS NULL;",
    "Give me a list of every customer not associated with a company",
    17,
    { tables: [tab.customers], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_state = 'WA' AND billing_city = 'Redmond' ORDER BY total ASC;",
    "Give me a list of all invoices from Redmond, WA sorted from low-to-high by total",
    18,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_state = 'WA' AND billing_city = 'Redmond' ORDER BY total DESC;",
    "Give me a list of all invoices from Redmond, WA sorted from high-to-low by total",
    19,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_country = 'Germany' ORDER BY total DESC;",
    "Выведите список всех счетов из Германии (Germany), отсортированных по убыванию",
    20,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_country = 'Germany' ORDER BY total DESC LIMIT 10;",
    "Выведите список список 10 самых дорогих счетов из Германии (Germany)",
    21,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_state = 'MA' AND billing_city = 'Boston' ORDER BY total DESC LIMIT 10;",
    "Выведите список 10 наименее дорогих счетов из Бостона (Boston), штата Массачусетс (MA)",
    22,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_state = 'MA' AND billing_city = 'Boston' ORDER BY total ASC LIMIT 10;",
    "Give me a list of the 10 least expensive invoices from Boston, MA",
    23,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT billing_address FROM invoices WHERE billing_state = 'CA' AND billing_city = 'Cupertino' ORDER BY total DESC LIMIT 3;",
    "Give me the street addresses of the 3 most expensive invoices from Cupertino, CA",
    24,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_state = 'CA' AND (billing_city = 'Mountain View' OR billing_city = 'Cupertino');",
    "Give me a list of all invoices from either Cupertino, CA or Mountain View, CA",
    25,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT count(*) FROM invoices WHERE billing_city = 'Santiago';",
    'Find the number of invoices sent to the city of "Santiago"',
    26,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT country, COUNT(*) FROM customers GROUP BY country;",
    "Give me a count of the number of customers by country",
    27,
    { tables: [tab.customers], topic: "group by" },
  ],
  [
    "SELECT unit_price, COUNT(*) FROM tracks GROUP BY unit_price;",
    "Give me a count of the number of tracks by unit price",
    28,
    { tables: [tab.tracks], topic: "group by" },
  ],
  [
    "SELECT name FROM artists WHERE name LIKE '%smith%';",
    'Give me a list of all names of artists whose name contains "smith".',
    29,
    { tables: [tab.artists], topic: "where" },
  ],
  [
    "SELECT name FROM artists WHERE name LIKE '%smith';",
    'Give me a list of names of artists whose name ends with "smith".',
    30,
    { tables: [tab.artists], topic: "where" },
  ],
  [
    "SELECT city, COUNT(*) FROM employees GROUP BY city;",
    "Give me a count of the number of employees by city",
    31,
    { tables: [tab.employees], topic: "group by" },
  ],
  [
    "SELECT country, COUNT(*) FROM customers GROUP BY country ORDER BY COUNT(*) DESC LIMIT 3",
    "Give me a list of the top 3 countries by number of customers in descending order",
    32,
    { tables: [tab.customers], topic: "group by" },
  ],
  [
    "SELECT billing_city, COUNT(*) FROM invoices GROUP BY billing_city ORDER BY COUNT(*) DESC LIMIT 5",
    "Give me a list of the top 5 cities by number of invoices in descending order",
    33,
    { tables: [tab.invoices], topic: "group by" },
  ],
  [
    "SELECT ar.name, al.title FROM artists AS ar JOIN albums AS al ON al.artist_id = ar.id;",
    "List all artist names alongside the titles of their albums",
    34,
    { tables: [tab.artists, tab.albums], topic: "join" },
  ],
  [
    "SELECT tr.name, al.title FROM albums AS al JOIN tracks AS tr ON tr.album_id = al.id;",
    "List all album names along with their track titles",
    35,
    { tables: [tab.albums, tab.tracks], topic: "join" },
  ],
  [
    "SELECT ar.name, al.title FROM artists AS ar JOIN albums AS al ON al.artist_id = ar.id ORDER BY ar.name;",
    "List all artist names alongside the titles of their albums, in alphabetical order by artist name",
    36,
    { tables: [tab.albums, tab.artists], topic: "join" },
  ],
  [
    "SELECT cs.first_name, cs.last_name, inv.total FROM customers AS cs JOIN invoices AS inv ON cs.id = inv.customer_id ORDER BY inv.total DESC;",
    "List all customers' first and last names next to the totals on their invoices, ordered by total, high to low",
    37,
    { tables: [tab.customers, tab.invoices], topic: "join" },
  ],
  [
    "SELECT * FROM customers AS cs JOIN invoices AS inv ON cs.id = inv.customer_id ORDER BY inv.total DESC LIMIT 1;",
    "Give me the customer (and their invoice) with the highest invoice total",
    38,
    { tables: [tab.customers, tab.invoices], topic: "join" },
  ],
  [
    "SELECT * FROM albums AS al JOIN artists AS ar ON ar.id = al.artist_id WHERE ar.name = 'Aerosmith';",
    "Give me a list of every Aerosmith album",
    39,
    { tables: [tab.albums, tab.artists], topic: "join" },
  ],
  [
    "SELECT * FROM albums AS al JOIN artists AS ar ON ar.id = al.artist_id WHERE ar.name = 'Iron Maiden';",
    "Give me a list of every Iron Maiden album",
    40,
    { tables: [tab.albums, tab.artists], topic: "join" },
  ],
  [
    "SELECT * FROM albums AS al JOIN tracks AS tr ON tr.album_id = al.id WHERE tr.name = 'Midnight';",
    'Give me a list of albums that contains a song called "Midnight"',
    41,
    { tables: [tab.albums, tab.tracks], topic: "join" },
  ],
  [
    "SELECT * FROM artists AS ar JOIN albums AS al ON ar.id = al.artist_id JOIN tracks AS tr ON tr.album_id = al.id WHERE tr.name = 'Midnight';",
    'Give me a list of every artist who has performed the song "Midnight"',
    42,
    { tables: [tab.artists, tab.albums, tab.tracks], topic: "join" },
  ],
  [
    "SELECT COUNT(*) FROM albums AS al JOIN artists AS ar ON ar.id = al.artist_id WHERE ar.name = 'Iron Maiden';",
    "Give me a count of the number of albums by Iron Maiden",
    43,
    { tables: [tab.albums, tab.artists], topic: "join" },
  ],
  [
    "SELECT ar.name, COUNT(*) FROM artists AS ar JOIN albums AS al ON ar.id = al.artist_id GROUP BY ar.id ORDER BY ar.name",
    "List all artists and the number of albums they each have",
    44,
    { tables: [tab.artists, tab.albums], topic: "join" },
  ],
  [
    "SELECT a.title, COUNT(*) FROM albums AS a JOIN tracks AS t ON (t.album_id = a.id) GROUP BY a.id ORDER BY a.title",
    "List all albums next to the number of tracks they each have",
    45,
    { tables: [tab.albums, tab.tracks], topic: "join" },
  ],
  [
    "SELECT ar.*, COUNT(*) AS count FROM artists AS ar JOIN albums AS al ON ar.id = al.artist_id GROUP BY ar.id ORDER BY count DESC LIMIT 1;",
    "Find the artist with the most albums",
    46,
    { tables: [tab.artists, tab.albums], topic: "join" },
  ],
  [
    "SELECT al.*, COUNT(*) AS count FROM tracks AS tr JOIN albums AS al ON tr.album_id = al.id GROUP BY al.id ORDER BY count DESC LIMIT 1;",
    "Find the album with the most tracks",
    47,
    { tables: [tab.tracks, tab.albums], topic: "join" },
  ],
  [
    "SELECT cs.first_name, cs.last_name, SUM(inv.total) AS sum FROM customers AS cs JOIN invoices AS inv ON cs.id = inv.customer_id GROUP BY cs.id ORDER BY sum DESC LIMIT 5;",
    "List the names of the top five customers based on the sums of their invoice totals",
    48,
    { tables: [tab.customers, tab.invoices], topic: "join" },
  ],
  [
    "SELECT * FROM artists ORDER BY name ASC;",
    "Give me a list of all artists sorted alphabetically by first name",
    49,
    { tables: [tab.artists], topic: "order by" },
  ],
  [
    "SELECT al.*, COUNT(*) count FROM albums al JOIN tracks t ON (t.album_id = al.id) GROUP BY al.id ORDER BY count DESC",
    "List all albums next to the number of tracks they each have in descending order",
    50,
    { tables: [tab.albums, tab.tracks], topic: "join" },
  ],
  [
    "SELECT ar.*, COUNT(*) AS count FROM artists AS ar JOIN albums AS al ON ar.id = al.artist_id GROUP BY ar.id ORDER BY count DESC, ar.name;",
    "List all artists and the number of albums they each have in descending order and then by artist name in ascending order",
    51,
    { tables: [tab.artists, tab.albums], topic: "join" },
  ],
];