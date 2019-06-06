import Immutable from 'seamless-immutable';
import { rootReducer } from '../rootReducer';

describe('rootReducer', () => {
  it('should update the state and return the new state', () => {
    const mockState = Immutable({
      mockParam: {},
    });
    const mockPayload = 'mockPayload';
    const expected = rootReducer(mockState, mockPayload);
    const result = Immutable({
      mockParam: {
        mockData: 'mockPayload',
      },
    });
    expect(expected).toEqual(result);
  });
});
