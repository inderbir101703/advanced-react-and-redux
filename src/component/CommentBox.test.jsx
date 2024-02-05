import { screen,render,act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentBox from "./CommentBox";



it('check input is rendered',()=>{
    render(<CommentBox/>)
    const commentArea=screen.getByRole('textbox',{name:/add a comment/i})
expect(commentArea).toBeInTheDocument()

})
it('has a text area users can write',async ()=>{
    render(<CommentBox/>)
    const commentArea=screen.getByRole('textbox',{name:/add a comment/i})
await act(async ()=>{
    await userEvent.click(commentArea)
    await userEvent.keyboard('testing')
})
    expect(commentArea).toHaveValue('testing')
})
it('text areas empty after submitting the form',async ()=>{
    render(<CommentBox/>)
    const commentArea=screen.getByRole('textbox',{name:/add a comment/i})
    const submitButton=screen.getByRole('button',{name:/submit data/i})
    await userEvent.click(commentArea)
    await userEvent.keyboard('testing')
    await userEvent.click(submitButton)
    expect(commentArea).toHaveValue('')
})