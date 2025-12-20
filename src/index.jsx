import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */

root.render(
  <Page />
)

function Header() {
  return (
    <header className="nav-bar">
        <img src="/assets/react.svg" className="logo" alt="React logo"/>
        <nav>
          <ul className="nav-list"> 
            <li className="nav-item">Pricing</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>
      </header>
  )
}

function MainContent() {
  return (
    <main>
      <h1>Why I'm excited to learn React:</h1>
      <ol>
        <li>I want to become a design engineer!</li>
        <li>I want to understand the underlying technologies of what I'm building.</li>
        <li>I want to build a really beautiful personal website.</li>
      </ol>
    </main>
  )
}

function Footer() {
  return (
    <footer>
        <small>© 2025 by Jacqueline. All rights reserved.</small>
    </footer>
  )
}

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}