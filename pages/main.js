import styled from "styled-components";
import Link from "next/link"

const StyledLink = styled(Link)`
    font-size: 1.5rem;
    text-decoration: none;
    color: #ddc;
    text-shadow: 2px 2px 2px 2px #334;
`

export default function MainPage() {
  return(
    <main> 
      <StyledLink href="/">
        wellcome on my homepage
    </StyledLink>
    </main>
)}


  