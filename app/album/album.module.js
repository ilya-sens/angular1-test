import angular from 'angular';
import albumComponent from './album.component';
// import albumComponent from './album/album.component';
/* @ngInject */
angular
  .module('album', [])
  .component('album', albumComponent);
