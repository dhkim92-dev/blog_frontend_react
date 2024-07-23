const snakeToCamel = (str: string): string =>
    str.replace(/(_\w)/g, (matches) => matches[1].toUpperCase());
  
const camelToSnake = (str: string): string =>
    str.replace(/([A-Z])/g, "_$1").toLowerCase();
  
const convertKeys = <T, R>(obj: T, convert: (key: string) => string): R => {
    if (Array.isArray(obj)) {
      return obj.map(item => convertKeys(item, convert)) as unknown as R;
    } else if (obj !== null && typeof obj === 'object') {
      return Object.keys(obj).reduce((acc, key) => {
        const convertedKey = convert(key);
        acc[convertedKey] = convertKeys((obj as Record<string, any>)[key], convert);
        return acc;
      }, {} as Record<string, any>) as R;
    }
    return obj as unknown as R;
  };
  
export const responseToCamelCase = <T, R>(response: T): R => {
    return convertKeys<T, R>(response, snakeToCamel);
  };
  
  // Function to convert data for API request (camelCase) to snake_case
export const requestToSnakeCase = <T, R>(data: T): R => {
    return convertKeys<T, R>(data, camelToSnake);
};
