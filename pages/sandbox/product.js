import BaseLayout from '../../components/base'
import TestProps from '../../components/header'

export default function Product() {
  return (
    <BaseLayout>
      <TestProps phrase={{ greeting: "hello there", name: "xavier" }}>
        <h1>THIS IS THE BaseLayout BODY FOR products</h1>
      </TestProps>
    </BaseLayout>
  )
}
