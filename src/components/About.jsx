export default function About() {
  const cardStyle = {
    backgroundColor: '#232b45'
  };

  return (
    <div id="about" className="about-container">
      <h1 className="about-title">About Marmo</h1>
      <p className="about-description">
        Marmo is a BRAND NEW VR experience designed to bring back the simple, fun feeling of Virtual Reality from 2023. Created by two passionate developers, Marmo is a community-driven game where YOUR feedback matters!
        <br /><br />
        Marmo is out now—go play today!
        <br /><br />
        Join our Discord to stay up to date with the latest news, updates, and to give your feedback on what YOU want to see in Marmo!
      </p>
      <div className="about-features-section">
        <h2 className="features-title">Around the Game</h2>
        <div className="about-features">
          <div className="feature-card" style={cardStyle}>
            <h3>Forest</h3>
            <p>Explore a forest filled with lots of fun features! Use a trampoline for bouncing around, a piano to play, and a clubhouse to hang out with friends.</p>
          </div>
          <div className="feature-card" style={cardStyle}>
            <h3>Shop</h3>
            <p>The shop offers a rotating set of cosmetics, including featured items and seasonal options, giving you plenty of ways to customize your look.</p>
          </div>
          <div className="feature-card" style={cardStyle}>
            <h3>PvP</h3>
            <p>For competitive players, the PvP area delivers fast, moving combat with a selection of unlockable weapons. Each option introduces its own playstyle, encouraging skill, positioning, and quick decision making.</p>
          </div>
          <div className="feature-card" style={cardStyle}>
            <h3>Team</h3>
            <p>Marmo blends the nostalgic fan-game feel with a modern polish. Developed by ScreenVR and Lucid, we do our best to get what the community wants into the game, and collaborate with the community on ideas and features.</p>
          </div>
        </div>
      </div>
    </div>
  )
}