const tab = {
  artists: {
    header: "artists",
    fields: ["id", "name"],
  },
  albums: {
    header: "albums",
    fields: ["id", "title", "artist_id"],
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
      "reports_to - ref to employees (id)",
    ],
  },

  media_types: {
    header: "media_types",
    fields: ['id', 'name']
  },
  tracks: {
    header: "tracks",
    fields: ['id', 'name', 'composer', 'milliseconds', 'bytes', 'unit_price', 'album_id', 'media_type_id', 'genre_id']
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
      "support_rep_id ref to employees (id)"
    ]
  },
  genres: {
    header: "genres",
    fields: [
      "id",
      "name",
    ]
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
    {ru: "Выведите имена всех исполнителей (artists)", gb: "Give me the name of every artist"},
    3,
    { tables: [tab.artists], topic: "select" },
  ],
  [
    "SELECT first_name, last_name FROM employees;",
    {ru: "Выведите имя и фамилию сотрудников (employees)", gb: "Give me the first and last names of every employee"},
    4,
    { tables: [tab.employees], topic: "select" },
  ],
  [
    "SELECT name FROM media_types;",
    {ru: "Покажите все название аудиотипов звука (media type)", gb: "Give me the names of every media type"},
    5,
    { tables: [tab.media_types], topic: "select" },
  ],
  [
    "SELECT * FROM employees ORDER BY hire_date DESC;",
    {ru: "Покажите список сотрудников (employees) по дате найма в порядке убывания", gb: "Give me a list of every employee by hire date in descending order"},
    6,
    { tables: [tab.employees], topic: "order by" },
  ],
  [
    "SELECT hire_date, first_name, last_name FROM employees WHERE hire_date < '2011-02-15';",
    {ru: "«Выведите дату найма, имя и фамилию всех сотрудников, принятых на работу до 15 февраля 2011 года", gb: "Give me the hire date, first name, and last name of all employees hired before February 15, 2011"},
    7,
    { tables: [tab.employees], topic: "where" },
  ],
  [
    "SELECT * FROM employees WHERE last_name LIKE 'A%';",
    {ru: "Покажите список сотрудников (employees), чье имя начинается с \"A\"", gb: 'Give me a list of all employees whose name begins with "A"'},
    8,
    { tables: [tab.employees], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_state = 'WA' AND billing_city = 'Redmond';",
    {ru: "Покажите список всех счетов из Редмонда (Redmond), штат Вашингтон (WA)", gb: "Give me a list of all invoices from Redmond, WA"},
    9,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_country = 'Germany' AND billing_city = 'Berlin';",
    {ru: "Покажите список всех счетов из Берлина (Berlin), Германия (Germany)", gb: "Give me a list of all invoices from Berlin, Germany"},
    10,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_country = 'Canada';",
    {ru: "Покажите список всех счетов (invoices) из Канады (Canada)", gb: "Give me a list of all invoices from Canada"},
    11,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_country = 'Canada' AND billing_state = 'AB';",
    {ru: "Покажите список всех счетов из Альберты (AB), Канада (Canada)", gb: "Give me a list of all invoices from Alberta (AB), Canada"},
    12,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_country = 'Canada' AND billing_state = 'AB' AND billing_city = 'Edmonton';",
    {ru: "Покажите список всех счетов из г. Эдмонтона (Edmonton), шт. Альберта (AB), Канада (Canada)", gb: "Give me a list of all invoices from Edmonton, Alberta (AB), Canada"},
    13,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT billing_address FROM invoices WHERE billing_state = 'WA' AND billing_city = 'Redmond';",
    {ru: "Покажите адреса для выставления (billing addresses) счетов из каждого счета в г.Редмонде (Redmond), шт. Вашингтон (WA)", gb: "Give me the billing addresses from every invoice from Redmond, WA"},
    14,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_state = 'NV' AND billing_city = 'Reno' AND total > 5;",
    {ru: "Покажите список всех счетов на сумму более $5,00 из г. Reno, шт. NV", gb: "Give me a list of all invoices for more than $5.00 from Reno, NV"},
    15,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM tracks WHERE composer IS NULL;",
   {ru: "Покажите список каждого трека без композитора (composer)", gb:  "Give me a list of every track without a composer"},
    16,
    { tables: [tab.tracks], topic: "where" },
  ],
  [
    "SELECT * FROM customers WHERE company IS NULL;",
    {ru: "Выведите список каждого клиента (customer), не связанного с компанией (company)", gb: "Give me a list of every customer not associated with a company"},
    17,
    { tables: [tab.customers], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_state = 'WA' AND billing_city = 'Redmond' ORDER BY total ASC;",
    {ru: "Дайте мне список всех счетов из г. Редмонда, шт. Вашингтон, отсортированных по возрастанию их общего количества (total)", gb: "Give me a list of all invoices from Redmond, WA sorted from low-to-high by total"},
    18,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_state = 'WA' AND billing_city = 'Redmond' ORDER BY total DESC;",
    {ru: "Покажите список всех счетов из г. Редмонда, шт. Вашингтон, отсортированных по убыванию их общего количества (total)", gb: "Give me a list of all invoices from Redmond, WA sorted from high-to-low by total"},
    19,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_country = 'Germany' ORDER BY total DESC;",
    {ru: "Выведите список всех счетов (invoices) из Германии (Germany), отсортированных по убыванию суммы счета (total)", gb: "Give me a list of all invoices from Germany sorted from high-to-low by total"},
    20,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_country = 'Germany' ORDER BY total DESC LIMIT 10;",
    {ru: "Выведите список список 10 самых дорогих счетов (invoices) из Германии (Germany)", gb: "Give me a list of the 10 most expensive invoices from Germany"},
    21,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_state = 'MA' AND billing_city = 'Boston' ORDER BY total DESC LIMIT 10;",
   {ru: "Выведите список 10 самых дорогих счетов из Бостона (Boston), шт. Массачусетс (MA)", gb:  "Give me a list of the 10 most expensive invoices from Boston, MA"},
    22,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_state = 'MA' AND billing_city = 'Boston' ORDER BY total ASC LIMIT 10;",
    {ru: "Покажите список 10 наименее дорогих счетов из Бостона (Boston), Массачусетс (MA)", gb: "Give me a list of the 10 least expensive invoices from Boston, MA"},
    23,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT billing_address FROM invoices WHERE billing_state = 'CA' AND billing_city = 'Cupertino' ORDER BY total DESC LIMIT 3;",
    {ru: "Выведите адреса улиц 3 самых дорогих счетов (invoices) из г. Купертино (Cupertino), Калифорния (CA)", gb: "Give me the street addresses of the 3 most expensive invoices from Cupertino, CA"},
    24,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT * FROM invoices WHERE billing_state = 'CA' AND (billing_city = 'Mountain View' OR billing_city = 'Cupertino');",
    {ru: "Покажите список всех счетов из г. Купертино (Cupertino), шт. Калифорния или Маунтин-Вью (Mountain View), шт. Калифорния (CA)", gb: "Give me a list of all invoices from either Cupertino, CA or Mountain View, CA"},
    25,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT count(*) FROM invoices WHERE billing_city = 'Santiago';",
    {ru: "Найти количество счетов, отправленных в г. Сантьяго (Santiago)", gb: 'Find the number of invoices sent to the city of "Santiago"'},
    26,
    { tables: [tab.invoices], topic: "where" },
  ],
  [
    "SELECT country, COUNT(*) FROM customers GROUP BY country;",
    {ru: "Покажите количество клиентов (customers) по странам (country)", gb: "Give me a count of the number of customers by country"},
    27,
    { tables: [tab.customers], topic: "group by" },
  ],
  [
    "SELECT unit_price, COUNT(*) FROM tracks GROUP BY unit_price;",
    {ru: "Подсчитайте количество треков по схожей цене за один трек (unit price)", gb: "Give me a count of the number of tracks by unit price"},
    28,
    { tables: [tab.tracks], topic: "group by" },
  ],
  [
    "SELECT name FROM artists WHERE name LIKE '%smith%';",
    {ru: "Покажите список всех имен артистов, имя которых содержит «smith».", gb: 'Give me a list of all names of artists whose name contains "smith".'},
    29,
    { tables: [tab.artists], topic: "where" },
  ],
  [
    "SELECT name FROM artists WHERE name LIKE '%smith';",
    {ru: "Покажите список имен артистов, чье имя оканчивается на «smith».", gb: 'Give me a list of names of artists whose name ends with "smith".'},
    30,
    { tables: [tab.artists], topic: "where" },
  ],
  [
    "SELECT city, COUNT(*) FROM employees GROUP BY city;",
    {ru: "Подскажите количество работников (employees) по городам", gb: "Give me a count of the number of employees by city"},
    31,
    { tables: [tab.employees], topic: "group by" },
  ],
  [
    "SELECT country, COUNT(*) FROM customers GROUP BY country ORDER BY COUNT(*) DESC LIMIT 3",
    {ru: "Покажите топ 3-х стран по количеству клиентов (customers) в порядке убывания", gb: "Give me a list of the top 3 countries by number of customers in descending order"},
    32,
    { tables: [tab.customers], topic: "group by" },
  ],
  [
    "SELECT billing_city, COUNT(*) FROM invoices GROUP BY billing_city ORDER BY COUNT(*) DESC LIMIT 5",
    {ru: "Покажите топ 5 городов по количеству счетов (billing_city) в порядке убывания", gb: "Give me a list of the top 5 cities by number of invoices in descending order"},
    33,
    { tables: [tab.invoices], topic: "group by" },
  ],
  [
    "SELECT ar.name, al.title FROM artists AS ar JOIN albums AS al ON al.artist_id = ar.id;",
    {ru: "Перечислите все имена артистов вместе с названиями их альбомов", gb: "List all artist names alongside the titles of their albums"},
    34,
    { tables: [tab.artists, tab.albums], topic: "join" },
  ],
  [
    "SELECT tr.name, al.title FROM albums AS al JOIN tracks AS tr ON tr.album_id = al.id;",
    {ru: "Перечислите все названия альбомов вместе с названиями треков", gb: "List all album names along with their track titles"},
    35,
    { tables: [tab.albums, tab.tracks], topic: "join" },
  ],
  [
    "SELECT ar.name, al.title FROM artists AS ar JOIN albums AS al ON al.artist_id = ar.id ORDER BY ar.name;",
    {ru: "Перечислите все имена исполнителей (artists) вместе с названиями их альбомов в алфавитном порядке по имени исполнителя", gb: "List all artist names alongside the titles of their albums, in alphabetical order by artist name"},
    36,
    { tables: [tab.albums, tab.artists], topic: "join" },
  ],
  [
    "SELECT cs.first_name, cs.last_name, inv.total FROM customers AS cs JOIN invoices AS inv ON cs.id = inv.customer_id ORDER BY inv.total DESC;",
    {ru: "Перечислите имена и фамилии всех клиентов рядом с итогами в их счетах, упорядоченные по итоговым значениям, в порядке убывания", gb: "List all customers' first and last names next to the totals on their invoices, ordered by total, high to low"},
    37,
    { tables: [tab.customers, tab.invoices], topic: "join" },
  ],
  [
    "SELECT * FROM customers AS cs JOIN invoices AS inv ON cs.id = inv.customer_id ORDER BY inv.total DESC LIMIT 1;",
    {ru: "Дайте мне клиента (и его счет (invoice) с самой высокой суммой счета", gb: "Give me the customer (and their invoice) with the highest invoice total"},
    38,
    { tables: [tab.customers, tab.invoices], topic: "join" },
  ],
  [
    "SELECT * FROM albums AS al JOIN artists AS ar ON ar.id = al.artist_id WHERE ar.name = 'Aerosmith';",
    {ru: "Покажите список альбомов Aerosmith", gb: "Give me a list of every Aerosmith album"},
    39,
    { tables: [tab.albums, tab.artists], topic: "join" },
  ],
  [
    "SELECT * FROM albums AS al JOIN artists AS ar ON ar.id = al.artist_id WHERE ar.name = 'Iron Maiden';",
    {ru: "Покажите список альбомов Iron Maiden", gb: "Give me a list of every Iron Maiden album"},
    40,
    { tables: [tab.albums, tab.artists], topic: "join" },
  ],
  [
    "SELECT * FROM albums AS al JOIN tracks AS tr ON tr.album_id = al.id WHERE tr.name = 'Midnight';",
    {ru: "Покажите список альбомов, которые содержат песню \"Midnight\"", gb: 'Give me a list of albums that contains a song called "Midnight"'},
    41,
    { tables: [tab.albums, tab.tracks], topic: "join" },
  ],
  [
    "SELECT * FROM artists AS ar JOIN albums AS al ON ar.id = al.artist_id JOIN tracks AS tr ON tr.album_id = al.id WHERE tr.name = 'Midnight';",
    {ru: "Покажите список всех артистов, которые исполнили песню \"Midnight\"", gb: 'Give me a list of every artist who has performed the song "Midnight"'},
    42,
    { tables: [tab.artists, tab.albums, tab.tracks], topic: "join" },
  ],
  [
    "SELECT COUNT(*) FROM albums AS al JOIN artists AS ar ON ar.id = al.artist_id WHERE ar.name = 'Iron Maiden';",
    {ru: "Посчитайте количество альбомов Iron Maiden", gb: "Give me a count of the number of albums by Iron Maiden"},
    43,
    { tables: [tab.albums, tab.artists], topic: "join" },
  ],
  [
    "SELECT ar.name, COUNT(*) FROM artists AS ar JOIN albums AS al ON ar.id = al.artist_id GROUP BY ar.id",
    {ru: "Перечислите всех исполнителей количество альбомов у каждого", gb:"List all artists and the number of albums they each have" },
    44,
    { tables: [tab.artists, tab.albums], topic: "join" },
  ],
  [
    "SELECT a.title, COUNT(*) FROM albums AS a JOIN tracks AS t ON (t.album_id = a.id) GROUP BY a.id",
    {ru: "Перечислите все альбомы и количество треков в каждом альбоме", gb: "List all albums next to the number of tracks they each have"},
    45,
    { tables: [tab.albums, tab.tracks], topic: "join" },
  ],
  [
    "SELECT ar.*, COUNT(*) AS count FROM artists AS ar JOIN albums AS al ON ar.id = al.artist_id GROUP BY ar.id ORDER BY count DESC LIMIT 1;",
    {ru: "Найти исполнителя с наибольшим количеством альбомов", gb: "Find the artist with the most albums"},
    46,
    { tables: [tab.artists, tab.albums], topic: "join" },
  ],
  [
    "SELECT al.*, COUNT(*) AS count FROM tracks AS tr JOIN albums AS al ON tr.album_id = al.id GROUP BY al.id ORDER BY count DESC LIMIT 1;",
    {ru: "Найти альбом с наибольшим количеством треков", gb: "Find the album with the most tracks"},
    47,
    { tables: [tab.tracks, tab.albums], topic: "join" },
  ],
  [
    "SELECT cs.first_name, cs.last_name, SUM(inv.total) AS sum FROM customers AS cs JOIN invoices AS inv ON cs.id = inv.customer_id GROUP BY cs.id ORDER BY sum DESC LIMIT 5;",
    {ru: "Перечислите имена пяти крупнейших клиентов на основе сумм их счетов", gb: "List the names of the top five customers based on the sums of their invoice totals"},
    48,
    { tables: [tab.customers, tab.invoices], topic: "join" },
  ],
  [
    "SELECT * FROM artists ORDER BY name ASC;",
    {ru: "Покажите список всех исполнителей (artists), отсортированных в алфавитном порядке по имени", gb: "Give me a list of all artists sorted alphabetically by first name"},
    49,
    { tables: [tab.artists], topic: "order by" },
  ],
  [
    "SELECT al.*, COUNT(*) count FROM albums al JOIN tracks t ON (t.album_id = al.id) GROUP BY al.id ORDER BY count DESC",
    {ru: "Перечислите все альбомы имеющие колличество дорожек, в порядке убывания", gb: "List all albums next to the number of tracks they each have in descending order"},
    50,
    { tables: [tab.albums, tab.tracks], topic: "join" },
  ],
  [
    "SELECT ar.*, COUNT(*) AS count FROM artists AS ar JOIN albums AS al ON ar.id = al.artist_id GROUP BY ar.id ORDER BY count DESC, ar.name;",
    {ru: "Перечислите всех исполнителей и количество альбомов в каждом из них в порядке убывания, а затем, в алфавитном порядке, по имени исполнителя", gb: "List all artists and the number of albums they each have in descending order and then by artist name in ascending order"},
    51,
    { tables: [tab.artists, tab.albums], topic: "join" },
  ],
  [
    "SELECT first_name, last_name, hire_date, RANK() OVER (ORDER BY hire_date) as hire_num FROM employees ORDER BY hire_date;",
    {ru: "Выведите имена, фамилии и даты найма всех сотрудников в порядке их найма (hire_date), а также колонку hire_num, которая показывает, каким по порядку был нанят сотрудник", gb: "List first and last names, and hire dates of all employees ordered by hire date, and also hire_num - number of employee in the company (1 for first employee, 2 for second employee etc)"},
    52,
    { tables: [tab.employees], topic: "window functions" },
  ],
  [
    "SELECT first_name, last_name, hire_date, LEAD(hire_date, 1) OVER (ORDER BY hire_date) AS next_hire_date FROM employees;",
    {ru: "Выведите имена, фамилии, и даты найма всех сотрудников в порядке их найма (hire_date), а также колонку next_hire_date, которая показывает, когда был нанят следующий (по времени найма) сотрудник", gb: "List first and last names, and hire dates of all employees ordered by hire date, and also next_hire_date - hire date of the next employee"},
    53,
    { tables: [tab.employees], topic: "window functions" },
  ],
  [
    "SELECT *, DENSE_RANK() OVER (PARTITION BY billing_city ORDER BY total DESC) as rank_in_city FROM invoices ORDER BY total DESC LIMIT 20;",
    {ru: "Выведите топ-20 счетов в порядке убывания размера счета (total), добавив колонку rank_in_city, в которой укажите на каком месте по \"total\" каждый счет находится среди всех счетов из того же города", gb: "List top 20 invoices, with additional column rank_in_city, which shows the rank of the invoice among all the invoices from the same city by \"total\" column"},
    54,
    { tables: [tab.invoices], topic: "window functions" },
  ],
  [
    "SELECT num_albums, COUNT(*) AS num_artists FROM (SELECT COUNT(*) AS num_albums FROM albums GROUP BY artist_id) AS num_albums GROUP BY num_albums;",
    {ru: "Сгруппируйте артистов по количеству альбомов: выведите колонки num_albums (количество альбомов) и num_artists (сколько артистов написали именно столько альбомов)", gb: "Group artists by number of albums: display columns num_albums (number of albums) and num_artists (how many artists wrote this many albums)"},
    55,
    { tables: [tab.artists, tab.albums], topic: "group by" },
  ],
  [
    "SELECT genres.name AS genre, tracks.name AS track, albums.title AS album, COUNT(*) OVER (PARTITION BY tracks.album_id) AS tracks_in_album FROM tracks JOIN (SELECT * FROM genres WHERE name = 'Bossa Nova') AS genres ON tracks.genre_id = genres.id JOIN albums ON tracks.album_id = albums.id ORDER BY album, track;",
    {ru: "Для треков жанра Bossa Nova, выведите название жанра как genre, название трека как track, название альбома как album, и общее количество треков в альбоме, в который входит трек, как tracks_in_album. Отсортируйте по названию альбома, затем по названию трека", gb: "For all tracks of genre Bossa Nova list genre (genre name), track (track name), album (album title), and tracks_in_album (how many tracks are in the same album as current track). Sort by album, then track."},
    56,
    { tables: [tab.tracks, tab.albums, tab.genres], topic: "window functions" },
  ],
];
