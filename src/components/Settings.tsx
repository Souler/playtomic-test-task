import React from 'react'
import useTodos from '../hooks/useTodos'
import DashboardContent from './DashboardContent'
import JSONTreeView from './JSONTreeView'

function Settings() {
  const [loading, todos, error] = useTodos()

  return (
    <DashboardContent title="Settings">
      <JSONTreeView data={{ loading, error, todos }} />
    </DashboardContent>
  )
}

export default Settings
