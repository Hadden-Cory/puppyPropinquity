INSERT INTO
person(person_name, person_password_hash, person_email, rating_rating_id)
VALUES
('Liz Scott',	'F25739EDA259266008C89B48CC87923885CF3858654F9614A78B2F315086638478CB57B2235378765AD53FCE26394528F3272A54AEF286D9B6075471AFDB0AD2',	'ilovelucy@Cmail.com',	'1'),
('Charlie Brown',	'CF6F09BB31D864E66280B45EF8B469AEDAAF6E9B41D276EDCF2488F4E18FF2EF663338A8955D0DC8FDDDE28E4E516FC7BBF109A7A76722A191DF00A774905ADE',	'roundheadedkid@Cmail.com',	'2'),
('Roger Radcliff',	'AFBD4F1FEE3387351341725C057E22B32E7FCD0EE846A4BC6ADCDE4F75DC0B9B87D3684C9739E713DE6151861E02ADBF5325AE0405FE91F87233EF9DEFE8A80C',	'cuelladevil@Cmail.com',	'3'),
('Russel',	'C7B0FC4F058F1BBB8FAD9C48662064933E0BDE2D7E53C47445C675FDEFE406695F316079C791FFCFCCEE3307C2E1B5D1EF69C9C82CF811D06C5E2056F7932229',	'kevinsagirl@Cmail.com',	'4');

INSERT INTO
rating (rating_owner_rating, rating_helper_rating)
VALUES
('5',	'5'),
('5',	'5'),
('5',	'3'),
('4.2',	'3');

INSERT INTO
puppy (puppy_name, puppy_type, puppy_description, person_person_id)
VALUES
('BlendTec', 'German Shepherd',	'BlendTec is really nice… Unless you are a bad guy, than he will eat you.', '1'),
('Silver Bullet', 'German Shepherd', 'Bullet is a little protective, but if she see me accept you she will be very well behaved.', '1'),
('Snoopy',	'Beagul (I think)',	'Snoopy is mans best friend… sometimes.', '2'),
('Pongo', 'Dalmatian', 'All offer must also include our dog Perdita', '3'),
('Perdita',	'Dalmatian', 'All offer must also include our dog Pongo', '3'),
('Doug', 'He is Just a Normal Dog', 'Doug is a good boy, and he can talk.', '4');

INSERT INTO
need (need_description, need_type, need_is_for_hire, need_is_reoccuring, puppy_puppy_id)
VALUES
('BlendTec and Silver bullet need a someone to feed and run them while we are gone on vacation', 'Babysitting', 'TRUE', 'FALSE', '1'),
('BlendTec and Silver bullet need a someone to feed and run them while we are gone on vacation', 'Babysitting', 'TRUE', 'FALSE', '2'),
('TENNIS PARTNER: Snoopy  seeks a "Quality Partner" to help him practice his backhand. Must be cute and a good dancer. (I am so embarrased now)', 'Playdate', 'TRUE', 'TRUE', '3'),
('STIMULATING INTELLECTUAL CO-AUTHOR: Snoopy seeks a "Highly Intellectual" co-author to help him complete his masterpeice "A Love Beyond Collars" Volumn 8 before Wimbledon begins in July. Author must hate cats.', 'Playdate', 'TRUE', 'TRUE', '3'),
('We need someone to walk Pongo and Perdita together for about 30 minutes on a regular basis. Life is just a little busy for us. Also, would anyone like a puppy?', 'Walking', 'TRUE', 'TRUE', '4'),
('We need someone to walk Pongo and Perdita together for about 30 minutes on a regular basis. Life is just a little busy for us. Also, would anyone like a puppy?', 'Walking', 'TRUE', 'TRUE', '5'),
('Doug needs someone to take him tracking. He like snipes.', 'Playdate', 'FALSE', 'FALSE', '6');

INSERT INTO
offer (offer_comments, need_need_id, person_person_id)
VALUES 
('I want to play tennis with a dog.', '3', '4'),
('I would love to break into the writing scene. Honestly music has been a bit of a drag recently. Time for something new. And I hate cats.', '4', '3'),
('I could take care of them for you. I like taking care of nature.', '1', '4'),
('I could take care of them for you. I like taking care of nature.', '2', '4');