import { render ,screen,debug} from "@testing-library/react";

import App from "../App";
it("test render of App",()=>{
const {container}=render(<App/>)
expect(container).toHaveTextContent('Comment Box')
})