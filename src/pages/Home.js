import img from '../assets/images/mathsimage.jpeg';

const Home = () => (
  <div className="home">
    <img className="image" src={img} alt="bkg-pic" />
    <div>
      <p className="info">
        Mathematics as an expression of the human mind reflects
        the active will, the contemplative reason, and the desire
        for aesthetic perfection. Its basic elements are logic and
        intuition, analysis and construction, generality and individuality.
        — Richard Courant, German-American mathematician
      </p>
      <p className="info">
        Mathematics are the result of mysterious powers which no one understands
        , and which the unconscious recognition of beauty must play an important
        part. Out of an infinity of designs a mathematician chooses one pattern for
        beauty’s sake and pulls it down to earth.
        — Marston Morse, American mathematician
      </p>
    </div>
  </div>
);

export default Home;
