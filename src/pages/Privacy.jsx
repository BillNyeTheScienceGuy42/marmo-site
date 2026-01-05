import Nav from '../components/Nav'

export default function Privacy() {
  return (
    <>
      <Nav />
      <div className="privacy-container">
        <div className="privacy-header">
          <h1>Privacy Policy</h1>
          <div className="privacy-accent"></div>
        </div>
        
        <p>SCREEN VR STUDIOS LIMITED ("we," "us," or "our") is committed to protecting your privacy. This policy explains what information we collect when you play Marmo ("the Game"), how we use it, and the steps we take to keep it safe. By installing or using Marmo, you agree to the practices described below.</p>

        <h2>1. Information We Collect</h2>
        <h3>1.1 Meta Account Information</h3>
        <p>Marmo relies on Meta accounts for authentication.</p>
        <p>When you launch the Game, we collect:</p>
        <ul>
          <li>Your display name</li>
          <li>Your Meta user ID</li>
        </ul>

        <h3>1.2 Gameplay and Technical Data</h3>
        <p>While you play Marmo, we may collect:</p>
        <ul>
          <li>Progress, unlocks, and in-game actions</li>
          <li>Customization and cosmetic selections</li>
          <li>Purchase history related to in-game items or currency</li>
          <li>Device details, operating system version</li>
        </ul>
        <p>This data helps maintain game functionality.</p>

        <h2>2. How We Use Your Information</h2>
        <p>Your information is used for purposes such as:</p>
        <ul>
          <li>Operating and maintaining Marmo</li>
          <li>Enhancing gameplay features</li>
          <li>Identifying bugs, crashes, and performance issues</li>
          <li>Supporting community safety and enforcing rules</li>
          <li>Detecting cheating, abuse, or unauthorized activity</li>
          <li>Providing support and responding to player requests</li>
        </ul>
        <p>We only use data in ways necessary to deliver and improve the Game.</p>

        <h2>3. When We Share Information</h2>
        <p>Information may be shared with trusted third parties only when needed to run Marmo, such as:</p>
        <ul>
          <li>Backend or analytics services used to operate and improve the Game</li>
          <li>Legal authorities if required to comply with law or protect player safety</li>
        </ul>
        <p>We do not sell your information or share it with advertisers.</p>

        <h2>4. Data Retention</h2>
        <ul>
          <li>We retain data only for as long as needed to operate the Game or meet legal obligations</li>
          <li>If your Meta account is removed or access to Marmo ends, associated gameplay data will be deleted or anonymized</li>
        </ul>

        <h2>5. Children's Privacy</h2>
        <ul>
          <li>Marmo is designed for players aged 13 and older</li>
          <li>If we discover that data from a child under 13 was collected without proper consent, we will remove it promptly</li>
        </ul>

        <h2>6. Security Practices</h2>
        <ul>
          <li>We implement reasonable safeguards to protect your data from unauthorized access, loss, or misuse</li>
          <li>No system is completely secure, but we work to minimize risks through technical and organizational measures</li>
        </ul>

        <h2>7. Updates to This Policy</h2>
        <ul>
          <li>We may revise this Privacy Policy as Marmo evolves or as laws change</li>
          <li>The updated version will be posted with a new effective date</li>
          <li>Significant updates may also be communicated through in-game notices</li>
        </ul>

        <h2>8. Contact Us / Delete User Data</h2>
        <p>If you wish to delete any data stored related to your activity that we have collected, or if you have questions regarding this Privacy Policy, reach out to us:</p>
        <p>
          SCREEN VR STUDIOS LIMITED<br />
          Email: screenvrstudios@gmail.com
        </p>
      </div>
    </>
  )
}