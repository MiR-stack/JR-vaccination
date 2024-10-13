const getUrl = (url: string) => {
  return `${import.meta.env.VITE_API_URL}${url}`;
};

export default getUrl;
