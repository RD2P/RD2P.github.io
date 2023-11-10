import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <p>@{new Date().getFullYear()} Raphael De Los Reyes</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer