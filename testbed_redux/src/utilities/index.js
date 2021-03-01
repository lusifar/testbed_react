export const updateObject = (prevObject, updateAttributes) => {
  return {
    ...prevObject,
    ...updateAttributes,
  };
};
