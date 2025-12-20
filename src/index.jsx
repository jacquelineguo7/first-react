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
    <header>
        <img src="/assets/react.svg" alt="React logo" height={40}/>
      </header>
  )
}

function Page() {
  return (
    <>
      <Header />
      <main>
        <h1>Why I'm excited to learn React:</h1>
        <ol>
          <li>I want to become a design engineer!</li>
          <li>I want to understand the underlying technologies of what I'm building.</li>
          <li>I want to build a really beautiful personal website.</li>
        </ol>
      </main>
      <footer>
        <small>© 2025 by Jacqueline. All rights reserved.</small>
      </footer>

    </>
  )
}