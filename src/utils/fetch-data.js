import DataType from '../data/data-type';
import API from './api';

let fetchDataFromAPI = function() {
  return fetch(API.api_name.url());
};

let fetchDataIfNeeded = function() {
  if (localStorage.getItem('SU_API')) {
    return new Promise((resolve, reject) => {
      let data = JSON.parse(localStorage.getItem('SU_API'));
      return resolve(data);
    });
  } else {
    return fetchDataFromAPI.call(this);
  }
};

let fetchStaticData = function() {
  return new Promise((resolve, reject) => {
    if (DataType.property) {
      return resolve(DataType);
    } else {
      return reject();
    }
  });
};

export { fetchDataFromAPI, fetchDataIfNeeded, fetchStaticData };
