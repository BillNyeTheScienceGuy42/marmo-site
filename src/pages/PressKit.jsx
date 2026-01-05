import Nav from '../components/Nav'

export default function PressKit() {
  return (
    <>
      <Nav />
      <div className="presskit-container">
        <div className="presskit-header">
          <h1>Press Kit</h1>
          <div className="presskit-accent"></div>
        </div>

        <p className="presskit-intro">Everything you need to:</p>
        <ul className="presskit-list">
          <li>Use in your videos</li>
          <li>Create thumbnails</li>
          <li>Use for art</li>


        </ul>

        <p className="presskit-restriction">
          <strong>Terms:</strong> No selling our assets, no using them in games or other products. Stick to content about Marmo only.
        </p>

        <h2>Get The Assets</h2>
        <p>Download logos, artwork, and screenshots for your content.</p>
        
        <a href="" className="presskit-download">Download Now</a>


      </div>
    </>
  )
}


