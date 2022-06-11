import styled from "styled-components";

const AA = styled.div`
  margin: 40px;
`;

const BB = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

const UnicornAfter = styled.div` 
  &:after {
    content: " ??";
  }
`

function App() {
  return (
    <AA>
      <BB>hellooo</BB>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aperiam est nisi. Cupiditate laboriosam qui placeat at et illo? Deleniti at numquam distinctio totam hic. Quaerat earum ipsum placeat amet?</p>
    </AA>
  );
}

export default App;