import Link from 'next/link'

export default function Footer(){
    return (
        <footer className="py-4 mt-auto">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <small className="text-start">&copy; 2025 MyBotChat Inc. All rights reserved.</small>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <Link href="#" className="text-decoration-none me-3">
                  <small>Terms of Service</small>
                </Link>
                <Link href="#" className="text-decoration-none">
                  <small>Privacy</small>
                </Link>
              </div>
            </div>
          </div>
        </footer>
    );
}