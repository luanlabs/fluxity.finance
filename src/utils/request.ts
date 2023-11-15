const request = async <T>(
  url: string,
  config?: RequestInit,
): Promise<{ data: T; response: Response }> => {
  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (response.status >= 400) {
      throw { data, response };
    }

    return { data, response };
  } catch (error) {
    throw error;
  }
};

export default request;
