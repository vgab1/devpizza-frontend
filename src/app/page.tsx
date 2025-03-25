import Link from "next/link";
import styles from "./page.module.scss";
import logoImg from "/public/devpizza.svg";
import Image from "next/image";
import { api } from "@/services/api";
import { redirect } from "next/navigation";

export default function Page() {
  async function handleLogin(formDate: FormData) {
    "use server";

    const email = formDate.get("email");
    const password = formDate.get("password");

    if (email === "" || password === "") {
      return;
    }

    try {
      const response = await api.post("/session", {
        email,
        password,
      });

      if (!response.data.token) {
        return;
      }

      console.log(response.data);
    } catch (err) {
      console.log(err);
      return;
    }

    redirect("/dashboard");
  }

  return (
    <>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo da pizzaria" />
        <section className={styles.login}>
          <form action={handleLogin}>
            <input
              type="email"
              required
              name="email"
              placeholder="Digite seu email..."
              className={styles.input}
            />
            <input
              type="password"
              required
              name="password"
              placeholder="**********"
              className={styles.input}
            />
            <button type="submit">Acessar</button>
          </form>
          <Link href="/signup" className={styles.text}>
            Não possui uma conta? Cadastre-se
          </Link>
        </section>
      </div>
    </>
  );
}
