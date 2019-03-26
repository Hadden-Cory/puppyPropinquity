ALTER TABLE need
RENAME COLUMN needs_id TO need_id;

ALTER TABLE offer  
ADD COLUMN need_need_id INT NOT NULL REFERENCES need(need_id);

ALTER TABLE need
DROP COLUMN offer_offer_id;

ALTER TABLE rating
ALTER COLUMN  rating_owner_rating TYPE FLOAT(1),
ALTER COLUMN  rating_helper_rating TYPE FLOAT(1);

ALTER TABLE need
DROP COLUMN need_zip;
