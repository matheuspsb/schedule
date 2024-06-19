import React from 'react'
import CreateEventButton from './CreateEventButton'
import SmallCalendaar from './SmallCalendaar'
import Labels from './Labels'

export default function Sidebar() {
  return (
    <aside className='border p-5 w-64'>
      <CreateEventButton />
      <SmallCalendaar />
      <Labels />
    </aside>
  )
}
