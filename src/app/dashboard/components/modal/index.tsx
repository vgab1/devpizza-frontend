import { X } from "lucide-react";
import styles from "./styles.module.scss";

export function ModalOrder() {
  return (
    <dialog className={styles.dialogContainer}>
      <section className={styles.dialogContent}>
        <button className={styles.dialogBack}>
          <X size={40} color="#FF3F4B" />
        </button>
        <article className={styles.container}>
          <h2>Detalhes do pedido</h2>
          <span className={styles.table}>
            Mesa <b>31</b>
          </span>
          <section className={styles.item}>
            <span>
              1 - <b>Pizza de Calabresa</b>
            </span>
            <span className={styles.description}>
              Pizza grande com borda recheada de catupiry
            </span>
          </section>
          <button className={styles.buttonOrder}>Concluir pedido</button>
        </article>
      </section>
    </dialog>
  );
}
