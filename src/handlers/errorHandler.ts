type TError = {
  code: number,
  message: string,
}

export function errorHandler(errorString: string) {
  const error: TError = JSON.parse(errorString);
  switch (error.code) {
    case 11:
      console.log('11');
      break;
    case 12:
      console.log('12');
      break;
    default:
  }
}
