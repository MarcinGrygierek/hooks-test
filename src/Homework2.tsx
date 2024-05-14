import { useRandomColor } from './hooks/useRandomColor'

export const Homework2 = () => {
  const color = useRandomColor('light')

  if (!color) return null

  return (
    <div
      style={{
        width: 300,
        height: 300,
        backgroundColor: color,
      }}
    />
  )
}
