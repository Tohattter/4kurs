import React from 'react'

const Loader: React.FC = () => {
  const style = {
    width: '3rem',
    height: '3rem',
    margin: 'auto'
  }
  return (
    <div className="spinner-border" style={style} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Loader