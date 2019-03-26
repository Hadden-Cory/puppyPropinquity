-- -----------------------------------------------------
-- Table rating
-- -----------------------------------------------------
CREATE TABLE rating (
  rating_id SERIAL PRIMARY KEY NOT NULL,
  rating_owner_rating INT NULL,
  rating_helper_rating INT NULL
  );

-- -----------------------------------------------------
-- Table person
-- -----------------------------------------------------
CREATE TABLE person (
  person_id SERIAL PRIMARY KEY NOT NULL,
  person_name VARCHAR(45) NULL,
  person_password_hash VARCHAR(200) NULL,
  person_email VARCHAR(75) NULL,
  rating_rating_id INT NOT NULL REFERENCES rating(rating_id)
  );



-- -----------------------------------------------------
-- Table puppy
-- -----------------------------------------------------
CREATE TABLE puppy (
  puppy_id SERIAL PRIMARY KEY NOT NULL,
  puppy_name VARCHAR(45) NULL,
  puppy_type VARCHAR(45) NULL,
  puppy_description TEXT NULL,
  person_person_id INT NOT NULL REFERENCES person(person_id)
);


-- -----------------------------------------------------
-- Table offer
-- -----------------------------------------------------
CREATE TABLE offer (
  offer_id SERIAL PRIMARY KEY NOT NULL,
  offer_comments TEXT NULL,
  person_person_id INT NOT NULL REFERENCES person(person_id)
);

-- -----------------------------------------------------
-- Table need
-- -----------------------------------------------------
CREATE TABLE need (
  needs_id SERIAL PRIMARY KEY NOT NULL,
  need_description TEXT NULL,
  need_type VARCHAR(45) NULL,
  need_zip INT NULL,
  need_is_for_hire BOOLEAN NULL,
  need_is_reoccuring BOOLEAN NULL,
  puppy_puppy_id INT NOT NULL REFERENCES puppy(puppy_id),
  offer_offer_id INT NOT NULL REFERENCES offer(offer_id)
);


-- -----------------------------------------------------
-- Table duration
-- -----------------------------------------------------
CREATE TABLE duration (
  duration_id SERIAL PRIMARY KEY NOT NULL,
  duration_start_time TIME NULL,
  duration_start_date DATE NULL,
  duration_end_time TIME NULL,
  duration_end_date DATE NULL,
  need_needs_id INT NOT NULL REFERENCES need(needs_id)
);