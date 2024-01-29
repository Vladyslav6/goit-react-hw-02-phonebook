const SectionTitle = ({ Title, children }) => {
  return (
    <div>
      <h2>{Title}</h2>
      {children}
    </div>
  );
};

export default SectionTitle;
