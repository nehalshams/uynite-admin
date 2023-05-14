import Dropdown from '@/components/Dropdown'
import React from 'react'
import { Tables } from '../dashboard'

const Report = () => {
    const reportOption = [{ name: 'Open Reports'}, { name: 'Closed Reports'}, { name: 'Deleted Posts/Comments'}]
    const thead = ['S.N', 'Select All', 'Profile', 'Reported As', 'Post', 'Status', 'Reason']
  return (
    <div>
       <Tables tableHeading={'Reports'}
        subheading={[1,2]}
        statusOption={reportOption}
        thead={thead}
       />
    </div>
  )
}

export default Report