import angular from 'angular';
import editableElementComponent from './editable-element.component';
// import editableElementComponent from './editableElement/editableElement.component';
/* @ngInject */
angular
  .module('editableElement', [])
  .component('editableElement', editableElementComponent);
