// -- Create table for photo
CREATE TABLE test.photo (
    id int,
    resid int,
    usr text,
    photo text,
    datePosted text,
    unrelated_report int,
    inappropriate_report int,
    dislike int,
    PRIMARY KEY (id)
);


COPY test.photo (id, resid, usr, photo, datePosted, unrelated_report, inappropriate_report, dislike)
FROM  '/Volumes/NO NAME/photoTest.csv'
WITH DELIMITER=',' AND HEADER=TRUE ;

// -- Create table for info

CREATE TABLE test.info (
    id int,
    address text,
    name text,
    crossStreet text,
    neighborhood text,
    cuisines text,
    diningStyle text,
    dressCode text,
    paymentOptions text,
    executiveChef text,
    privatePartyContact text,
    additional text,
    website text,
    phoneNumber text, 
    PRIMARY KEY (id)
);


COPY test.info (
    id,
    address,
    name,
    crossStreet,
    neighborhood,
    cuisines,
    diningStyle,
    dressCode,
    paymentOptions,
    executiveChef,
    privatePartyContact,
    additional,
    website,
    phoneNumber
)
FROM  '/Volumes/NO NAME/info1.csv'
WITH DELIMITER=',' AND HEADER=TRUE ;
