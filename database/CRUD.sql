\timing
SELECT * FROM info WHERE id = 17579;
SELECT * FROM info WHERE id = 99990;
SELECT * FROM info WHERE id = 99992;
SELECT * FROM info WHERE id = 700000;
SELECT * FROM info WHERE id = 650000;
SELECT * FROM info WHERE id = 345990;

SELECT * FROM photo WHERE resid = 17579;
SELECT * FROM photo WHERE resid = 99990;
SELECT * FROM photo WHERE resid = 999992;
SELECT * FROM photo WHERE resid = 970000;
SELECT * FROM photo WHERE resid = 965000;
SELECT * FROM photo WHERE resid = 934599;



UPDATE info SET dresscode = 'official', paymentoptions = '1101'  WHERE id = 9999008;
UPDATE info SET dresscode = 'casual', paymentoptions = '1111'  WHERE id = 99432008;

UPDATE info SET privatepartycontact = 'eric schuman: (808)-958-8111', paymentoptions = '1101'  WHERE id = 9970008;
UPDATE photo SET unrelated_report = 3 , inappropriate_report=1, dislike=2 WHERE resid = 9999938;
UPDATE photo SET unrelated_report = 3 , inappropriate_report=1, dislike=2 WHERE resid = 9999980;
UPDATE photo SET unrelated_report = 3 , inappropriate_report=1, dislike=2 WHERE id = 9999980;

UPDATE photo SET unrelated_report = 3 , inappropriate_report=1, dislike=2 WHERE id = 29940280;


DELETE FROM photo WHERE id = 9999938;
DELETE FROM info WHERE id = 99999938;

INSERT INTO info
    (id,address,name,crossStreet,neighborhood,cuisines,diningStyle,dressCode,paymentOptions,executiveChef,privatePartyContact,additional,website,phoneNumber)
VALUES
    (108001 ,'Deleniti rerum minima dicta.' ,'985 Isaiah Locks' ,'Reymundo Roads' ,'Lamar Shore' ,'Casual Dining' ,'Casual Dining' ,' Torrey Stoltenberg' ,'Nolan Views' ,'Prohaskachester' ,'1011' ,' 579-926-5032' ,'Breanna Nader: 858-205-5056' ,'http://kaelyn.biz');


INSERT INTO info
    (id,address,name,crossStreet,neighborhood,cuisines,diningStyle,dressCode,paymentOptions,executiveChef,privatePartyContact,additional,website,phoneNumber)
VALUES
    (108001 ,'Deleniti rerum minima dicta.' ,'985 Isaiah Locks' ,'Reymundo Roads' ,'Lamar Shore' ,'Casual Dining' ,'Casual Dining' ,' Torrey Stoltenberg' ,'Nolan Views' ,'Prohaskachester' ,'1011' ,' 579-926-5032' ,'Breanna Nader: 858-205-5056' ,'http://kaelyn.biz');



INSERT INTO photo
    (id,dateposted,dislike,inappropriate_report,photo,resid,unrelated_report,usr)
VALUES
   (99109082,'11/15/2019',0, 0, 'asyncphotos/36.jpg', 4049,0,'umar423');




INSERT INTO info
    (id,address,name,crossStreet,neighborhood,cuisines,diningStyle,dressCode,paymentOptions,executiveChef,privatePartyContact,additional,website,phoneNumber)
VALUES
    (9999108002 ,'Deleniti rerum minima dicta.' ,'985 Isaiah Locks' ,'Reymundo Roads' ,'Lamar Shore' ,'Casual Dining' ,'Casual Dining' ,' Torrey Stoltenberg' ,'Nolan Views' ,'Prohaskachester' ,'1011' ,' 579-926-5032' ,'Breanna Nader: 858-205-5056' ,'http://kaelyn.biz');
