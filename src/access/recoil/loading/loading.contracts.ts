export interface LoadingContract {
  table: boolean;
  map: boolean;
}

export const initialLoadingState: LoadingContract = {
  table: false,
  map: false,
};
