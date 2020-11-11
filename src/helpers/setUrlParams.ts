type QueryParams = {
  [key: string]: string;
};

export const setUrlParams = (
  queryParams: QueryParams = {}
): URLSearchParams => {
  const params = new URLSearchParams();

  for (let key in queryParams) {
    if (!!queryParams[key]) {
      params.append(key, queryParams[key]);
    }
  }

  return params;
};
