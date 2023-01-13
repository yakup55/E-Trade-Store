import React from "react";
import {
  CLOSE_SNACBAR,
  OPEN_SNACBAR,
  SET_LOADING,
  SET_THEME,
} from "../actions/appActions";
import { theme, snacbar, isLoaded } from "../initials/appItems";

const values = {
  theme,
  snacbar,
  isLoaded,
};

export function appReducer(state = values, { type, payload }) {
  switch (type) {
    case OPEN_SNACBAR:
      return {
        ...state,
        snacbar: {
          open: true,
          message: payload.message,
          severity: payload.severity,
        },
      };
    case SET_THEME:
      return {
        ...state,
        theme: payload,
      };
    case CLOSE_SNACBAR:
      return {
        ...state,
        snacbar: {
          open: false,
          message: "",
        },
      };
    case SET_LOADING:
      return {
        ...state,
        isLoaded: payload,
      };

    default:
      return {
        ...state,
      };
  }
}
