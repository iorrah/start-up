const api = {
  api_name: {
    URL: process.env.REACT_APP_API_NAME_URL,
    URI: process.env.REACT_APP_API_NAME_URI,
    QUERY: process.env.REACT_APP_API_NAME_QUERY,
    url() {
      return `${this.URL}/${this.URI}?${this.QUERY}`;
    },
  },
};

export default api;
