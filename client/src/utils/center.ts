import getUrl from "./getUrl";

const getCenters = async ({
  page,
  searchTerm,
  pageSize,
}: {
  searchTerm?: string;
  page?: number;
  pageSize?: number;
}) => {
  let url = getUrl("/centers?");
  if (pageSize) {
    url += `pageSize=${pageSize}&`;
  }
  if (page) {
    url += `page=${page}&`;
  }
  if (searchTerm) {
    url += `q=${searchTerm}&`;
  }

  const res = await fetch(url);
  return await res.json();
};

export { getCenters };
