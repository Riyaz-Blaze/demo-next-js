import React from 'react'

export interface ToastProps {
  title: string;
  status: string;
}

const Toast = ({title, status}: ToastProps) => {
  return (
    <div className={`toast align-items-center ${status === 'success' ? 'text-bg-success' : 'text-bg-danger'} border-0`} role="alert" aria-live="assertive" aria-atomic="true">
      <div className="d-flex">
        <div className="toast-body">
          {title}
        </div>
        <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  )
}

export default Toast