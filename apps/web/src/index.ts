import { sum } from '@ceti/core'

function main() {
  const arr = [1, 2, 3]
  console.log(`Summing ${arr.join(', ')} results in ${sum(arr)}`)
}

main()
