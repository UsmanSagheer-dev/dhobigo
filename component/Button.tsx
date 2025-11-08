import React from 'react'

export default function Button(props: any) {
  return (
    <button className={`bg-[var(--primary)] cursor-pointer flex items-center justify-center text-[var(--foreground)] py-2 px-4 rounded-lg ${props?.className}`}>{props?.icon} {props.Title}</button>
  )
}
