import React from 'react'
import '../../../style/css/lists/leadsTable.css'
import LeadCard from '../../cards/leadCard/LeadCard'
import { ILead } from '../../../ts/interfaces/ILead'

type TLeadsList = {
  leads: ILead[]
}

const LeadsTable: React.FC<TLeadsList> = ({ leads }) => {
  return (
    <table className='leadTable'>

      <thead>
        <tr>
          <th>ID</th>
          <th>Цена</th>
          <th>Название</th>
          <th>Назначено на</th>
          <th>Статус</th>
        </tr>
      </thead>

      <tbody>
        {leads.map((lead) => <LeadCard lead={lead} key={lead.id} />
        )}
      </tbody>
    </table>
  )
}

export default LeadsTable
