import { Props } from './type.ts'
const Input = ({ name, placeholder, type }: Props) => {
  return <input type={type} placeholder={placeholder} />
}
export default Input
