BEGIN;

INSERT INTO "users" ("name", "email", "password") 

VALUES 
    ("mehdi", "mehdi@gmail.com", "mehdi1234"),
    ("toto", "toto@gmail.com", "toto1234"),
    ("loulou", "loulou@gmail.com", "loulou12"),
    ("admin", "admin@gmail.com", "admin1234");


COMMIT;