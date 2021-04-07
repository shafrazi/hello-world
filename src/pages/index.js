import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <Header headerText={"hello!"} />
      <Link to="/contact">Contact</Link>
      <h1>hello world!</h1>
      <p>Helloooo</p>
    </div>
  )
}
