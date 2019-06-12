
SELECT * FROM photo.info WHERE id = 17579;
SELECT * FROM photo.info WHERE id = 99990;
SELECT * FROM photo.info WHERE id = 99992;
SELECT * FROM photo.info WHERE id = 700000;
SELECT * FROM photo.info WHERE id = 650000;
SELECT * FROM photo.info WHERE id = 345990;

SELECT * FROM restaurant.info WHERE id = 17579;
SELECT * FROM restaurant.info WHERE id = 99990;
SELECT * FROM restaurant.info WHERE id = 99992;
SELECT * FROM restaurant.info WHERE id = 70000;
SELECT * FROM restaurant.info WHERE id = 65000;
SELECT * FROM restaurant.info WHERE id = 34599;



UPDATE test.info SET dresscode = 'official', paymentoptions = '1101'  WHERE id = 99008;
UPDATE test.info SET dresscode = 'casual', paymentoptions = '1111'  WHERE id = 432008;

UPDATE test.info SET privatepartycontact = 'eric schuman: (808)-958-8111', paymentoptions = '1101'  WHERE id = 70008;
UPDATE test.photo SET unrelated_report = 3 , inappropriate_report=1, dislike=2 WHERE id = 99938;
UPDATE test.photo SET unrelated_report = 3 , inappropriate_report=1, dislike=2 WHERE id = 980;



DELETE FROM test.photo WHERE id = 99938 IF EXISTS;
DELETE FROM test.info WHERE id = 99938 IF EXISTS;

INSERT INTO test.info
    (id,address,name,crossStreet,neighborhood,cuisines,diningStyle,dressCode,paymentOptions,executiveChef,privatePartyContact,additional,website,phoneNumber)
VALUES
    (108001 ,'Deleniti rerum minima dicta.' ,'985 Isaiah Locks' ,'Reymundo Roads' ,'Lamar Shore' ,'Casual Dining' ,'Casual Dining' ,' Torrey Stoltenberg' ,'Nolan Views' ,'Prohaskachester' ,'1011' ,' 579-926-5032' ,'Breanna Nader: 858-205-5056' ,'http://kaelyn.biz');


INSERT INTO test.info
    (id,address,name,crossStreet,neighborhood,cuisines,diningStyle,dressCode,paymentOptions,executiveChef,privatePartyContact,additional,website,phoneNumber)
VALUES
    (108001 ,'Deleniti rerum minima dicta.' ,'985 Isaiah Locks' ,'Reymundo Roads' ,'Lamar Shore' ,'Casual Dining' ,'Casual Dining' ,' Torrey Stoltenberg' ,'Nolan Views' ,'Prohaskachester' ,'1011' ,' 579-926-5032' ,'Breanna Nader: 858-205-5056' ,'http://kaelyn.biz');



INSERT INTO test.photo
    (id,dateposted,dislike,inappropriate_report,photo,resid,unrelated_report,usr)
VALUES
   (109082,'11/15/2019',0, 0, 'asyncphotos/36.jpg', 4049,0,'umar423');




