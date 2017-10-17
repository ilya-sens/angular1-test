import angular from 'angular';
import entityComponent from './entity.component';
// import entityComponent from './entity/entity.component';
/* @ngInject */
angular
  .module('entity', [])
  .component('entity', entityComponent);
