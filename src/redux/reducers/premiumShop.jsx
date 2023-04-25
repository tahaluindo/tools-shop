import {
  ADD_PREMIUMSHOPDATA,
  EDIT_PREMIUMSHOPDATA,
  FETCH_PREMIUMSHOPDATA,
  FETCH_PREMIUMSHOPSELECTOPTIONS,
  GET_PREMIUMSHOP,
} from "../actions/types";

const initialState = {
  premiumShopOptionValue: {},
  cnt: 0,
  premiumShops: [],
  selected_premiumShop: {},
};

const premiumShopReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PREMIUMSHOPSELECTOPTIONS:
      return {
        ...state,
        premiumShopOptionValue: payload,
      };
    case GET_PREMIUMSHOP:
      return {
        ...state,
        selected_premiumShop: payload,
      };
    case FETCH_PREMIUMSHOPDATA:
      return {
        ...state,
        cnt: payload.cnt,
        premiumShops: payload.data,
      };
    case ADD_PREMIUMSHOPDATA:
      return {
        ...state,
        premiumShops: [payload, ...state.premiumShops],
      };
    case EDIT_PREMIUMSHOPDATA:
      return {
        ...state,
        premiumShops: state.premiumShops.map((premiumShop) =>
          premiumShop._id === payload.id ? payload.premiumShop : premiumShop
        ),
      };
    default:
      return state;
  }
};

export default premiumShopReducer;
