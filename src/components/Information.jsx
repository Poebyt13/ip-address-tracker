

function Information() {
  return (
    <section className="Information">
      <div className="Information__container">
        <div className="Information__container--ip list">
          <p>IP ADDRESS</p>
          <p className="ip">8.8.8.8</p>
        </div>

        <div className="separador"><div></div></div>

        <div className="Information__container--location list">
          <p>LOCATION</p>
          <p className="location">US. California</p>
        </div>

        <div className="separador"><div></div></div>

        <div className="Information__container--timezone list">
          <p>TIMEZONE</p>
          <p className="timezone">UTC-08:00</p>
        </div>
        
        <div className="separador"><div></div></div>

        <div className="Information__container--isp list">
          <p>IPS</p>
          <p className="ips">Google LLC</p>
        </div>
      </div>
    </section>
  )
}

export default Information
