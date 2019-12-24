import React from 'react'
import useContacts from '../hooks/useContacts'
import DashboardContent from './DashboardContent'
import JSONTreeView from './JSONTreeView'

function Profile() {
  const [loading, contacts, error] = useContacts()

  return (
    <DashboardContent title="Secret dashboard">
      <JSONTreeView data={{ loading, error, contacts }} />
    </DashboardContent>
  )
}

export default Profile
