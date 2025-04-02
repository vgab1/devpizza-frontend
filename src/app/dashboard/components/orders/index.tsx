"use client";
import { use, useState } from "react";
import { RefreshCw } from "lucide-react";
import styles from "./styles.module.scss";
import { OrderProps } from "@/lib/order.type";
import { ModalOrder } from "../modal";
import { OrderContext } from "@/providers/order";

interface Props {
  orders: OrderProps[];
}

export function Orders({ orders }: Props) {
  const { isOpen, onRequstOpen } = use(OrderContext);

  async function handleDetailOrder(order_id: string) {
    await onRequstOpen(order_id);
  }

  return (
    <>
      <main className={styles.container}>
        <section className={styles.containerHeader}>
          <h1>Últimos pedidos</h1>
          <button>
            <RefreshCw size={24} color="#3ff3a3" />
          </button>
        </section>
        <section className={styles.listOrders}>
          {orders.map((order) => (
            <button
              key={order.id}
              className={styles.orderItem}
              onClick={() => handleDetailOrder(order.id)}
            >
              <div className={styles.tag}></div>
              <span>{`Mesa ${order.table}`}</span>
            </button>
          ))}
        </section>
      </main>
      {isOpen && <ModalOrder />}
    </>
  );
}
