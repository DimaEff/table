CREATE TABLE deliveries (
    id serial PRIMARY KEY,
    name VARCHAR ( 50 ) NOT NULL,
    count INT NOT NULL,
    order_date TIMESTAMP NOT NULL
    );

INSERT INTO deliveries(name, count, order_date)
SELECT
    'item_' || seq AS name,
    RANDOM() * seq AS count,
    timestamp '2014-01-10 20:00:00' + random() * (
            timestamp '2022-01-01 00:00:00' - timestamp '2022-12-31 23:59:00'
        ) AS order_date
FROM GENERATE_SERIES(1, 100) seq;