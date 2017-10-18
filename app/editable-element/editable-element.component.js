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
    vm.edit = () => {
      vm.beingEdited = true;
    };
    vm.stopEditing = () => {
      vm.beingEdited = false;
    };
    vm.save = () => {
      /* here should be a part of saving */
      vm.stopEditing();
    }
  }

};
export default editableElementComponent;


