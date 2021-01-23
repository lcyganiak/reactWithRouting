import React, { useState } from 'react';

const ContentPostsCard = (props) => {
  const [content, setTitle] = useState(props.content);
  const [classCss, setClass] = useState(props.classCss)
  return (
    <div className={classCss}>
      <h1>{content}</h1>
    </div>
  )

}

export default ContentPostsCard