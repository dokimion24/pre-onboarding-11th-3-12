import React, { createContext, useReducer, useContext, Dispatch } from 'react';

type State = {
  loading: boolean;
  data: any;
  error: any;
};

type Action =
  | { type: 'GET_ISSUES' }
  | { type: 'GET_ISSUES_SUCCESS'; data: any }
  | { type: 'GET_ISSUES_ERROR'; error: any }
  | { type: 'GET_ISSUE' }
  | { type: 'GET_ISSUE_SUCCESS'; data: any }
  | { type: 'GET_ISSUE_ERROR'; error: any };

type InitialState = {
  issues: {
    loading: boolean;
    data: any;
    error: any;
  };
  issue: {
    loading: boolean;
    data: any;
    error: any;
  };
};

const initialState: InitialState = {
  issues: {
    loading: false,
    data: null,
    error: null,
  },
  issue: {
    loading: false,
    data: null,
    error: null,
  },
};

const loadingState = {
  loading: true,
  data: null,
  error: null,
};

const success = (data: any): State => ({
  loading: false,
  data,
  error: null,
});

const error = (error: any): State => ({
  loading: false,
  data: null,
  error: error,
});

const issuesReducer = (state: State, action: Action): any => {
  switch (action.type) {
    case 'GET_ISSUES':
      return {
        ...state,
        issues: loadingState,
      };
    case 'GET_ISSUES_SUCCESS':
      return {
        ...state,
        issues: success(action.data),
      };
    case 'GET_ISSUES_ERROR':
      return {
        ...state,
        issues: error(action.error),
      };
    case 'GET_ISSUE':
      return {
        ...state,
        issue: loadingState,
      };
    case 'GET_ISSUE_SUCCESS':
      return {
        ...state,
        issue: success(action.data),
      };
    case 'GET_ISSUE_ERROR':
      return {
        ...state,
        issue: error(action.error),
      };
    default:
      throw new Error(`Unhanded action type`);
  }
};

type IssuesDispatch = Dispatch<Action>;

const IssuesStateContext = createContext<State | null>(null);
const IssuesDispatchContext = createContext<IssuesDispatch | null>(null);

export function IssuesProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(issuesReducer, initialState);
  return (
    <IssuesStateContext.Provider value={state}>
      <IssuesDispatchContext.Provider value={dispatch}>
        {children}
      </IssuesDispatchContext.Provider>
    </IssuesStateContext.Provider>
  );
}

export function useIssuesState() {
  const state = useContext(IssuesStateContext);
  if (!state) {
    throw new Error('Cannot find UsersProvider');
  }
  return state;
}

export function useIssuesDispatch() {
  const dispatch = useContext(IssuesDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find UsersProvider');
  }
  return dispatch;
}
