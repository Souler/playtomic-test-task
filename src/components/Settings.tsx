import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSecretStringRequest } from '../store/actions'
import { getSecretString } from '../store/selectors'
import DashboardContent from './DashboardContent'

function useSecretString() {
  const secretString = useSelector(getSecretString)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSecretStringRequest())
  }, [dispatch])
  return secretString
}

function Settings() {
  const secretString = useSecretString()

  return (
    <DashboardContent title="Settings">
      <code>{secretString}</code>
    </DashboardContent>
  )
}

export default Settings
