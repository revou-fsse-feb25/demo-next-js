// TODO: Create a Card component to display information
export default function Card({title, content, classTailwind}) {
  return(
    <>
      <h1 className={classTailwind}>Nilai props title {title}</h1>
      <p>Content {content}</p>
    </>
  )
}