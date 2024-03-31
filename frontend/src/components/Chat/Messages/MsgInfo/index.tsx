import { Msg } from '../../../../Interfaces/Msg'
import './style.scss'

interface Props{
  msg: Msg
}

function MsgInfo({msg}: Props) {
  return (
    <span className='MsgInfo'>
      <div className="text">
        {msg.msg}
      </div>
      <div className='status'>
        <div className="time">
          {msg.time}
        </div>
        <div className='statusImg'>
          <img src="../../../../../public/ic_sent.svg" alt="" />
        </div>
      </div>
    </span>
  )
}

export default MsgInfo