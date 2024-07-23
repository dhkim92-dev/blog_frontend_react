type Constructor<T> = { new (...args: any[]): T };

// Helper function to perform shallow copy of an object based on keys
const copyKeys = <T, R>(source: T, target: R): R => {
  for (const key in target) {
    const property = key.replace("_", "")

    if (Object.prototype.hasOwnProperty.call(source, property)) {
      (target as any)[key] = (source as any)[property];
    }  
  }
  return target;
};

// Convert DTO to Model
export const convertDtoToModel = <T, R>(dto: T, ModelClass: Constructor<R>): R => {
  const modelInstance = new ModelClass(); // Assuming ModelClass has default values for constructor parameters
  return copyKeys(dto, modelInstance);
};

// Convert Model to DTO
export const convertModelToDto = <T, R>(model: T, DtoClass: Constructor<R>): R => {
  const dtoInstance = new DtoClass(); // Assuming DtoClass has default values for constructor parameters
  return copyKeys(model, dtoInstance);
};
