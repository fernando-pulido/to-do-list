import 'bootstrap/dist/css/bootstrap.min.css'

const Form = () => {
  return (
    <form>
      <FormGroup>
        <Label for="exampleEmail" hidden>
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
        />
      </FormGroup>{' '}
      <FormGroup>
        <Label for="examplePassword" hidden>
          Password
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Password"
          type="password"
        />
      </FormGroup>{' '}
      <Button>Submit</Button>
    </form>
  )
}
export default Form
