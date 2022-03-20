import React, { FC, MutableRefObject } from "react";
import { Image } from "react-bootstrap";
import pizza from "../../common/ui/assets/ic/pizza.png";
import pizzaRight from "../../common/ui/assets/ic/pizza-right.png";
import Background from "./Background";

import styles from "./Homepage.module.scss";

interface Props {
  left: MutableRefObject<any>;
  right: MutableRefObject<any>;
}

const Wrapper: FC<Props> = (props: Props) => {
  const { left, right } = props;
  const wrapperHoverHandler = (id: string) => {
    if (id === "right-wrapper") {
      left.current.classList.add(styles.blur);
      right.current.classList.remove(styles.blur);
    } else {
      right.current.classList.add(styles.blur);
      left.current.classList.remove(styles.blur);
    }
  };

  const resetWrapper = () => {
    left.current.classList.remove(styles.blur);
    right.current.classList.remove(styles.blur);
  };

  return (
    <div className={styles["main-wrapper"]} onMouseLeave={() => resetWrapper()}>
      <Background />
      <section
        className={styles["left-wrapper"]}
        onMouseEnter={(e) => wrapperHoverHandler(e.currentTarget.id)}
        ref={left}
        id="left-wrapper"
      >
        <div className={styles.box}>
          <Image src={pizza} id="left-wrapper" />
        </div>
      </section>
      <section
        className={styles["right-wrapper"]}
        onMouseEnter={(e) => wrapperHoverHandler(e.currentTarget.id)}
        ref={right}
        id="right-wrapper"
      >
        <div className={styles.box}>
          <Image src={pizzaRight} id="right-wrapper" />
        </div>
      </section>
    </div>
  );
};

export default Wrapper;
