import { Link } from "react-router-dom";
import { motion } from "motion/react";

import {
  UsersThreeIcon,
  ListBulletsIcon,
  TrashIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";

function Home() {
  const funcionalidades = [
    {
      icon: UsersThreeIcon,
      title: "Gestão de colaboradores",
      description:
        "Tenha os colaboradores da FITHUB organizados em um único ambiente, facilitando a consulta e o acompanhamento das informações da equipe.",
    },
    {
      icon: ListBulletsIcon,
      title: "Lista centralizada",
      description:
        "Visualize os colaboradores de forma clara e organizada, sem precisar procurar informações em diferentes lugares.",
    },
    {
      icon: TrashIcon,
      title: "Exclusão simplificada",
      description:
        "Remova colaboradores que não fazem mais parte da equipe de maneira rápida e prática.",
    },
  ];

  const beneficios = [
    "Informações organizadas em um único lugar",
    "Visualização rápida dos colaboradores",
    "Interface simples e intuitiva",
    "Gestão mais prática para a equipe",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">

      {/* =========================
          HERO
      ========================== */}
      <section className="relative px-5 mt-16 pb-16 pt-10 sm:px-8 lg:px-12 lg:pb-20 lg:pt-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Gestão de colaboradores
              <span className="block text-blue-600">
                simples, organizada e eficiente.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Uma solução criada para centralizar a gestão dos colaboradores
              da FITHUB, facilitando a visualização, organização e controle
              das informações da equipe em um único lugar.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/about"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Conheça o sistema

                <ArrowRightIcon
                  size={19}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>


            </div>
          </motion.div>

          {/* IMAGEM HERO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-100/60 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white bg-white p-2 shadow-2xl shadow-slate-300/50">
              <img
                src="https://ik.imagekit.io/bellaceccon/fithub_rh_home_cat_pt.png"
                alt="Sistema de gestão de colaboradores FITHUB"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>


      {/* =========================
          FUNCIONALIDADES
      ========================== */}
      <section
        id="funcionalidades"
        className="px-5 py-10 sm:px-8 lg:px-12 lg:py-12"
      >
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >


            <h2 className="text-5xl font-bold text-slate-900">
              Tudo o que você precisa para{" "}
              <span className="text-blue-600">
                organizar sua equipe.
              </span>
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {funcionalidades.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-100/40"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={25} weight="duotone" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =========================
          GESTÃO CENTRALIZADA
          IMAGEM MAIOR
      ========================== */}
      <section className="bg-slate-900 mt-12 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">

            {/* TEXTO */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Gestão centralizada
              </span>

              <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Mais praticidade para administrar a equipe.
              </h2>



              <div className="mt-7 space-y-3.5">
                {beneficios.map((beneficio) => (
                  <div
                    key={beneficio}
                    className="flex items-start gap-3 text-lg text-slate-200"
                  >
                    <CheckCircleIcon
                      size={20}
                      weight="fill"
                      className="mt-0.5 shrink-0 text-blue-400"
                    />

                    <span>{beneficio}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* IMAGEM GRANDE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full"
            >
              <div className="relative">

                {/* brilho atrás da imagem */}
                <div className="absolute -inset-3 rounded-3xl bg-blue-500/10 blur-2xl" />

                <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 p-2 shadow-2xl">
                  <img
                    src="https://ik.imagekit.io/eosfuraqd/Captura%20de%20tela%202026-08-24%20114902.png"
                    alt="Tela de gestão de colaboradores da FITHUB"
                    className="block h-auto w-full rounded-xl object-contain"
                  />
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================
    CTA FINAL
========================== */}
      <section className="px-5 mt-16 pb-16 pt-4 sm:px-8 lg:px-12 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-12 shadow-sm sm:px-12 sm:py-14"
        >

          {/* Elementos decorativos */}
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-50 blur-3xl" />

          <div className="absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-slate-100 blur-3xl" />

          <div className="relative z-10 text-center">


            <h2 className="mx-auto mt-5 max-w-2xl text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
              Entre em {''}
              <span className=" text-blue-600">
                 Contato
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Conheça nossos planos
              Contrate a plataforma integrada FitHub e tenha acesso a gestão de benefícios, pessoas e despesas com custo zero.
              
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Contrate agora

                <ArrowRightIcon
                  size={18}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

            <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3 text-xs text-slate-400">
              <span className="h-px flex-1 bg-slate-200" />
              <span>FITHUB • RH</span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>

          </div>
        </motion.div>
      </section>

    </main>
  );
}

export default Home;