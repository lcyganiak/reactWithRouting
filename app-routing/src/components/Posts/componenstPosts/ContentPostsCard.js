import React, { useState } from 'react';

const ContentPostsCard = (props) => {
  const [content, setTitle] = useState(props.content);
  const [classCss, setClass] = useState(props.classCss)
  console.log(props)
  return (
    <div className={classCss}>
      <p>{content}</p>
    </div>
  )

}

export default ContentPostsCard