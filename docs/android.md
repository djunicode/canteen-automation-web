# HTTP Requests for Android

*NOTE:* POST REQUESTS ONLY

*ENDPOINT:* `https://unicode-canteen.herokuapp.com/graphql`

*PLAY AROUND:* `https://unicode-canteen.herokuapp.com/graphql/playground`

#### Menu

```json
{
  "query": "
    {
      menu {
        id
        price
        preparationTime
      }
    }
  "
}
```

#### Place new order

```json
{
  "query": "
    mutation ($userId: String!, $items: [OrderItemsSerializerInput!]!) {
      orderMutation (input: {
        user: $userId
        items: $items,
      }) {
        id
      }
    }
  ",
  "variables": {
    "userId": "1",
    "items": [
      {
        quantity: 4,
        menuItem: "1",
        comment: "Spicy karna pls"
      },
      {
        quantity: 1,
        menuItem: "2"
      }
    ]
  }
}
```

