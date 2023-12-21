export const updateObject = (oldObject: Record<string, unknown>, updatedProperties: Record<string, unknown>) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};