import { validateForms } from '../functions/validate-forms';
const rules1 = [


  {
    ruleSelector: '.graph-modal__tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: ''
      }
    ]
  },

  {
    ruleSelector: '.graph-modal__tg',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: ''
      }
    ]
  },
];

const rules2 = [


  {
    ruleSelector: '.about__tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: ''
      }
    ]
  },
];

const rules3 = [


  {
    ruleSelector: '.more__phone',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: ''
      }
    ]
  },
];
const afterForm = () => {
  document.querySelector('.graph-modal__tel').classList.add('graph-modal__tel--error')

};

validateForms('.graph-modal__form', rules1, afterForm);
validateForms('.about__form', rules2);
validateForms('.more__form', rules3);
