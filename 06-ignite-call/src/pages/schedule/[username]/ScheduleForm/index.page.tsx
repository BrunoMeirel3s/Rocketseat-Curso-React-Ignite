import { ConfirmStep } from './ConfirmStep'

import { useState } from 'react'
import { CalendarStep } from './CalendarStep'

export function ScheduleForm() {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>()

  function handleClearSelectedDateTime() {
    setSelectedDateTime(null)
  }

  if (selectedDateTime) {
    return (
      <ConfirmStep
        schedulingDate={selectedDateTime}
        onCancelConfirmation={handleClearSelectedDateTime}
      />
    )
  }
  return <CalendarStep onSelectDateTime={setSelectedDateTime} />
}
