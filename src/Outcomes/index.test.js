import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Outcome from './index';
import { ADD_OUTCOME, RESET_OUTCOME } from '../UserPage/constants';

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

describe('<Outcomes />', () => {
  const mockDispatch = jest.fn();
  const props = {
    value: 100,
    dispatch: mockDispatch,
    collection: 'some_collection',
    doc: 'some_id_doc',
    db: { collection: collection },
    wrapperClassName: '',
  };

  let wrapper = null;

  beforeEach(() => {
    wrapper = Enzyme.shallow(<Outcome {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('render 100 EUR', () => {
    const value = wrapper.find('#outcomesValues').text();
    expect(value).toEqual('100 EUR');
  });

  test('test value change handler', () => {
    wrapper.find('[type="text"]').simulate('change', {
      preventDefault() {},
      target: { value: '23' },
    });

    expect(wrapper.find('[type="text"]').props().value).toEqual(23);
  });

  test('test outcomes value change handler', () => {
    wrapper.find('[type="text"]').simulate('change', {
      preventDefault() {},
      target: { value: '23' },
    });

    wrapper.find('button.form__item').at(0).simulate('click');

    expect(wrapper.find('[type="text"]').props().value).toEqual(0);
    expect(mockDispatch).toBeCalledWith({ type: ADD_OUTCOME, payload: { outcomes: 123 } });
  });

  test('test reset outcomes value handler', () => {
    wrapper.find('button.form__item').at(1).simulate('click');

    expect(mockDispatch).toBeCalledWith({ type: RESET_OUTCOME, payload: { outcomes: 0 } });
  });
});
