import { createPlaceController, deletePlaceController, getAllPlaceController, getPlaceByID, updatePlaceController } from "./controller.mjs";

export const placeRouter = [
  {
    method: 'POST',
    path: '/places/',
    options: {
      auth: 'simple'
    },
    handler: createPlaceController
  },
  {
    method: 'GET',
    path: '/places',
    options: {
      auth: 'simple'
    },
    handler: getAllPlaceController
  },
  {
    method: 'GET',
    path: '/places/{id}',
    options: {
      auth: 'simple'
    },
    handler: getPlaceByID
  },
  {
    method: 'PUT',
    path: '/places/{id}',
    options: {
      auth: 'simple'
    },
    handler: updatePlaceController
  },
  {
    method: 'DELETE',
    path: '/places/{id}/',
    options: {
      auth: 'simple'
    },
    handler: deletePlaceController
  },
]