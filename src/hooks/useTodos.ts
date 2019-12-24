import { MutableRefObject, useRef } from 'react'
import useApiResource from './useApiResource'

function useRandomImage() {
  const resourceId = 'todos'
  const requestInfo: MutableRefObject<RequestInfo> = useRef(
    'https://jsonplaceholder.typicode.com/todos?userId=1',
  )
  return useApiResource(resourceId, requestInfo.current)
}

export default useRandomImage
