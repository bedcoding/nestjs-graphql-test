어케 쓰는지 예제 찾아보는 중

```
var axios = require('axios');
var data = JSON.stringify({
  query: `mutation {
    signUp(
      data: {
        email: "email@gmail.com"
        name: "Random name"
        password: "12345678"
      }
    ) {
      _id
      dob
      email
      gender
      name
      phoneNo
      profileImage
      timezone
      token
    }
  }`,
  variables: {}
});

var config = {
  method: 'post',
  url: 'http://localhost:3000/graphql',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdXRoX3NlY3JldCI6IjQ2ZGY5YzU4LWZlZmQtNGNiOC1iZDllLWRlNjhiNzM4NDRkYyIsInVzZXJfZ3JvdXBzIjpbXSwibm93IjoxNjQ5MzQxNDgwLCJleHAiOjE2NDk5NDYyODB9.gpVI4NJyAHc-nCEDRrnUfxNpdrbaAmAknpLIztorIqk',
    'Content-Type': 'application/json'
  },
  data: data
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(http://response.data));
})
  .catch(function (error) {
    console.log(error);
  });
```


두번째
```
async graphqlFromNest(): Promise {
  const data = JSON.stringify({
    query: `mutation {
      signUp(
        data: {
          email: "email@gmail.com"
          name: "Name"
          password: "12345678"
        }
      ) {
        _id
        dob
        email
        gender
        name
        phoneNo
        profileImage
        timezone
        token
      }
    }`,
    variables: {}
  });
  const gqlCall = await firstValueFrom(this.httpService.post(
    'http://localhost:3000/graphql',
    data,
    { headers: { Authorization: `Bearer token` } } // If required
  ));
}
```