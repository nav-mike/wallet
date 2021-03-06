import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Budget from './index';
import { UPDATE_BUDGET } from '../UserPage/constants';

Enzyme.configure({ adapter: new Adapter() });

const collection = _ => {
  return {
    doc: _ => {
      return {
        update: _ => {
          return {
            then: (func) => {
              return func();
            },
          };
        },
      };
    },
  };
};

describe('<Budget />', () => {
  const mockDispatch = jest.fn();
  const props = {
    value: 600,
    dispatch: mockDispatch,
    collection: 'some_collection',
    doc: 'some_id_doc',
    db: { collection: collection },
  };

  let wrapper = null;

  beforeEach(() => {
    wrapper = Enzyme.shallow(<Budget {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('show budget data', () => {
    const value = wrapper.find('#budgetValue').text();
    expect(value).toEqual('600 EUR');
  });

  test('test value change handler', () => {
    wrapper.find('[type="text"]').simulate('change', {
      preventDefault() {},
      target: { value: '100' },
    });
    expect(wrapper.find('[type="text"]').props().value).toEqual(100);
  });

  test('test budget value change handler', () => {
    wrapper.find('[type="text"]').simulate('change', {
      preventDefault() {},
      target: { value: '100' },
    });

    wrapper.find('button.form__item').simulate('click');

    expect(wrapper.find('[type="text"]').props().value).toEqual(0);
    expect(mockDispatch).toBeCalledWith({ type: UPDATE_BUDGET, payload: { budget: 100 } });
  });
});
