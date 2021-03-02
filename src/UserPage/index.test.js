import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserPage, { stateClass } from './index';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../Budget', () => {
  return function FakeBudget(props) {
    return (
      <div>Budget div</div>
    );
  }
});

jest.mock('../Outcomes', () => {
  return function FakeOutcomes(props) {
    return (
      <div>Charges div</div>
    );
  }
});

describe('<UserPage />', () => {
  describe('stateClass', () => {
    test('budget is 100, outcomes is 200', () => {
      expect(stateClass(100, 200)).toEqual('App__container_death');
    });

    test('budget is 100, outcomes is 20', () => {
      expect(stateClass(100, 20)).toEqual('App__container_ok');
    });

    test('budget is 100, outcomes is 50', () => {
      expect(stateClass(100, 50)).toEqual('App__container_warning');
    });

    test('budget is 100, outcomes is 90', () => {
      expect(stateClass(100, 90)).toEqual('App__container_danger');
    });
  });

  const props = {
    firebase: { firestore: () => {} },
    credentials: { user: { uid: '123' } },
  };

  let wrapper = null;

  beforeEach(() => {
    wrapper = Enzyme.shallow(<UserPage {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('show some page', () => {
    expect(wrapper.find('.user-page__container').children().length).toEqual(2)
  });
});