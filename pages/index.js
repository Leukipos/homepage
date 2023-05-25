import styled from "styled-components";
import Link from "next/link"

const StyledLink = styled(Link)`
  color: #334;
  font-size: 2rem;
  text-decoration: none;
`
export default function LandingPage() {
  return(
    <main> 
      <StyledLink href="main">Alex Zippel</StyledLink>
    </main>
)}


  