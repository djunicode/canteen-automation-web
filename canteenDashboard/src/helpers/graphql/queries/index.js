/* eslint-disable linebreak-style */
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
      comment
    } 
  }
}
`;

export const GET_COMPLETED_ORDERS = gql`
query {
  orders(isFulfilled: true) {
    id
    isFulfilled
    time_scheduled: timeSheduled
    items {
      info: menuItem {
        name
      }
      quantity
      comment
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
    options
  }
}
`;

export const DELETE_CATEGORY_BY_ID = gql`
mutation deleteCategory($id: ID!) {
  deleteCategoryMutation(id: $id) {
    ok
  }
}
`;

export const ADD_CATEGORY = gql`
mutation addCategory($name: String!) {
  categoryMutation(input: { name: $name }) {
    category {
      name
      id
    }
  }
}
`;

export const ADD_MENU_ITEM = gql`
mutation addMenu($name: String!, $price: Int!, $categoryId: ID!,$choice:String!, $id: ID) {
  menuItemMutation(input: { id: $id, name: $name, price: $price, category: $categoryId, options:$choice }) {
    menuItem {
      id
      name
      price
      options
      category{
        id
        name
      }
    }
  }
}
`;

export const DELETE_MENU_ITEM = gql`
mutation deleteMenuItem($id: ID!) {
  deleteMenuItemMutation(id: $id) {
    ok
  }
}
`;

export const PREPARE_ORDER = gql`
mutation prepareOrder($id: ID!) {
  fulfillOrderMutation(id: $id) {
    ok
  }
}
`;
