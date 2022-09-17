const getDate = () => {
  const date = new Date().toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return date;
};

export default getDate;
