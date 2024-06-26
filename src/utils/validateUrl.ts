export function validateUrl(url: string) {
  const regex =
    /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/([a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]*)?)?$/;
  return regex.test(url);
}
