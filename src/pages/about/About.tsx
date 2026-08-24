import { motion } from "motion/react";
import {
    RocketLaunchIcon,
    EyeIcon,
    CheckCircleIcon,
    UsersThreeIcon,
    SparkleIcon,
} from "@phosphor-icons/react";

const team = [
    {
        name: "Danielle",
        img: "https://ik.imagekit.io/bellaceccon/Danielle.jpg",
    },
    {
        name: "Gislene",
        img: "https://ik.imagekit.io/bellaceccon/Gislene.jpg",
    },
    {
        name: "Isabella",
        img: "https://ik.imagekit.io/bellaceccon/bella.png",
    },
    {
        name: "Manuella",
        img: "https://ik.imagekit.io/bellaceccon/MANU.jpeg",
    },
    {
        name: "Raquel",
        img: "https://ik.imagekit.io/bellaceccon/raquel%202.jpeg",
    },
    {
        name: "Yan",
        img: "https://ik.imagekit.io/bellaceccon/Yan.jpg",
    },
];

const values = [
    "Ética, respeito e espírito de equipe",
    "Melhoria contínua e inovação",
    "Senso questionador e de resultados",
    "Sucesso do cliente",
];

export default function About() {
    return (
        <main className="min-h-screen overflow-hidden bg-white text-slate-900">

            {/* =====================================================
          TOPO - FOTOS + MISSÃO / VISÃO / VALORES
      ====================================================== */}

            <section className="px-5 mt-6 py-12 sm:px-8 lg:px-12 lg:py-20">
                <div className="mx-auto max-w-7xl">

                    <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">

                        {/* =================================================
                FOTOS
            ================================================== */}

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative mx-auto w-full max-w-[560px]"
                        >

                            {/* Círculo azul superior */}
                            <div className="absolute -left-5 top-0 h-28 w-28 rounded-full border-[12px] border-blue-500" />

                            {/* Círculo preto superior */}
                            <div className="absolute -left-2 top-8 h-24 w-24 rounded-full border-[8px] border-slate-950" />

                            {/* Círculos inferiores */}
                            <div className="absolute bottom-0 right-7 h-32 w-52 rounded-[50%] border-[14px] border-slate-950" />

                            <div className="absolute bottom-5 right-20 h-24 w-48 rounded-[50%] border-[12px] border-blue-500" />

                            {/* Primeira foto */}
                            <div className="relative z-10 overflow-hidden rounded-[1.8rem]">
                                <img
                                    src="https://ik.imagekit.io/bellaceccon/sobrenos.jpg"
                                    alt="Equipe reunida"
                                    className="h-[300px] w-full object-cover sm:h-[350px]"
                                />
                            </div>

                            {/* Segunda foto */}
                            <div className="relative z-20 -mt-16 ml-5 w-[72%] overflow-hidden rounded-[1.8rem] border-4 border-white shadow-xl shadow-slate-900/20">
                                <img
                                    src="https://ik.imagekit.io/iibl43pgxp/Human.jpg"
                                    alt="Equipe trabalhando"
                                    className="h-[190px] w-full object-cover"
                                />
                            </div>

                        </motion.div>


                        {/* =================================================
                MISSÃO / VISÃO / VALORES
            ================================================== */}

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="grid gap-8 sm:grid-cols-2"
                        >

                            {/* MISSÃO */}
                            <div>
                                <RocketLaunchIcon
                                    size={42}
                                    weight="duotone"
                                    className="text-blue-500"
                                />

                                <h2 className="mt-2 text-2xl font-bold text-blue-600">
                                    Missão
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Facilitar a sua vida com soluções inovadoras de gestão.
                                </p>
                            </div>


                            {/* VISÃO */}
                            <div>
                                <EyeIcon
                                    size={42}
                                    weight="duotone"
                                    className="text-slate-950"
                                />

                                <h2 className="mt-2 text-2xl font-bold text-slate-950">
                                    Visão
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Facilitar a vida de 5 mil empresas até 2028, sendo 3500 com
                                    o RH e 1500 com o Clinic.
                                </p>
                            </div>


                            {/* VALORES */}
                            <div className="sm:col-span-2">

                                <SparkleIcon
                                    size={42}
                                    weight="duotone"
                                    className="text-blue-600"
                                />

                                <h2 className="mt-2 text-2xl font-bold text-blue-600">
                                    Valores
                                </h2>

                                <div className="mt-4 grid gap-3 sm:grid-cols-2">

                                    {values.map((value) => (
                                        <div
                                            key={value}
                                            className="flex items-center gap-2"
                                        >
                                            <CheckCircleIcon
                                                size={20}
                                                weight="fill"
                                                className="shrink-0 text-blue-600"
                                            />

                                            <span className="text-sm text-slate-700">
                                                {value}
                                            </span>
                                        </div>
                                    ))}

                                </div>
                            </div>

                        </motion.div>

                    </div>
                </div>
            </section>


            {/* =====================================================
          QUEM SOMOS
      ====================================================== */}

            <section className="border-y border-slate-200 bg-slate-50 px-6 py-20 sm:px-10 lg:py-24">

                <div className="mx-auto max-w-6xl">

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-3xl text-center"
                    >

                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                            Quem somos
                        </span>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                            Mais do que tecnologia,
                            <span className="block text-blue-600">
                                construímos soluções.
                            </span>
                        </h2>

                        <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                            Somos uma equipe movida por inovação, colaboração e pelo desejo
                            de tornar a gestão mais simples, eficiente e humana.
                        </p>

                        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                            Nosso trabalho nasce da combinação entre tecnologia, estratégia
                            e pessoas. Criamos soluções inovadoras de gestão para facilitar
                            processos, apoiar empresas e transformar desafios do dia a dia
                            em oportunidades de evolução.
                        </p>

                    </motion.div>

                </div>
            </section>


            {/* =====================================================
          MISSÃO E VISÃO - CARDS
      ====================================================== */}

            <section className="px-6 py-20 sm:px-10 lg:py-24">

                <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">

                    {/* MISSÃO */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10"
                    >

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                            <RocketLaunchIcon
                                size={30}
                                weight="duotone"
                            />
                        </div>

                        <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                            Nossa missão
                        </p>

                        <h3 className="mt-3 text-2xl font-bold text-slate-950">
                            Facilitar a sua vida.
                        </h3>

                        <p className="mt-4 leading-7 text-slate-600">
                            Facilitar a sua vida com soluções inovadoras de gestão.
                        </p>

                    </motion.div>


                    {/* VISÃO */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="rounded-3xl bg-slate-950 p-8 text-white shadow-sm sm:p-10"
                    >

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                            <EyeIcon
                                size={30}
                                weight="duotone"
                            />
                        </div>

                        <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-blue-400">
                            Nossa visão
                        </p>

                        <h3 className="mt-3 text-2xl font-bold">
                            Crescer junto com nossos clientes.
                        </h3>

                        <p className="mt-4 leading-7 text-slate-300">
                            Facilitar a vida de 5 mil empresas até 2028, sendo 3500 com o RH
                            e 1500 com o Clinic.
                        </p>

                    </motion.div>

                </div>
            </section>


            {/* =====================================================
          VALORES
      ====================================================== */}

            <section className="bg-slate-50 px-6 py-20 sm:px-10 lg:py-24">

                <div className="mx-auto max-w-6xl">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 text-center"
                    >

                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                            O que nos move
                        </span>

                        <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
                            Nossos valores
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                            Princípios que orientam nossas decisões, nosso trabalho e a
                            maneira como construímos relações.
                        </p>

                    </motion.div>


                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        {values.map((value, index) => (
                            <motion.div
                                key={value}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                            >

                                <CheckCircleIcon
                                    size={28}
                                    weight="duotone"
                                    className="text-blue-600"
                                />

                                <p className="mt-5 font-semibold leading-6 text-slate-800">
                                    {value}
                                </p>

                            </motion.div>
                        ))}

                    </div>

                </div>
            </section>


            {/* =====================================================
          EQUIPE
      ====================================================== */}

            <section className="bg-slate-950 px-6 py-20 text-white sm:px-10 lg:py-28">

                <div className="mx-auto max-w-6xl">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-2xl text-center"
                    >

                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                            <UsersThreeIcon
                                size={30}
                                weight="duotone"
                            />
                        </div>

                        <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                            Quem faz acontecer
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
                            Nossa equipe
                        </h2>

                        <p className="mt-5 leading-7 text-slate-400">
                            Pessoas diferentes, talentos diferentes e um objetivo em comum:
                            criar soluções que realmente façam a diferença.
                        </p>

                    </motion.div>


                    {/* CARDS DA EQUIPE */}
                    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                className="group text-center"
                            >

                                <div className="mx-auto aspect-square max-w-[230px] overflow-hidden rounded-3xl bg-slate-800 ring-1 ring-white/10">

                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />

                                </div>

                                <h3 className="mt-5 text-lg font-bold text-white">
                                    {member.name}
                                </h3>

                                <div className="mx-auto mt-2 h-1 w-8 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-14" />

                            </motion.div>
                        ))}

                    </div>

                </div>
            </section>

        </main>
    );
}