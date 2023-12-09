# URL Shortener

A Node.js-based URL shortener with three main endpoints to simplify URL management.

## Endpoints

### Shorten URL

#### Endpoint
```
http://localhost:8000/api/short
```
#### Method
```
POST
```

#### Description
Allows users to shorten a large URL.
<table>
  <thead>
    <th>Field</th>
    <th>Type</th>
    <th>Value</th>
  </thead>
  <tbody>
    <tr>
      <td>body</td>
      <td>json</td>
      <td>your URL value</td>
    </tr>
    <tr>
      <td>header</td>
      <td>content-type</td>
      <td>application/json</td>
    </tr>
  </tbody>
</table>

<img width="2168" alt="image" src="https://github.com/sami3898/urlShortener/assets/32996863/14558197-1613-4f07-81f4-9cd15e7d1b91">

### Redirect to Original URL

#### Endpoint
```
http://localhost:8000/api/id/:id
```
#### Method
```
GET
```
#### Description
Allows users to visit the original URL associated with the provided ID.

![0d33151e-5394-4b78-a451-8983590f33ae](https://github.com/sami3898/urlShortener/assets/32996863/91a5e894-6b40-41a2-8871-18382dd10236)


### List All URLs

#### Endpoint
```
http://localhotst:8000/api/all
```
#### Method
```
GET
```
#### Description
Lists all available URLs in the database.

<img width="2169" alt="image" src="https://github.com/sami3898/urlShortener/assets/32996863/ffbd01eb-a892-45a2-83b5-53bf2442af24">


### How to Run

#### Clone the repo
```
git clone https://github.com/sami3898/urlShortener
```

#### Install dependencies
```
npm install
```

#### start node server
```
npm start
```

Make sure to configure your database settings in the project ```.env``` file
<img width="465" alt="image" src="https://github.com/sami3898/urlShortener/assets/32996863/1f1a98fc-75d6-4fda-a751-82d2b625c26f">



