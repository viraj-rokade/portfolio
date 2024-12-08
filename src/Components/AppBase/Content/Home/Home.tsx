import './Home.css';
import TypeWriter from '../../../OtherComponents/TypeWriter/TypeWriter';
const Home = () => {
  const typeWriterData = [
    "Master the script...",
    "...and it will dance to your tune!",
  ];

  return (
    <div>
      <TypeWriter texts={typeWriterData} />
    </div>
  );
};

export default Home