# Free Seats

> Project description

## Related Projects

  - https://github.com/freeseats/exzerone-search-bar
  - https://github.com/freeseats/Menu-Related-SideBar
  - https://github.com/freeseats/slhodak-fec
  - https://github.com/freeseats/wfong-service-reservations

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> edit database/config.js file by adding your mysql password

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

> edit database/config.js file by adding your mysql password
to seed database run the following
```
npm run seed
```

to create bundle.js and start the server run the following
```
npm run react-dev
npm start
```



### API Routes ### 
| TYPE | ROUTE | DESCRIPTION |
|------|------|--------|
| GET |  /API/info/:id   | Returns JSON and 200 response
| GET |   /API/photos/:id  | Returns JSON and 200 response
| POST |  /API/info/:id | Returns JSON and 201 response
| POST | /API/photos/:id| Returns JSON and 201 response
| UPDATE |/API/info/:id | Returns JSON and 201 response
| UPDATE |/API/photos/:id | Returns JSON and 201 response
|  DELETE |/API/info/:id | Remove entry and return 204 response
|  DELETE | /API/photos/:id| Remove entry and return 204 response





**GET info**
Obtain information about the restaurants
* **/API/info/:id**
* **Method:**
  
  `GET`
*  **URL Params**
  `id` is padded by 0's and it has a total of 9-12 digits 
* **Success Response:**
  * **Code:** 200 <br />
    **Content:** 
    ```{
        id: '000000000007',
        address: '56119 Ziemann Loop',
        crossStreet: 'Greenfelder Valleys',
        neighborhood: 'Pamelashire',
        cuisines: 'Hertha Stravenue',
        diningStyle: 'Tie and Suit',
        dressCode: 'Tie and Suit',
        paymentOptions: '',
        chef: 'Lonie Gutmann',
        catering: 'Qui libero quia in ipsum eveniet veritatis eos aut. Nam est et voluptatem iste ipsam est similique inventore. Fuga rem sint odit temporibus corporis. Deleniti est iusto sed reprehenderit dolores ad est necessitatibus unde. Et id blanditiis ex enim praesentium laudantium.\n \rEst quia odio sapiente ipsa qui pariatur vero dolorum. Consequuntur odio qui laudantium sequi sint eius dolores. Doloremque quae consequuntur ratione quia et cumque id aut.\n \rAut explicabo voluptatem maiores dicta. Explicabo aliquam soluta cupiditate fugit nulla magni velit. Quibusdam quia velit iure sunt iure illum autem quidem sed.',
        privatePartyContact: 'Lon Gleason: 240-367-5375',
        executiveChef: 'Zoey Bechtelar',
        additional: 'Aut deserunt cupiditate enim eum accusantium expedita.',
        website: 'http://rosemary.net',
        phoneNumber: '905-430-9905' 
        }
        ```

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "id invalid" }`

* **Sample Call:**

`$.get({
      url: 'http://localhost:3050/API/photos/000000001' ,
      dataType: 'json',
      success: allPhotos => { this.setState({ photos: allPhotos, isLoading: false }) },
      error: err => { console.log('Failed..', err) },
    });
    `

**GET info**
Obtain information about the restaurants

* **/API/info/:id**


* **Method:**
  
  `GET`

  
*  **URL Params**

  `id` is padded by 0's and it has a total of 9-12 digits 


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```{
        id: '000000000007',
        address: '56119 Ziemann Loop',
        crossStreet: 'Greenfelder Valleys',
        neighborhood: 'Pamelashire',
        cuisines: 'Hertha Stravenue',
        diningStyle: 'Tie and Suit',
        dressCode: 'Tie and Suit',
        paymentOptions: '',
        chef: 'Lonie Gutmann',
        catering: 'Qui libero quia in ipsum eveniet veritatis eos aut. Nam est et voluptatem iste ipsam est similique inventore. Fuga rem sint odit temporibus corporis. Deleniti est iusto sed reprehenderit dolores ad est necessitatibus unde. Et id blanditiis ex enim praesentium laudantium.\n \rEst quia odio sapiente ipsa qui pariatur vero dolorum. Consequuntur odio qui laudantium sequi sint eius dolores. Doloremque quae consequuntur ratione quia et cumque id aut.\n \rAut explicabo voluptatem maiores dicta. Explicabo aliquam soluta cupiditate fugit nulla magni velit. Quibusdam quia velit iure sunt iure illum autem quidem sed.',
        privatePartyContact: 'Lon Gleason: 240-367-5375',
        executiveChef: 'Zoey Bechtelar',
        additional: 'Aut deserunt cupiditate enim eum accusantium expedita.',
        website: 'http://rosemary.net',
        phoneNumber: '905-430-9905' 
        }
        ```

    
 
* **Error Response:**



  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "id invalid" }`

* **Sample Call:**

`$.get({
      url: 'http://localhost:3050/API/info/000000001' ,
      dataType: 'json',
      success: info => { this.setState({ info: info, isLoading: false }) },
      error: err => { console.log('Failed..', err) },
    });
    `

* **Notes:**

  TBD







**GET photo**
Obtain information about the restaurants
* **/API/photo/:id**
* **Method:**
  
  `GET`
*  **URL Params**
  `id` is padded by 0's and it has a total of 9-12 digits 
* **Success Response:**
  * **Code:** 200 <br />
    **Content:** 
   ``` [{
  id: '000000000009',
  photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/3.jpg',
  user: 'Sammy_Mueller0',
  date_posted: 2019 - 03 - 15T01: 22: 00.619Z,
  flagged: true
      }, {
        id: '000000000009',
        photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/3.jpg',
        user: 'Marcelo_Crona41',
        date_posted: 2018 - 09 - 15T00: 51: 50.321Z,
        flagged: true
      }, {
        id: '000000000009',
        photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/40.jpg',
        user: 'Karlee.Kirlin',
        date_posted: 2019 - 04 - 23T08: 24: 10.988Z,
        flagged: true
      }, {
        id: '000000000009',
        photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/22.jpg',
        user: 'Arvel.Skiles',
        date_posted: 2018 - 12 - 16T23: 56: 58.757Z,
        flagged: true
      }, {
        id: '000000000009',
        photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/35.jpg',
        user: 'Obie.Aufderhar80',
        date_posted: 2018 - 09 - 17T02: 28: 12.842Z,
        flagged: false
      }, {
        id: '000000000009',
        photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/35.jpg',
        user: 'Rolando_Hettinger',
        date_posted: 2018 - 06 - 26T15: 29: 04.753Z,
        flagged: true
      }, {
        id: '000000000009',
        photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/39.jpg',
        user: 'Maximillia.Zulauf94',
        date_posted: 2019 - 04 - 17T05: 11: 04.723Z,
        flagged: true
      }, {
        id: '000000000009',
        photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/21.jpg',
        user: 'Ansley.Parker69',
        date_posted: 2019 - 03 - 13T11: 09: 35.950Z,
        flagged: true
      }, {
        id: '000000000009',
        photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/7.jpg',
        user: 'Rosina_Bauch51',
        date_posted: 2018 - 09 - 06T12: 37: 40.112Z,
        flagged: true
      }
    ]
    ```

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "id invalid" }`

* **Sample Call:**

`$.get({
      url: 'http://localhost:3050/API/photos/000000001' ,
      dataType: 'json',
      success: allPhotos => { this.setState({ photos: allPhotos, isLoading: false }) },
      error: err => { console.log('Failed..', err) },
    });
    `

**GET info**
Obtain information about the restaurants

* **/API/info/:id**


* **Method:**
  
  `GET`

  
*  **URL Params**

  `id` is padded by 0's and it has a total of 9-12 digits 


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```{
      id: '000000000007',
      address: '56119 Ziemann Loop',
      crossStreet: 'Greenfelder Valleys',
      neighborhood: 'Pamelashire',
      cuisines: 'Hertha Stravenue',
      diningStyle: 'Tie and Suit',
      dressCode: 'Tie and Suit',
      paymentOptions: '',
      chef: 'Lonie Gutmann',
      catering: 'Qui libero quia in ipsum eveniet veritatis eos aut. Nam est et voluptatem iste ipsam est similique inventore. Fuga rem sint odit temporibus corporis. Deleniti est iusto sed reprehenderit dolores ad est necessitatibus unde. Et id blanditiis ex enim praesentium laudantium.\n \rEst quia odio sapiente ipsa qui pariatur vero dolorum. Consequuntur odio qui laudantium sequi sint eius dolores. Doloremque quae consequuntur ratione quia et cumque id aut.\n \rAut explicabo voluptatem maiores dicta. Explicabo aliquam soluta cupiditate fugit nulla magni velit. Quibusdam quia velit iure sunt iure illum autem quidem sed.',
      privatePartyContact: 'Lon Gleason: 240-367-5375',
      executiveChef: 'Zoey Bechtelar',
      additional: 'Aut deserunt cupiditate enim eum accusantium expedita.',
      website: 'http://rosemary.net',
      phoneNumber: '905-430-9905' }
    ```
    
 
* **Error Response:**



  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "id invalid" }`

* **Sample Call:**

`$.get({
      url: 'http://localhost:3050/API/photos/000000001' ,
      dataType: 'json',
      success: allPhotos => { this.setState({ photos: allPhotos, isLoading: false }) },
      error: err => { console.log('Failed..', err) },
    });
    `

* **Notes:**

  Plan to have the browser parse the photo information instead of the server to maximize process speed 
  
  
  


**POST info**
Post new restaurant(s)
* **/API/info/:id**
* **Method:**
  
  `POST`
*  **URL Params**
  `id` is padded by 0's and it has a total of 9-12 digits 
* **Success Response:**
  * **Code:** 201 <br />

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "data invalude" }`

* **Sample Call:**

  ```$.post({
          url: 'http://localhost:3050/API/photos/000000001' ,
          dataType: 'json',
          data:  {
            id: '000000000007',
            address: '56119 Ziemann Loop',
            crossStreet: 'Greenfelder Valleys',
            neighborhood: 'Pamelashire',
            cuisines: 'Hertha Stravenue',
            diningStyle: 'Tie and Suit',
            dressCode: 'Tie and Suit',
            paymentOptions: '',
            chef: 'Lonie Gutmann',
            catering: 'Qui libero quia in ipsum eveniet veritatis eos aut. Nam est et voluptatem iste ipsam est similique inventore. Fuga rem  sint odit temporibus corporis. Deleniti est iusto sed reprehenderit dolores ad est necessitatibus unde. Et id blanditiis ex enim praesentium laudantium.\n \rEst quia odio sapiente ipsa qui pariatur vero dolorum. Consequuntur odio qui laudantium sequi sint eius dolores. Doloremque quae consequuntur ratione quia et cumque id aut.\n \rAut explicabo voluptatem maiores dicta. Explicabo aliquam soluta cupiditate fugit nulla magni velit. Quibusdam quia velit iure sunt iure illum autem quidem sed.',
            privatePartyContact: 'Lon Gleason: 240-367-5375',
            executiveChef: 'Zoey Bechtelar',
            additional: 'Aut deserunt cupiditate enim eum accusantium expedita.',
            website: 'http://rosemary.net',
            phoneNumber: '905-430-9905' },
            success: allPhotos => { this.setState({ photos: allPhotos, isLoading: false }) },
            error: err => { console.log('Failed..', err) },
        });
    ```


**POST photo**
Obtain information about the restaurants
* **/API/photo/:id**
* **Method:**
  `POST`
*  **URL Params**
  `id` is padded by 0's and it has a total of 9-12 digits 
* **Success Response:**
  * **Code:** 201 <br />
    **Content:** 

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "data invalid" }`

* **Sample Call:**

```$.post({
      url: 'http://localhost:3050/API/photo/000000001' ,
      dataType: 'json',
      data: 
        [{
            id: '000000000009',
            photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/3.jpg',
            user: 'Sammy_Mueller0',
            date_posted: 2019-03-15T01:22:00.619Z,
            flagged: true }, {
            id: '000000000009',
            photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/3.jpg',
            user: 'Marcelo_Crona41',
            date_posted: 2018-09-15T00:51:50.321Z,
            flagged: true }, {
            id: '000000000009',
            photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/40.jpg',
            user: 'Karlee.Kirlin',
            date_posted: 2019-04-23T08:24:10.988Z,
            flagged: true }, {
            id: '000000000009',
            photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/22.jpg',
            user: 'Arvel.Skiles',
            date_posted: 2018-12-16T23:56:58.757Z,
            flagged: true }, {
            id: '000000000009',
            photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/35.jpg',
            user: 'Obie.Aufderhar80',
            date_posted: 2018-09-17T02:28:12.842Z,
            flagged: false }, {
            id: '000000000009',
            photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/35.jpg',
            user: 'Rolando_Hettinger',
            date_posted: 2018-06-26T15:29:04.753Z,
            flagged: true }, {
            id: '000000000009',
            photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/39.jpg',
            user: 'Maximillia.Zulauf94',
            date_posted: 2019-04-17T05:11:04.723Z,
            flagged: true }, {
            id: '000000000009',
            photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/21.jpg',
            user: 'Ansley.Parker69',
            date_posted: 2019-03-13T11:09:35.950Z,
            flagged: true }, {
            id: '000000000009',
            photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/7.jpg',
            user: 'Rosina_Bauch51',
            date_posted: 2018-09-06T12:37:40.112Z,
            flagged: true }
        ]
      success: info => { console.log('Successfully posted photo') },
      error: err => { console.log('Failed..', err) },
    });
```


* **Notes:**

  TBD 







**UPDATE info**
Update restaurant(s) info
* **/API/info/:id**
* **Method:**
  
  `UPDATE`
*  **URL Params**
  `id` is padded by 0's and it has a total of 9-12 digits 
* **Success Response:**
  * **Code:** 201 <br />

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "data invalude" }`

* **Sample Call:**

```$.update({
      url: 'http://localhost:3050/API/photos/000000001' ,
      dataType: 'json',
      data:  {
        id: '000000000007',
        address: '56119 Ziemann Loop',
        crossStreet: 'Greenfelder Valleys',
        neighborhood: 'Pamelashire',
        cuisines: 'Hertha Stravenue',
        diningStyle: 'Tie and Suit',
        dressCode: 'Tie and Suit',
        paymentOptions: '',
        chef: 'Lonie Gutmann',
        catering: 'Qui libero quia in ipsum eveniet veritatis eos aut. Nam est et voluptatem iste ipsam est similique inventore. Fuga rem sint odit temporibus corporis. Deleniti est iusto sed reprehenderit dolores ad est necessitatibus unde. Et id blanditiis ex enim praesentium laudantium.\n \rEst quia odio sapiente ipsa qui pariatur vero dolorum. Consequuntur odio qui laudantium sequi sint eius dolores. Doloremque quae consequuntur ratione quia et cumque id aut.\n \rAut explicabo voluptatem maiores dicta. Explicabo aliquam soluta cupiditate fugit nulla magni velit. Quibusdam quia velit iure sunt iure illum autem quidem sed.',
        privatePartyContact: 'Lon Gleason: 240-367-5375',
        executiveChef: 'Zoey Bechtelar',
        additional: 'Aut deserunt cupiditate enim eum accusantium expedita.',
        website: 'http://rosemary.net',
        phoneNumber: '905-430-9905' },
        success: allPhotos => { this.setState({ photos: allPhotos, isLoading: false }) },
        error: err => { console.log('Failed..', err) },
    });
```


* **Notes:**

  Simply overwrites the restaurant record 

**UPDATE photo**
Update photo of a particular restaurant
* **/API/photo/:id**
* **Method:**
  `UPDATE`
*  **URL Params**
  `id` is padded by 0's and it has a total of 9-12 digits 
* **Success Response:**
  * **Code:** 201 <br />
    **Content:** 

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "data invalid" }`




* **Sample Call:**

```$.update({
      url: 'http://localhost:3050/API/photo/000000001' ,
      dataType: 'json',
      data: 
        [{
            id: '000000000009',
            photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/3.jpg',
            user: 'Sammy_Mueller0',
            date_posted: 2019-03-15T01:22:00.619Z,
            flagged: true }, {
            id: '000000000009',
            photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/3.jpg',
            user: 'Marcelo_Crona41',
            date_posted: 2018-09-15T00:51:50.321Z,
            flagged: true }, {
            id: '000000000009',
            photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/40.jpg',
            user: 'Karlee.Kirlin',
            date_posted: 2019-04-23T08:24:10.988Z,
            flagged: true }, {
            id: '000000000009',
            photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/22.jpg',
            user: 'Arvel.Skiles',
            date_posted: 2018-12-16T23:56:58.757Z,
            flagged: true }, {
            id: '000000000009',
            photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/35.jpg',
            user: 'Obie.Aufderhar80',
            date_posted: 2018-09-17T02:28:12.842Z,
            flagged: false }, {
            id: '000000000009',
            photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/35.jpg',
            user: 'Rolando_Hettinger',
            date_posted: 2018-06-26T15:29:04.753Z,
            flagged: true }, {
            id: '000000000009',
            photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/39.jpg',
            user: 'Maximillia.Zulauf94',
            date_posted: 2019-04-17T05:11:04.723Z,
            flagged: true }, {
            id: '000000000009',
            photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/21.jpg',
            user: 'Ansley.Parker69',
            date_posted: 2019-03-13T11:09:35.950Z,
            flagged: true }, {
            id: '000000000009',
            photo: 'https://s3-us-west-1.amazonaws.com/asyncphotos/7.jpg',
            user: 'Rosina_Bauch51',
            date_posted: 2018-09-06T12:37:40.112Z,
            flagged: true }
        ]
      success: info => { console.log('Successfully posted photo') },
      error: err => { console.log('Failed..', err) },
    });
```


* **Notes:**

  Simply overwrites the photo record 
  
  
  
  

**DELETE info**
delete restaurant(s) info
* **/API/info/:id**
* **Method:**
  
  `DELETE`
*  **URL Params**
  `id` is padded by 0's and it has a total of 9-12 digits 
* **Success Response:**
  * **Code:** 204 <br />

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "invalid ID" }`

* **Sample Call:**

```$.delete({
      url: 'http://localhost:3050/API/photos/000000001' ,
      dataType: 'json',
      data:  {
        ['000000000007','000000000008','000000000009','0000000000010' ]},
      success: allPhotos => { this.setState({ photos: allPhotos, isLoading: false }) },
      error: err => { console.log('Failed..', err) },
    });
```


* **Notes:**

  Simply send the restaurant ID for deletion; TBD -- whether I should delete the photo as well   

**DELETE photo**
DELETE particular photo of a particular restaurant
* **/API/photo/:id**
* **Method:**
  `UPDATE`
*  **URL Params**
  `id` is padded by 0's and it has a total of 9-12 digits 
* **Success Response:**
  * **Code:** 204 <br />
    **Content:** 

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "id invalid" }`




* **Sample Call:**

```$.delete({
      url: 'http://localhost:3050/API/photo/000000001' ,
      dataType: 'json',
      data: { 
          {resid:'000000000007','000000000008','000000000009','0000000000010'},
          {id:'0035670000007','000002750008','024780000009'} },
      success: info => { console.log('Successfully posted photo') },
      error: err => { console.log('Failed..', err) },
    });
```


* **Notes:**

  Photo can be deleted by restaurant and by photoID themselves  

