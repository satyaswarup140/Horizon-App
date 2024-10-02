const FullScreenImage = ({ image }) => {
    return (
      <div
        className="relative h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
    );
  };
  
  export default FullScreenImage;
  
