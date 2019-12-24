import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApiResourceRequest } from '../store/actions'
import { getApiResource } from '../store/selectors'

function useApiResource(resourceId: string, requestInfo: RequestInfo) {
  const dispatch = useDispatch()
  const resourceStateSelector = useCallback(getApiResource(resourceId), [resourceId])
  const resourceState = useSelector(resourceStateSelector)

  useEffect(() => {
    dispatch(fetchApiResourceRequest(resourceId, requestInfo))
  }, [dispatch, resourceId, requestInfo])

  return [
    resourceState?.loading,
    resourceState?.data || undefined,
    resourceState?.error || undefined,
  ]
}

export default useApiResource
