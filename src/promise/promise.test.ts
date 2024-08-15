import { handlePromise } from './handle-promise';

describe('handlePromise', () => {
  it('should return result when promise resolves successfully', async () => {
    const successPromise = Promise.resolve('Success!');

    const result = await handlePromise(successPromise);

    expect(result).toEqual({
      result: 'Success!',
      error: null,
    });
  });

  it('should return error when promise rejects', async () => {
    const error = new Error('Something went wrong');
    const errorPromise = Promise.reject(error);

    const result = await handlePromise(errorPromise);

    expect(result).toEqual({
      result: null,
      error: error,
    });
  });

  it('should return custom error when errorCase condition is met', async () => {
    const response = { ok: false, status: 404 };
    const fetchPromise = Promise.resolve(response);

    const result = await handlePromise(fetchPromise, (res) => !res.ok);

    expect(result).toEqual({
      result: null,
      error: new Error('Custom error condition met'),
    });
  });

  it('should return result when errorCase condition is not met', async () => {
    const response = { ok: true, status: 200 };
    const fetchPromise = Promise.resolve(response);

    const result = await handlePromise(fetchPromise, (res) => !res.ok);

    expect(result).toEqual({
      result: response,
      error: null,
    });
  });

  it('should handle promises with non-default error types', async () => {
    const customError = 'Custom error';
    const errorPromise = Promise.reject(new Error(customError));

    const result = await handlePromise<string, typeof customError>(
      errorPromise
    );

    expect(result).toEqual({
      result: null,
      error: new Error(customError),
    });
  });
});
