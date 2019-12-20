import { ActionTypes, FETCH_RANDOM_STRING_SUCCESS, FETCH_SECRET_STRING_SUCCESS } from '../types';
import apiData from './apiData';

test('returns a default state for an emtpy action and state', () => {
  expect(
    apiData(undefined, {} as ActionTypes),
  ).toEqual(
    {
      randomString: '',
      secretString: '',
    }
  );
});

test('returns the provided state for an unhandled action type', () => {
  expect(
    apiData({
      randomString: 'foo',
      secretString: 'bar',        
    }, {} as ActionTypes),
  ).toEqual(
    {
      randomString: 'foo',
      secretString: 'bar',
    }
  );
});

test('[FETCH_RANDOM_STRING_SUCCESS] updates randomString', () => {
  expect(
    apiData(
      {
        randomString: 'foo',
        secretString: 'bar',
      },
      {
        type: FETCH_RANDOM_STRING_SUCCESS,
        payload: {
          randomString: 'baz',
        }
      },
    ),
  ).toEqual(
    {
      randomString: 'baz',
      secretString: 'bar',
    }
  );
});

test('[FETCH_SECRET_STRING_SUCCESS] updates secretString', () => {
  expect(
    apiData(
      {
        randomString: 'foo',
        secretString: 'bar',
      },
      {
        type: FETCH_SECRET_STRING_SUCCESS,
        payload: {
          secretString: 'baz',
        }
      },
    ),
  ).toEqual(
    {
      randomString: 'foo',
      secretString: 'baz',
    },
  );
});
