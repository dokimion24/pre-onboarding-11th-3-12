import instance from './config';

export async function getIssues(dispatch: any, page: number) {
  dispatch({ type: 'GET_ISSUES' });
  try {
    const response = await instance.get(
      `/issues?state=closed&sort=comments&per_page=10&page=${page}`,
    );

    dispatch({ type: 'GET_ISSUES_SUCCESS', data: response.data });
  } catch (e) {
    dispatch({ type: 'GET_ISSUES_ERROR', error: e });
  }
}
