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



### Example API request ### 

```
    $.get({
      url: 'http://localhost:3050/API/photos/' + id,
      dataType: 'json',
      success: allPhotos => { this.setState({ photos: allPhotos, isLoading: false }) },
      error: err => { console.log('Failed..', err) },
    });

```