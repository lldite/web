function Cell(props: {content: string, x: number, y: number, setContent: (value: string) => void}) {
  return (
    <div className="Cell" onClick={_ => props.setContent(props.x.toString() + props.y.toString())}>
        {props.content}
    </div>
  )
}

export default Cell