import { MutableRefObject, useRef } from 'react'
import useApiResource from './useApiResource'

function useContacts() {
  const resourceId = 'contacts'
  const requestInfo: MutableRefObject<RequestInfo> = useRef(
    'https://jsonplaceholder.typicode.com/users',
  )
  return useApiResource(resourceId, requestInfo.current)
}

export default useContacts
