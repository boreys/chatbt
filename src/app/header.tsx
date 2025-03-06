import Link from "next/link";

export default function Header(){
    return (
          <nav className="navbar navbar-expand-md sticky-top border-bottom bg-body-tertiary">
            <div className="container">
              <Link className="navbar-brand" href="/">
                ChaGPT
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link className="nav-link" href="/#features">Features</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/#testimonials">Testimonials</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="https://mybot.chat/blogs?src=chatbt">Blog</Link>
                  </li>
                </ul>
                <a href="https://mybot.chat/?src=chatbt" className="btn btn-primary btn-sm" role="button">Get Started</a>
              </div>
            </div>
          </nav>
    );
}