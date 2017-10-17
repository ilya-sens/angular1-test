import editableElementHtml from './editable-element.html';

/* @ngInject */
let editableElementComponent = {
  template: editableElementHtml,
  controllerAs: 'editableElement',
  bindings: {
    value: '=',
  },
  controller: function ($scope) {
    const vm = this;
    vm.value = {};
    vm.beingEdited = false;
  }

};
export default editableElementComponent;


