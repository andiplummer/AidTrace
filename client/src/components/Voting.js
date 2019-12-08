import React from 'react'
import chevronUp from '@iconify/icons-mdi/chevron-up';
import chevronDown from '@iconify/icons-mdi/chevron-down';
import { Icon, InlineIcon } from '@iconify/react';

function Vote(props) {
  console.log('props', props)
  return (
<div>
<div class="buttons">
  <div class="up-vote">
    <Icon icon={chevronUp} onClick={() => props.vote++} />
    <div size="small" color="primary" id="vote-number">
      {props.vote}
    </div>
    <Icon icon={chevronDown} onClick={() => props.vote--} />
  </div>
  </div>
</div>
  )
}

export default Vote