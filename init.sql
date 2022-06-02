INSERT INTO clients (name, email) VALUES ('Amanzhan', 'amanzhan.kakim@nu.edu.kz');
INSERT INTO clients (name, email) VALUES ('Kakim', 'amanzhan@nu.edu.kz');
INSERT INTO clients (name, email) VALUES ('Oraz', 'oraz@nu.edu.kz');

INSERT INTO products (name, price) VALUES ('item1', 100);
INSERT INTO products (name, price) VALUES ('item2', 200);
INSERT INTO products (name, price) VALUES ('item3', 300);
INSERT INTO products (name, price) VALUES ('item4', 400);
INSERT INTO products (name, price) VALUES ('item5', 500);
INSERT INTO products (name, price) VALUES ('item6', 600);
INSERT INTO products (name, price) VALUES ('item7', 700);
INSERT INTO products (name, price) VALUES ('item8', 800);
INSERT INTO products (name, price) VALUES ('item9', 900);
INSERT INTO products (name, price) VALUES ('item10', 1000);

INSERT INTO orders (date, total_price, client_id) VALUES (now(), 2300, 1);
INSERT INTO orders (date, total_price, client_id) VALUES (now(), 1600, 1);
INSERT INTO orders (date, total_price, client_id) VALUES (now(), 2700, 1); 

INSERT INTO order_item (quantity, order_id, product_id) VALUES (2, 1, 5);
INSERT INTO order_item (quantity, order_id, product_id) VALUES (1, 1, 4);
INSERT INTO order_item (quantity, order_id, product_id) VALUES (3, 1, 3);
INSERT INTO order_item (quantity, order_id, product_id) VALUES (2, 2, 1);
INSERT INTO order_item (quantity, order_id, product_id) VALUES (1, 2, 4);
INSERT INTO order_item (quantity, order_id, product_id) VALUES (1, 2, 2);
INSERT INTO order_item (quantity, order_id, product_id) VALUES (1, 2, 8);
INSERT INTO order_item (quantity, order_id, product_id) VALUES (1, 3, 5);
INSERT INTO order_item (quantity, order_id, product_id) VALUES (1, 3, 6);
INSERT INTO order_item (quantity, order_id, product_id) VALUES (2, 3, 8);

INSERT INTO orders (date, total_price, client_id) VALUES (now(), 2300, 2);
INSERT INTO orders (date, total_price, client_id) VALUES (now(), 1600, 2);
INSERT INTO orders (date, total_price, client_id) VALUES (now(), 2700, 2); 

INSERT INTO order_item (quantity, order_id, product_id) VALUES (2, 4, 4);
INSERT INTO order_item (quantity, order_id, product_id) VALUES (1, 4, 2);
INSERT INTO order_item (quantity, order_id, product_id) VALUES (3, 4, 5);
INSERT INTO order_item (quantity, order_id, product_id) VALUES (2, 5, 4);
INSERT INTO order_item (quantity, order_id, product_id) VALUES (1, 5, 7);
INSERT INTO order_item (quantity, order_id, product_id) VALUES (1, 5, 2);
INSERT INTO order_item (quantity, order_id, product_id) VALUES (1, 5, 1);
INSERT INTO order_item (quantity, order_id, product_id) VALUES (1, 6, 7);
INSERT INTO order_item (quantity, order_id, product_id) VALUES (1, 6, 8);