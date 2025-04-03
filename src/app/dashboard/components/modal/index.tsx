"use client";

import { X } from "lucide-react";
import styles from "./styles.module.scss";
import { use } from "react";
import { OrderContext } from "@/providers/order";
import { calculateTotalOrder } from "@/lib/helper";

export function ModalOrder() {
  const { onRequestClose, order, finishOrder } = use(OrderContext);

  async function handleFinishOrder() {
    await finishOrder(order[0].order.id);
  }

  return (
    <dialog className={styles.dialogContainer}>
      <section className={styles.dialogContent}>
        <button className={styles.dialogBack} onClick={onRequestClose}>
          <X size={40} color="#FF3F4B" />
        </button>
        <article className={styles.container}>
          <h2>Detalhes do pedido</h2>
          <span className={styles.table}>
            Mesa <b>{order[0].order.table}</b>
          </span>
          {order[0].order?.name && (
            <span className={styles.name}>
              Nome: <b>{order[0].order.name}</b>
            </span>
          )}
          {order.map((item) => (
            <section className={styles.item} key={item.id}>
              <span>
                Qtd: {item.amont} - <b>{item.product.name}</b> - R${" "}
                {parseFloat(item.product.price) * item.amont}
              </span>
              <span className={styles.description}>
                {item.product.description}
              </span>
            </section>
          ))}

          <h3 className={styles.total}>
            Valor total: R$ {calculateTotalOrder(order)}
          </h3>

          <button className={styles.buttonOrder} onClick={handleFinishOrder}>
            Concluir pedido
          </button>
        </article>
      </section>
    </dialog>
  );
}
