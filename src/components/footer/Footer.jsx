import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <footer>
        <div className="footer-container">
          <div className="footer-title-form-wrapper">
            <div className="footer-title">
              <h2>newsletter</h2>
              <p>get news about articles and updates in your inbox</p>
            </div>
            <form action="" className="footer-form">
              <input type="text" placeholder="NAME" />
              <input type="email" placeholder="EMAIL" />
              <input type="text" placeholder="MESSAGE" />
            </form>
          </div>
          <h1 className="get-in-touch-heading">
            get <br />
            in touch
          </h1>
          <button className="send-btn">send</button>
        </div>
      </footer>
      <div className="copyright">
        <h3>Copyright 2022 All Right Reserved By SG</h3>
      </div>
    </div>
  );
}

export default Footer;
