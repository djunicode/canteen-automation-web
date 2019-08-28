import gql from 'graphql-tag';

export const SUSCRIBE_PENDING_ORDERS = gql`
query {
  orders(isFulfilled: false) {
    id
    time_scheduled: timeSheduled
    items {
      info: menuItem {
        name
      }
      quantity
    } 
  }
}
`;

export const GET_COMPLETED_ORDERS = gql`
query {
  orders(isFulfilled: true) {
    id
    time_scheduled: timeSheduled
    items {
      info: menuItem {
        name
      }
      quantity
    } 
  }
}
`;

export const GET_CATEGORIES = gql`
{
  categories {
    name
    id
  }
}
`;

export const GET_MENU = gql`
{
  menu_items: menu {
    category {
      name
      id
    }
    is_available: isAvailable
    name
    id
    price
  }
}
`;

export const DELETE_CATEGORY_BY_ID = gql`
mutation deleteCategory($id: Int!) {
  delete_categories(where: {
    id: {
      _eq: $id
    }
  }) 
  {
    affected_rows
  }
}
`;

export const ADD_CATEGORY = gql`
mutation addCategory($name: String!) {
  insert_categories(objects: { name: $name }) {
    returning {
      id
    }
  }
}
`;

export const ADD_MENU_ITEM = gql`
mutation addMenuItem($name: String!, $price: Int!, $category_id: Int!) {
  insert_menu_items(objects: {
    name: $name,
    price: $price,
    category_id: $category_id
  })
  {
    returning {
      id
    }
  }
}
`;
