export const typeHandler = (types) => {
  return types.map(type => type.type.name).join(' | ');
};
