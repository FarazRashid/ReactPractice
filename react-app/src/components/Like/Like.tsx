import { AiOutlineHeart } from "react-icons/ai";
import styles from "./Like.module.css";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [isLiked, setLikedState] = useState(false);

  return (
    <AiOutlineHeart
      onClick={() => {
        onClick();
        setLikedState((prevValue) => !prevValue);
      }}
      className={isLiked ? styles.clicked : undefined}
    />
  );
};

export default Like;
