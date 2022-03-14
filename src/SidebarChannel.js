import React from 'react'
import "./SidebarChannel.css"

// Redux e Dispatch
import { useDispatch } from 'react-redux';
import { setChannelInfo } from './features/appSlice';


function SidebarChannel({ id, channelName }) {

  const dispatch = useDispatch();

  function handleDispatch() {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channelName,
      })
    )
  }

  return (
    <div className="sidebarChannel" onClick={handleDispatch}>
      <h4>
        <span className="sidebarChannel__hash">#</span>{channelName}
      </h4>
    </div>
  )
}

export default SidebarChannel
